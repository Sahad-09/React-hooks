import React, { useState } from 'react';
// import './CodeEditor.css'; // Import the CSS file for styling

const UseState = () => {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  const runCode = () => {
    try {
      // Only execute if the code contains valid React syntax
      if (code.includes('React') || code.includes('react')) {
        const result = eval(code); // Evaluate the code using eval (Note: Using eval can be risky in a production environment)
        setOutput(result.toString());
      } else {
        setOutput('Error: Only React code is allowed');
      }
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
  };

  return (
    <div className="code-editor-container">
      <h2 className="code-editor-title">Code Editor</h2>
      <div className="code-input-container">
        <textarea
          className="code-input"
          value={code}
          onChange={handleCodeChange}
          placeholder="Paste your React code here..."
          rows={10}
          cols={50}
        />
        <button className="run-button" onClick={runCode}>Run</button>
      </div>
      {output && (
        <div className="output-container">
          <h3>Output:</h3>
          <pre className="output">{output}</pre>
        </div>
      )}
    </div>
  );
};

export default UseState;

