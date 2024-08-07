const extraordinaryCard = document.querySelectorAll('.extraordinary-card');
const faqQuestions = document.querySelectorAll('.faq-content-body-question');


const addActiveClass = (items, active) => {
    items.forEach(item => {
            item.addEventListener('click', function() {
                
                items.forEach(el => el.classList.add(active));
                
                this.classList.remove(active);
            });
        });
}



faqQuestions.forEach(question => {
    const title = question.querySelector('.faq-content-body-question-title');
    const text = question.querySelector('.faq-content-body-question-text');
    const rotate = question.querySelector('.triangle');

    title.addEventListener('click', () => {
        
        faqQuestions.forEach(otherQuestion => {
            const otherText = otherQuestion.querySelector('.faq-content-body-question-text');
            const otherRotate = otherQuestion.querySelector('.triangle');

            
            if (otherText !== text) {
                otherText.classList.add('display-none');
                otherRotate.classList.remove('triangle-rotate');
            }
        });

        
        text.classList.toggle('display-none');
        rotate.classList.toggle('triangle-rotate');
    });
});



document.addEventListener('DOMContentLoaded', () => {
    addActiveClass(extraordinaryCard, 'active');
    
})
