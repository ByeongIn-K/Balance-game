import { questionService } from './data.js';
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
        this.setupInitialUI();
        this.addEventListeners();
        
        console.log('App initialized. Welcome to the NEON DIVE Balance Game!');
        this.route();
    }

    bindMethods() {
        this.showMainScreen = this.showMainScreen.bind(this);
        this.showCategoryScreen = this.showCategoryScreen.bind(this);
        this.route = this.route.bind(this);
    }

    setupInitialUI() {
        this.appElement.innerHTML = `
            <div class="screen main-screen">
                <div class="floating-container">
                    <div class="floating-icon">😋</div>
                    <div class="floating-icon">🔥</div>
                    <div class="floating-icon">😈</div>
                    <div class="floating-icon">🤪</div>
                </div>
                <h1 class="main-title">밸런스 게임</h1>
                <p class="main-description">친구, 연인, 가족과 함께 즐기는 최고의 선택 게임!</p>
                <button class="cta-button">게임 시작하기</button>
            </div>
            <div class="screen category-screen hidden">
                <h2>어떤 카테고리로 플레이할까요?</h2>
                <div class="button-grid">
                    <button class="category-button" data-category="light">😋<span>가벼운 맛</span></button>
                    <button class="category-button" data-category="spicy">🔥<span>매콤한 맛</span></button>
                    <button class="category-button" data-category="danger">😈<span>아찔한 맛</span></button>
                    <button class="category-button" data-category="random">🤪<span>아무거나!</span></button>
                </div>
                <button class="back-button">뒤로가기</button>
            </div>
        `;
        // appElement는 이제 main 태그이므로 그 안에서 화면 요소를 찾습니다.
        this.mainScreen = this.appElement.querySelector('.main-screen');
        this.categoryScreen = this.appElement.querySelector('.category-screen');
        
        this.gameContainer = document.createElement('div');
        this.gameContainer.className = 'screen game-screen hidden';
        this.appElement.appendChild(this.gameContainer); // gameContainer를 appElement (main)에 미리 추가
    }

    addEventListeners() {
        window.addEventListener('popstate', this.route);
        
        this.appElement.querySelector('.cta-button').addEventListener('click', this.showCategoryScreen);
        this.appElement.querySelector('.back-button').addEventListener('click', this.showMainScreen);
        
        this.appElement.querySelectorAll('.category-button').forEach(button => {
            button.addEventListener('click', (e) => {
                this.handleCategoryClick(e.currentTarget.dataset.category);
            });
        });
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