function handleTextAfterPause(text) {
    console.log(`User stopped typing with text: ${text}`);

    // Send the text to the server
    fetch('http://localhost:5000/credit-card', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: text })
    })
    .then(response => response.text())
    .then(data => {
        console.log(`Server responded with: ${data}`);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

window.handleTextAfterPause = handleTextAfterPause;