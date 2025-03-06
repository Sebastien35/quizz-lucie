function toggleAnswer(id) {
    const answer = document.getElementById(`answer${id}`);
    const arrow = answer.previousElementSibling.querySelector('.arrow');

    if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
        arrow.textContent = '▼';
    } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
        arrow.textContent = '▲';
    }
}