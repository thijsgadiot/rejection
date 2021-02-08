import { useState } from "react";

export default function SimpleInput({ placeholder, handleChange, handleKeyPress, value }) {
  return (
    <div className="input-container">
      <input
        className="abc"
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={({ target }) => handleChange(target.value)}
        onKeyPress={({ key }) => handleKeyPress(key)}
      />
      <style jsx>{`
        .input-container {
          padding: 2rem;
        }
        input[type="text"] {
          border: 0;
          border-bottom: 1px solid gray;
          width: 50%;
          outline: none;
          font-size: 3em;
          font-weight: bold;
          line-height: 1.5;
          margin-bottom: 0.25em;
          color: salmon;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans,
            Droid Sans, Helvetica Neue, sans-serif;
        }
        ::placeholder {
          color: lightgrey;
        }
      `}</style>
    </div>
  );
}
