document.addEventListener('DOMContentLoaded', function () {

    const ceoParagraphContainers = document.getElementsByClassName("CEOs__content__paragraphcontainer");
    const ceoParagraphs = document.getElementsByClassName("CEOs__content__paragraph__large");
    const ceoParagraphButtons = document.getElementsByClassName("read__more");

    // enable "show more" button, if the text is too large for the container
    for (let i = 0; i < ceoParagraphContainers.length; i++) {
        if (ceoParagraphContainers[i].offsetHeight < ceoParagraphs[i].offsetHeight) {
            ceoParagraphButtons[i].style.display = "block";
            ceoParagraphButtons[i].addEventListener("click", enlargeContainer);
        }
    }

    // function to change height of container and make space
    function enlargeContainer() {
        this.parentElement.style.maxHeight = "none";
        this.parentElement.nextElementSibling.style.display = "none";
        this.style.display = "none";
    }

});