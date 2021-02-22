const fadedClassNames = ["c5a", "c73", "c82", "c88", "c9c", "cae", "cbe", "cce", "cdd"];

function removeHeaderKarma() {
    let header = document.getElementsByClassName("pagetop")[1];
    if (header) {
        header.childNodes[2].textContent = " | ";
    }
}

function replaceFadedComments() {
    fadedClassNames.forEach((className) => {
        let matchingComments = Array.from(document.getElementsByClassName(className));
        matchingComments.forEach((comment) => comment.classList.replace(className, "c00"));
    });
}

removeHeaderKarma();
replaceFadedComments();