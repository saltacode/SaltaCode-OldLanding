export class CountAnimation {
    constructor() {
        this.countElements = document.querySelectorAll('[data-count]');
        this.observer = null;
    }

    animateCount(element, delay) {
        const endCount = parseInt(element.getAttribute('data-count'));
        let currentCount = 0;

        const increment = 1;
        const counter = setInterval(() => {
            currentCount += increment;
            if (currentCount >= endCount) {
                clearInterval(counter);
                currentCount = endCount;
            }
            element.innerText = Math.floor(currentCount);
        }, delay);
    }

    startAnimation(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = parseInt(entry.target.getAttribute('data-count-delay')) || 1000;
                this.animateCount(entry.target, delay);
                this.observer.unobserve(entry.target);
            }
        });
    }

    init() {
        this.observer = new IntersectionObserver(this.startAnimation.bind(this), {
            threshold: 0.1
        });

        this.countElements.forEach(element => {
            this.observer.observe(element);
        });
    }
}
