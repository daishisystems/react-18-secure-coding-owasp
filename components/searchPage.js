import { useState } from "react";

function SearchPage() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");

  const search = async () => {
    const response = await fetch('/api/search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query })
    });
    const data = await response.text();
    setResult(data);
  };

  return (
    <div>
      <input value={query} onChange={e => setQuery(e.target.value)} />
      <button onClick={search}>Search</button>
      <div dangerouslySetInnerHTML={{ __html: 'You searched for: ' + result + '<br  >Here are the results:' }} />
    </div>
  );
}

export default SearchPage;
