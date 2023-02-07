const onWindowClick = (e) => {
    if (e.target.tagName === "A") {
        e.target.parentNode.click();
    }
};

window.addEventListener("click", onWindowClick, false);
