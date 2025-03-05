import React, { useState } from 'react';

function App() {
  const [page, setPage] = useState('home');

  const renderContent = () => {
    switch(page) {
      case 'home':
        return (
          <div className="p-6">
            <h1 className="text-3xl font-bold">SportConnect</h1>
            <p className="mt-4">Find training partners and join events!</p>
            <button 
              onClick={() => setPage('events')}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            >
              View Events
            </button>
          </div>
        );
      case 'events':
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold">Upcoming Events</h2>
            <div className="mt-4 space-y-4">
              <div className="border p-4 rounded">
                <h3 className="font-semibold">Saturday Run Club</h3>
                <p>Weekly 5k run for all levels</p>
                <button className="mt-2 bg-green-500 text-white px-3 py-1 rounded">
                  Join Event
                </button>
              </div>
            </div>
            <button 
              onClick={() => setPage('home')}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            >
              Back to Home
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {renderContent()}
    </div>
  );
}
{
  "homepage": "https://IsaacJW1.github.io/social-sports-app",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}

export default App;
