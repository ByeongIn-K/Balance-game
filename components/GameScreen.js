import { t, getTranslated } from '../locales/i18n.js';

class GameScreen extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        
        this.selectionTimer = null;
        this.selectedChoiceId = null;

        this.handleEscKey = this.handleEscKey.bind(this);
        this.render = this.render.bind(this);
    }

    set questions(questions) {
        this._questions = questions;
        this.currentIndex = 0;
        this.render();
    }

    // Public method to be called on language change
    render() {
        this.renderCurrentQuestion();
    }
    
    handleEscKey(e) {
        if (e.key === 'Escape') {
            this.cancelSelection();
        }
    }

    renderCurrentQuestion() {
        if (!this._questions || this.currentIndex >= this._questions.length) {
            this.shadowRoot.innerHTML = `
            <style>
                 :host { display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; padding: 2rem; }
                .game-card { width: 100%; max-width: 900px; padding: 3rem 4rem; background-color: rgba(22, 33, 62, 0.5); border-radius: 30px; backdrop-filter: blur(15px); border: 1px solid rgba(255, 255, 255, 0.1); box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2); display: flex; flex-direction: column; align-items: center; gap: 1.5rem; animation: fadeIn 0.5s ease-out; color: var(--text-color); }
                 @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
                .card-title { font-size: clamp(2rem, 3.5vw, 3rem); margin-bottom: 1rem; color: var(--text-color); text-align: center; font-weight: 700; }
                #home-btn { font-family: 'Pretendard', sans-serif; font-size: clamp(1.2rem, 1.8vw, 1.5rem); font-weight: 700; color: #fff; background-color: var(--accent-color); border: none; border-radius: 15px; padding: 15px 40px; cursor: pointer; transition: all 0.2s ease-out; box-shadow: 0 0 20px var(--accent-glow); }
                #home-btn:hover { transform: scale(1.05); box-shadow: 0 0 30px var(--accent-glow); }
            </style>
            <div class="game-card">
                <h1 class="card-title">${t('show-results')}! 🎉</h1>
                <button id="home-btn">${t('play-again')}</button>
            </div>`;
            this.shadowRoot.getElementById('home-btn').addEventListener('click', () => {
                this.dispatchEvent(new CustomEvent('game-over', { bubbles: true, composed: true }));
            });
            return;
        }

        const question = this._questions[this.currentIndex];
        
        this.shadowRoot.innerHTML = `
            <style>
                :host { 
                    --ease-quint: cubic-bezier(0.4, 0, 0.2, 1);
                    --duration-quick: 150ms;
                    --duration-normal: 200ms;
                    --duration-slow: 300ms;
                    --duration-timer: 1000ms; /* JS 타이머와 일치 */

                    display: flex; 
                    justify-content: center; 
                    align-items: center; 
                    width: 100%; 
                    height: 100%;
                    padding: 2rem;
                }
                .game-card { 
                    width: 100%; 
                    max-width: 1100px; 
                    padding: 3rem 4rem; 
                    background-color: rgba(22, 33, 62, 0.5); 
                    border-radius: 30px; 
                    backdrop-filter: blur(15px); 
                    border: 1px solid rgba(255, 255, 255, 0.1); 
                    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2); 
                    display: flex; 
                    flex-direction: column; 
                    gap: 2.5rem; 
                    animation: fadeIn var(--duration-slow) var(--ease-quint); 
                }
                @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
                
                .question-text { font-size: clamp(2rem, 3.8vw, 3.5rem); font-weight: 700; text-align: center; line-height: 1.6; color: var(--text-color); margin-bottom: 2rem; }
                .choices-wrapper { display: flex; justify-content: center; align-items: center; gap: 3rem; width: 100%; }
                .vs-divider { font-size: clamp(2.5rem, 4vw, 3.5rem); font-weight: 800; color: var(--highlight-color); text-shadow: 0 0 10px rgba(240, 165, 0, 0.5); flex-shrink: 0; }
                
                .choice-button {
                    flex: 1;
                    font-family: 'Pretendard', sans-serif;
                    font-size: clamp(1.8rem, 3vw, 2.5rem);
                    font-weight: 600;
                    padding: 3rem 2.5rem;
                    border: 2px solid transparent;
                    border-radius: 25px;
                    background-color: var(--surface-color);
                    color: var(--text-color);
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    min-height: 200px;
                    box-shadow: 0 5px 20px rgba(0,0,0,0.3);
                    position: relative;
                    overflow: hidden;
                    
                    transition: 
                        transform var(--duration-quick) var(--ease-quint),
                        background-color var(--duration-normal) var(--ease-quint),
                        border-color var(--duration-normal) var(--ease-quint),
                        box-shadow var(--duration-normal) var(--ease-quint),
                        opacity var(--duration-slow) var(--ease-quint),
                        filter var(--duration-slow) var(--ease-quint);
                }
                
                .choice-button:hover:not(.disabled) {
                    transform: translateY(-8px);
                    border-color: var(--accent-color);
                    box-shadow: 0 0 30px var(--accent-glow);
                }

                .choice-button.selected {
                    transform: translateY(-8px) scale(1.03);
                    border-color: var(--highlight-color);
                    box-shadow: 0 0 35px 5px var(--highlight-color);
                    background-color: rgba(240, 165, 0, 0.2);
                }
                
                .choice-button.disabled {
                    opacity: 0.5;
                    pointer-events: none;
                    filter: grayscale(80%);
                }
                
                .progress-bar {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    height: 5px;
                    background-color: var(--highlight-color);
                    width: 0;
                }
                
                .choice-button.selected .progress-bar {
                    width: 100%;
                    transition: width var(--duration-timer) linear;
                }
            </style>
            <div class="game-card">
                <h2 class="question-text">${getTranslated(question.text)}</h2>
                <div class="choices-wrapper">
                    <button class="choice-button" data-choice-id="0">
                        <span>${getTranslated(question.options[0].text)}</span>
                        <div class="progress-bar"></div>
                    </button>
                    <div class="vs-divider">VS</div>
                    <button class="choice-button" data-choice-id="1">
                        <span>${getTranslated(question.options[1].text)}</span>
                        <div class="progress-bar"></div>
                    </button>
                </div>
            </div>
        `;

        this.shadowRoot.querySelectorAll('.choice-button').forEach(button => {
            button.addEventListener('click', (e) => this.handleChoice(e.currentTarget));
        });

        // Restore selection state
        if (this.selectedChoiceId !== null) {
            const selectedButton = this.shadowRoot.querySelector(`[data-choice-id="${this.selectedChoiceId}"]`);
            const otherButtonId = this.selectedChoiceId === '0' ? '1' : '0';
            const otherButton = this.shadowRoot.querySelector(`[data-choice-id="${otherButtonId}"]`);
            if (selectedButton && otherButton) {
                selectedButton.classList.add('selected');
                otherButton.classList.add('disabled');
            }
        }
    }


    handleChoice(clickedButton) {
        const choiceId = clickedButton.dataset.choiceId;

        if (this.selectedChoiceId === choiceId) {
            this.cancelSelection();
        } else if (this.selectedChoiceId === null) {
            this.selectedChoiceId = choiceId;
            const otherButtonId = choiceId === '0' ? '1' : '0';
            const otherButton = this.shadowRoot.querySelector(`[data-choice-id="${otherButtonId}"]`);

            if (clickedButton && otherButton) {
                clickedButton.classList.add('selected');
                otherButton.classList.add('disabled');
            }

            document.addEventListener('keydown', this.handleEscKey);
            this.selectionTimer = setTimeout(() => {
                this.confirmChoice();
            }, 1000);
        }
    }

    cancelSelection() {
        if (this.selectionTimer) {
            clearTimeout(this.selectionTimer);
            this.selectionTimer = null;
        }
        document.removeEventListener('keydown', this.handleEscKey);
    
        this.shadowRoot.querySelectorAll('.choice-button').forEach(btn => {
            btn.classList.remove('selected', 'disabled');
            
            const progressBar = btn.querySelector('.progress-bar');
            if (progressBar) {
                progressBar.style.transition = 'none';
                progressBar.style.width = '0%';
                
                setTimeout(() => {
                    progressBar.style.removeProperty('transition');
                }, 20);
            }
        });
    
        this.selectedChoiceId = null;
    }

    confirmChoice() {
        document.removeEventListener('keydown', this.handleEscKey);
        this.selectionTimer = null;
        this.selectedChoiceId = null; 
        
        this.currentIndex++;
        
        setTimeout(() => {
            this.renderCurrentQuestion();
        }, 300);
    }
}

customElements.define('game-screen', GameScreen);
