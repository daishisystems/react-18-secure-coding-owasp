import {
  useState
} from "react";

function SearchPage() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");

  const search = async () => {
    const response = await fetch('/api/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query
      })
    });
    const data = await response.text();
    setResult(data);
  };

  const sendCookie = async () => {
    try {
      const response = await fetch('http://localhost:5000/read-cookie', {
        method: 'GET',
        credentials: 'include' // This is required to include cookies with the request
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }

  return (
    <div>
      <input 
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <button onClick={search}>
        Search
      </button>
      <div dangerouslySetInnerHTML={{ __html: result }} />
      <button onClick={sendCookie}>
        Send Cookie
      </button>
    </div>
  );
}

export default SearchPage;