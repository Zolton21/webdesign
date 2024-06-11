function toggleAnswer(element) {
    const answer = element.nextElementSibling;
    const toggle = element.querySelector('.faq-toggle');
    if (answer.style.display === "none" || !answer.style.display) {
        answer.style.display = "block";
        toggle.textContent = "-";
    } else {
        answer.style.display = "none";
        toggle.textContent = "+";
    }
}