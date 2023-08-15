let timeout;

document.getElementById("textInput").addEventListener("input", function(e) {
    clearTimeout(timeout); // clear the previous timeout if the user is still typing

    timeout = setTimeout(function() {
        if (typeof window.handleTextAfterPause === 'function') {
            window.handleTextAfterPause(e.target.value);
        }
    }, 3000); // 3 seconds
});
