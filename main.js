import { questionService } from './data.js';
import { t, setLanguage, getLanguage } from './locales/i18n.js';
import './components/GameScreen.js';

class App {
    constructor() {
        this.appElement = document.getElementById('app');
        this.questionService = questionService;
        if (!this.appElement) {
            console.error('Fatal: #app element not found.');
            return;
        }
        
        this.bindMethods();
        this.renderInitialUI(); // Changed from setupInitialUI
        this.addEventListeners();
        
        console.log('App initialized. Welcome to the NEON DIVE Balance Game!');
        this.route();
    }

    bindMethods() {
        this.showMainScreen = this.showMainScreen.bind(this);
        this.showCategoryScreen = this.showCategoryScreen.bind(this);
        this.route = this.route.bind(this);
        this.handleLanguageChange = this.handleLanguageChange.bind(this);
        this.render = this.render.bind(this);
    }
    
    renderInitialUI() {
        this.appElement.innerHTML = `
            <div class="screen main-screen"></div>
            <div class="screen category-screen hidden"></div>
        `;
        
        this.mainScreen = this.appElement.querySelector('.main-screen');
        this.categoryScreen = this.appElement.querySelector('.category-screen');
        
        this.gameContainer = document.createElement('div');
        this.gameContainer.className = 'screen game-screen hidden';
        this.appElement.appendChild(this.gameContainer);

        this.render(); // Initial render with the correct language
    }
    
    render() {
        // Re-render all text content
        this.mainScreen.innerHTML = `
            <div class="floating-container">
                <div class="floating-icon">😋</div>
                <div class="floating-icon">🔥</div>
                <div class="floating-icon">😈</div>
                <div class="floating-icon">🤪</div>
            </div>
            <h1 class="main-title">${t('main-title')}</h1>
            <p class="main-description">${t('main-description')}</p>
            <button class="cta-button">${t('start-game')}</button>
        `;
        
        this.categoryScreen.innerHTML = `
            <h2>${t('category-title')}</h2>
            <div class="button-grid">
                <button class="category-button" data-category="light">😋<span>${t('category-light')}</span></button>
                <button class="category-button" data-category="spicy">🔥<span>${t('category-spicy')}</span></button>
                <button class="category-button" data-category="danger">😈<span>${t('category-danger')}</span></button>
                <button class="category-button" data-category="random">🤪<span>${t('category-random')}</span></button>
            </div>
            <button class="back-button">${t('back')}</button>
        `;

        // Re-add event listeners to the newly created elements
        this.addEventListenersForRenderedContent();
    }


    addEventListeners() {
        window.addEventListener('popstate', this.route);
        document.querySelectorAll('.language-switcher button').forEach(button => {
            button.addEventListener('click', this.handleLanguageChange);
        });
        this.addEventListenersForRenderedContent();
    }

    addEventListenersForRenderedContent() {
        const ctaButton = this.appElement.querySelector('.cta-button');
        if (ctaButton) {
            ctaButton.addEventListener('click', this.showCategoryScreen);
        }

        const backButton = this.appElement.querySelector('.back-button');
        if (backButton) {
            backButton.addEventListener('click', this.showMainScreen);
        }
        
        this.appElement.querySelectorAll('.category-button').forEach(button => {
            // Prevent duplicate listeners
            button.replaceWith(button.cloneNode(true));
        });

        this.appElement.querySelectorAll('.category-button').forEach(button => {
            button.addEventListener('click', (e) => {
                this.handleCategoryClick(e.currentTarget.dataset.category);
            });
        });
    }

    handleLanguageChange(e) {
        const newLang = e.target.dataset.lang;
        setLanguage(newLang);
        this.render(); // Re-render the UI with the new language
        
        // If a game is in progress, we need to re-render it as well
        const gameScreen = this.gameContainer.querySelector('game-screen');
        if (gameScreen) {
            gameScreen.render();
        }
    }

    showMainScreen() {
        window.history.pushState({}, '', '/');
        this.mainScreen.classList.remove('hidden');
        this.categoryScreen.classList.add('hidden');
        if(this.gameContainer) this.gameContainer.classList.add('hidden');
    }

    showCategoryScreen() {
        this.mainScreen.classList.add('hidden');
        this.categoryScreen.classList.remove('hidden');
    }
    
    route() {
        const path = window.location.pathname;
        const match = path.match(/^\/q\/(\w+)$/);

        if (match) {
            const questionId = match[1];
            const question = this.questionService.getQuestionById(questionId);
            if (question) {
                const nextQuestions = this.questionService.getQuestions(question.category).filter(q => q.id != questionId);
                this.startGame([question, ...nextQuestions]);
            } else {
                // Not found logic
            }
        } else {
            this.showMainScreen();
        }
    }

    handleCategoryClick(category) {
        const questions = this.questionService.getQuestions(category);
        this.startGame(questions);
    }

    startGame(questions) {
        if (!questions || questions.length === 0) {
            // Error handling
            return;
        }
        
        this.mainScreen.classList.add('hidden');
        this.categoryScreen.classList.add('hidden');
        
        const gameScreen = document.createElement('game-screen');
        gameScreen.questions = questions;
        
        this.gameContainer.innerHTML = '';
        this.gameContainer.appendChild(gameScreen);
        this.appElement.appendChild(this.gameContainer);
        this.gameContainer.classList.remove('hidden');

        gameScreen.addEventListener('game-over', this.showMainScreen, { once: true });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new App();
});