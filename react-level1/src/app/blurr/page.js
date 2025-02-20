"use client"
import React, { useState } from 'react';

function App() {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <div className="h-screen m-0 overflow-hidden">
      <div className="container w-full h-full flex flex-col">
        <div className="content flex-grow p-6 bg-gray-100">
          <h1>Main Content</h1>
          <p>Some text and other elements here...</p>
          <button
            onClick={() => setShowOverlay(true)}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
          >
            Show Overlay
          </button>
        </div>
      </div>

      {showOverlay && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur-md z-1000 flex justify-center items-center">
          <div className="bg-white p-6 rounded">
            <h2>Overlay Content</h2>
            <p>This appears on top of the blurred background.</p>
            <button
              onClick={() => setShowOverlay(false)}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;