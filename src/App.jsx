// App.jsx
import React from 'react';
import Navbar from "./components/Navbar";
import Main from './components/Main';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-spotify">
      <Navbar />
      <div className="flex-1 flex overflow-hidden">
        <Main />
      </div>
      <Footer />
    </div>
  );
};

export default App;
