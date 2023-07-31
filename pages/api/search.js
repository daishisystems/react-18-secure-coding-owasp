export default function handler(req, res) {
    if (req.method === 'POST') {
        // Process a POST request
        const {
            query
        } = req.body;
        // Return the query directly without sanitizing it
        res.status(200).send(query);
    } else {
        // Handle any other HTTP method
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}