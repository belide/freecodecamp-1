/**
 * Created by bikramkawan on 7/23/17.
 */

function initializeTypingText(i) {
    const textScrolls = ["Developer", "Nepali", "&#127932; Opeth "];
    if (textScrolls[i] === undefined) return initializeTypingText(0);

    if (i < textScrolls[i].length) {

        startTypingText(textScrolls[i], 0, function () {

            initializeTypingText(i + 1);
        });
    }
}


function startTypingText(text, i, fnCallback) {

    if (i < (text.length)) {
        const selector = document.querySelector(".typewrite");
        if (selector === null || selector === undefined) return;
        selector.innerHTML = text.substring(0, i + 1) +
            '<span aria-hidden="true"></span>';
        setTimeout(function () {
            startTypingText(text, i + 1, fnCallback)
        }, 150);
    }
    else if (typeof fnCallback === 'function') {
        setTimeout(fnCallback, 700);
    }
}

