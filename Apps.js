import React, { useState } from 'react';

// Navigation Component
function Navigation({ setCurrentPage }) {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">SportConnect</h1>
        <div className="space-x-4">
          <button 
            onClick={() => setCurrentPage('home')} 
            className="hover:text-blue-200"
          >
            Home
          </button>
          <button 
            onClick={() => setCurrentPage('events')} 
            className="hover:text-blue-200"
          >
            Events
          </button>
          <button 
            onClick={() => setCurrentPage('register')} 
            className="hover:text-blue-200"
          >
            Register
          </button>
        </div>
      </div>
    </nav>
  );
}

// Home Component
function Home() {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">Welcome to SportConnect</h2>
      <p className="text-lg">Find training partners, join events, and stay active!</p>
    </div>
  );
}

// User Registration Component
function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    fitnessInterests: []
  });

  const fitnessInterests = [
    'Running', 'Cycling', 'Swimming', 'Functional Fitness', 
    'Team Sports', 'Hyrox', 'Strength Training'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleInterestChange = (interest) => {
    setFormData(prev => ({
      ...prev,
      fitnessInterests: prev.fitnessInterests.includes(interest)
        ? prev.fitnessInterests.filter(i => i !== interest)
        : [...prev.fitnessInterests, interest]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration Data:', formData);
    // TODO: Add actual registration logic
    alert('Registration data logged to console!');
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Create Your Account</h2>
      <form onSubmit={handleSubmit} className="max-w-md">
        <div className="mb-4">
          <label className="block mb-2">Username</label>
          <input 
            type="text" 
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Password</label>
          <input 
            type="password" 
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Fitness Interests</label>
          <div className="flex flex-wrap gap-2">
            {fitnessInterests.map(interest => (
              <button
                key={interest}
                type="button"
                onClick={() => handleInterestChange(interest)}
                className={`px-3 py-1 rounded ${
                  formData.fitnessInterests.includes(interest) 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200'
                }`}
              >
                {interest}
              </button>
            ))}
          </div>
        </div>
        <button 
          type="submit" 
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Register
        </button>
      </form>
    </div>
  );
}

// Events Component
function Events() {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'Saturday Run Club',
      description: 'Weekly 5k run for all levels',
      date: '2024-03-16',
      location: 'Central Park'
    },
    {
      id: 2,
      title: 'Functional Fitness Workshop',
      description: 'Strength and conditioning session',
      date: '2024-03-20',
      location: 'Urban Gym'
    }
  ]);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {events.map(event => (
          <div key={event.id} className="border p-4 rounded shadow">
            <h3 className="text-xl font-semibold">{event.title}</h3>
            <p>{event.description}</p>
            <div className="mt-2 text-sm text-gray-600">
              <p>Date: {event.date}</p>
              <p>Location: {event.location}</p>
            </div>
            <button className="mt-2 bg-blue-600 text-white px-4 py-1 rounded">
              Join Event
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// Main App Component
function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Home />;
      case 'events':
        return <Events />;
      case 'register':
        return <Register />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
}

export default App;