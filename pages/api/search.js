export default function handler(req, res) {
    if (req.method === 'POST') {
        res.status(200).send('<img src="x" onerror="alert(\'Stored XSS attack\')">');
    } else {
        // Handle any other HTTP method
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}