import React, { useState, useEffect } from 'react';
import api from './services/api';
import Header from './components/Header';
import Generos from './components/Generos';
import NovoGenero from './components/NovoGenero';
import EditarGenero from './components/EditarGenero';


import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

const Home = () => {
  return <h1>Home</h1>
}

function App() {

  const [data, setDate] = useState({})
  useEffect(() => {
    api.get('/api').then(res => {
      setDate(res.data);
    })
  }, [])

  return (
    <Router>
      <div>
        <Header />
        <Route path='/' exact component={Home} />
        <Route path='/generos/:id' exact component={EditarGenero} />
        <Route path='/generos' exact component={Generos} />
        <Route path='/novoGenero' exact component={NovoGenero} />
      </div>
    </Router>
  );
}

export default App;
