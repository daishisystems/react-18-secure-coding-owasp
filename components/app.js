// src/App.js
import React, { Suspense } from 'react';
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Lazy Loading Demo in React
        </p>
        <button onClick={() => {
          // Trigger the lazy loading when this button is clicked
          document.getElementById("lazy").style.display = "block";
        }}>
          Load Lazy Component
        </button>

        <div id="lazy" style={{display: "none"}}>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyComponent />
          </Suspense>
        </div>
      </header>
    </div>
  );
}

export default App;
