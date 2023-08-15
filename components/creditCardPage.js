import React, { useState, useEffect } from 'react';

function CreditCardPage({ onUserStoppedTyping }) {
  const [text, setText] = useState('');

  useEffect(() => {
    if (!text) return;

    const timer = setTimeout(() => {
      onUserStoppedTyping(text);
    }, 3000);  // 3 seconds

    return () => clearTimeout(timer);  // clear timer if text changes
  }, [text, onUserStoppedTyping]);

  return (
    <input
      type="text"
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="Type here..."
    />
  );
}

export default CreditCardPage;
