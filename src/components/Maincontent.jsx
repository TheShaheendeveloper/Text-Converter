import React, { useState } from 'react';
import './Maincontent.css';  // Ensure the correct path

function Maincontent() {
  const [text, setText] = useState('');

  const handleUppercase = () => setText(text.toUpperCase());
  const handleLowercase = () => setText(text.toLowerCase());
  const handleClearText = () => setText('');
  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
    alert('Text copied to clipboard!');
  };
  const handleRemoveExtraSpaces = () => setText(text.replace(/\s+/g, ' ').trim());

  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
  const charCount = text.length;

  return (
    <div className="main-content">
      <h1>Enter the text to analyze below</h1>
      <textarea rows="8" value={text} onChange={(e) => setText(e.target.value)}
        className="form-control"
      ></textarea>
      <div className="button-group">
        <button onClick={handleUppercase} className="btn btn-primary">Convert to Uppercase</button>
        <button onClick={handleLowercase} className="btn btn-primary">Convert to Lowercase</button>
        <button onClick={handleClearText} className="btn btn-primary">Clear Text</button>
        <button onClick={handleCopyText} className="btn btn-primary">Copy Text</button>
        <button onClick={handleRemoveExtraSpaces} className="btn btn-primary">Remove Extra Spaces</button>
      </div>
      <h2>Your text summary</h2>
      <p>{wordCount} words and {charCount} characters</p>
      <p>{(wordCount * 0.008).toFixed(2)} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length > 0 ? text : 'Enter something in the textbox above to preview it here'}</p>
    </div>
  );
}

export default Maincontent;
  