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

    // functions to expand and shrink height of container
    function enlargeContainer() {
        // remove maxheight of Parentcontainer so it fits text
        this.parentElement.style.maxHeight = "none";
        this.parentElement.style.overflowY = "scroll";

        // don't display CEO image and subtitle anymore
        this.parentElement.nextElementSibling.style.display = "none";
        this.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.style.display = "none";

        // Change button text
        this.children[0].innerHTML = "Weniger lesen...";

        // make it so "read more" banner is part of document flow again, so it's not on top of text
        this.style.position = "relative";

        this.removeEventListener("click", enlargeContainer);
        this.addEventListener("click", shrinkContainer);
    }

    function shrinkContainer() {
        // Same as function above but in reverse

        this.parentElement.style.maxHeight = "230px";
        this.parentElement.scrollTop = 0;
        this.parentElement.style.overflowY = "hidden";
        this.parentElement.nextElementSibling.style.display = "block";
        this.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.style.display = "block";
        this.children[0].innerHTML = "Mehr lesen...";
        this.style.position = "absolute";
        this.removeEventListener("click", shrinkContainer);
        this.addEventListener("click", enlargeContainer);
    }

    anime({
        targets: '.main__container__start img',
        width: "90px",
        bottom: "0px",
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutSine'
    });

    anime({
        targets: 'main__container__start img:hover',
        width: "100px",
        bottom: "0px",
        direction: 'alternate',
        easing: 'easeInOutSine'
    });

});