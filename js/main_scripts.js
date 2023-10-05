document.addEventListener('DOMContentLoaded', function () {

    // function to fix issue that on mobile the browser search bar messes up the layout
    function adjustHeight() {
        const windowHeight = window.innerHeight;
        document.querySelectorAll('.main__container').forEach(container => container.style.height = windowHeight + 'px');
    }

    // Call adjustHeight when the page loads and on window resize
    window.addEventListener('load', adjustHeight);
    window.addEventListener('resize', adjustHeight);

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

    // animations:

    // idle animation of start button
    anime({
        targets: '.main__container__start img',
        width: "90px",
        bottom: "0px",
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutSine'
    });

    // brightness animations for arrow buttons
    function brighten() {
        anime({
            targets: this,
            filter: [
                'brightness(' + 1 + ')', // Start with initial brightness
                'brightness(' + 1.1 + ')' // End with target brightness
            ],
            duration: 100,
            easing: 'easeInOutSine'
        });
    }
    function darken() {
        anime({
            targets: this,
            filter: [
                'brightness(' + 1.1 + ')', // Start with initial brightness
                'brightness(' + 1 + ')' // End with target brightness
            ],
            duration: 100,
            easing: 'easeInOutSine'
        });
    }

    function flash() {
        anime({
            targets: this,
            filter: [
                'brightness(' + 1.1 + ')', // Start with initial brightness
                'brightness(' + 1.2 + ')' // End with target brightness
            ],
            duration: 30,
            easing: 'easeInOutSine'
        });
    }

    // scale animations for cv buttons
    function scale() {
        anime({
            scale: 1.05,
            targets: this,
            duration: 500,
            easing: 'easeInOutSine'
        });
    }

    function normalizeScale() {
        anime({
            scale: 1,
            targets: this,
            duration: 500,
            easing: 'easeInOutSine'
        });
    }

    function shrink() {
        anime({
            scale: 0.95,
            targets: this,
            duration: 30,
            easing: 'easeInOutSine'
        });
    }

    // add brightening transitions to start-arrow
    const startImg = document.querySelector(".main__container__start img");
    startImg.addEventListener("mouseover", brighten);
    startImg.addEventListener("mouseleave", darken);
    startImg.addEventListener("mousedown", flash);

    // add scale transitions to cv buttons
    const cvButtons = document.getElementsByClassName("CEOs__content__cvbutton");
    for (let i = 0; i < cvButtons.length; i++) {
        cvButtons[i].addEventListener("mouseover", scale);
        cvButtons[i].addEventListener("mouseleave", normalizeScale);
        cvButtons[i].addEventListener("mousedown", shrink);
    }

    // add brightening transitions to arrow buttons
    const arrowImgs = document.querySelectorAll("img[src='imgs/arrow.png']")
    for (let i = 0; i < arrowImgs.length; i++) {
        arrowImgs[i].addEventListener("mouseover", brighten);
        arrowImgs[i].addEventListener("mouseleave", darken);
        arrowImgs[i].addEventListener("mousedown", flash);
    }

});