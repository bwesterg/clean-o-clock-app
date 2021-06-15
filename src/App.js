import { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import Header from './containers/Header/Header';

const baseURL = 'http://localhost:3000'

function App() {

  const [areas, setAreas] = useState([])

  const getAreas = () => {
    fetch(`${baseURL}/areas`)
      .then(response => response.json())
      .then(setAreas)
  }

  useEffect(getAreas, [])

  return (
    <div className="App">
      <Header areas={ areas } />
    </div>
  );
}

export default App;
