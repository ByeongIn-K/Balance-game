class GameScreen extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    set questions(questions) {
        this._questions = questions;
        this.currentIndex = 0;
        this.renderCurrentQuestion();
    }

    renderCurrentQuestion() {
        if (!this._questions || this.currentIndex >= this._questions.length) {
            this.shadowRoot.innerHTML = `
            <style>
                .card { background-color: var(--surface-color); border-radius: 20px; padding: 40px; text-align: center; }
                .card-title { font-size: 2rem; margin-bottom: 1rem; color: var(--text-color); }
                #home-btn { /* Style to match global .menu-button */
                    font-family: inherit; font-size: 1.2rem; font-weight: 600; color: var(--text-color);
                    background-color: rgba(0,0,0,0.2); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 15px;
                    padding: 15px 30px; margin-top: 20px; cursor: pointer; transition: all 0.2s ease-out;
                }
                #home-btn:hover { background-color: var(--accent-color); border-color: var(--accent-color); transform: translateY(-5px); }
            </style>
            <div class="card">
                <h1 class="card-title">모든 질문에 답했습니다! 🎉</h1>
                <button id="home-btn" class="menu-button">처음으로</button>
            </div>`;
            this.shadowRoot.getElementById('home-btn').addEventListener('click', () => {
                this.dispatchEvent(new CustomEvent('game-over', { bubbles: true, composed: true }));
            });
            return;
        }

        const question = this._questions[this.currentIndex];
        const choicesHtml = question.options.map((option, index) => 
            `<button class="choice-btn" data-choice-id="${index}">
                <span>${option}</span>
            </button>`
        ).join('');

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    perspective: 1000px;
                }
                .game-container {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    animation: fadeIn 0.5s ease-out;
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .question-container {
                    padding: 40px 20px 20px 20px;
                    text-align: center;
                }
                .question-text {
                    font-size: 2.2rem;
                    font-weight: 700;
                    color: var(--text-color);
                    line-height: 1.4;
                }
                .choices-container {
                    flex-grow: 1;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 20px;
                    padding: 20px;
                }
                .choice-btn {
                    min-height: 30vh;
                    background-color: var(--surface-color);
                    color: var(--text-color);
                    border: 2px solid transparent;
                    border-radius: 20px;
                    font-family: 'Pretendard', sans-serif;
                    font-size: 1.8rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.2s ease-out;
                    position: relative;
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 20px;
                }
                .choice-btn:hover {
                    transform: translateY(-5px);
                    border-color: var(--accent-color);
                }
                .choice-btn.selected {
                    border-color: var(--accent-color);
                    box-shadow: 0 0 25px 5px var(--accent-glow);
                    transform: scale(1.03);
                }
            </style>
            <div class="game-container">
                <div class="question-container">
                    <p class="question-text">${question.question}</p>
                </div>
                <div class="choices-container">
                    ${choicesHtml}
                </div>
            </div>
        `;

        this.shadowRoot.querySelectorAll('.choice-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                this.handleChoice(e.currentTarget.dataset.choiceId);
            });
        });
    }

    handleChoice(choiceId) {
        const choiceButtons = this.shadowRoot.querySelectorAll('.choice-btn');
        
        choiceButtons.forEach(btn => btn.disabled = true);
        
        choiceButtons.forEach((button, index) => {
            if (index == choiceId) {
                button.classList.add('selected');
            }
        });

        this.currentIndex++;
        setTimeout(() => {
            this.renderCurrentQuestion();
        }, 1000); // Shortened delay for quick transition
    }
}

customElements.define('game-screen', GameScreen);
