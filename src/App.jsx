import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './compo/Navbar'

function App() {
  return (
    <div>
      <Navbar />

      <div className="bg-green-500 min-h-screen flex items-center justify-center">
        <h1 className="text-white text-3xl font-bold">
          Yousoopher Tailwind is Working
        </h1>
      </div>
    </div>
  );
}

export default App;
