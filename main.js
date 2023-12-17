function nextPage() {
    window.location.href = "yes.html";
}
function moveButton() {
    const buttonHeight = 42;
    const buttonWidth = 100;

    const maxWidth = window.innerWidth - buttonWidth;
    const maxHeight = window.innerHeight - buttonHeight;

    const button = document.querySelector(".button-no")

    button.style.left = Math.floor(Math.random() * (maxWidth + 1)) + 'px';
    button.style.top = Math.floor(Math.random() * (maxHeight + 1)) + "px";
}