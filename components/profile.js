fetch('/updateProfile', {
    method: 'POST',
    body: JSON.stringify({name: "New Name"}),
    headers: {'Content-Type': 'application/json'}
});
