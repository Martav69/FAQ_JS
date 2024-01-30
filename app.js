
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        
        // Vérifiez si la réponse cliquée est déjà ouverte
        const isAlreadyOpen = answer.classList.contains('active');
        
        // Masquer toutes les réponses
        document.querySelectorAll('.faq-answer').forEach(answer => {
            answer.classList.remove('active');
            answer.style.maxHeight = null; // Réinitialisez la hauteur maximale
        });

        // Si la réponse cliquée n'était pas déjà ouverte, ouvrez-la
        if (!isAlreadyOpen) {
            answer.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    });
});
