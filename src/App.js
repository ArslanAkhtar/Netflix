import React, { useState } from 'react'
import axios from 'axios'

import Logo from './components/logo.jpg'
import Search from './components/Search'
import Results from './components/Results'
import Popup from './components/Popup'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {}
  });
  const apiurl = "http://www.omdbapi.com/?i=tt3896198&apikey=7221df0e";

  const search = (e) => {
    if (e.key === "Enter" ) {
      axios(apiurl + "&s=" + state.s).then(({ data }) => {
        let results = data.Search;
        setState(prevState => {
          return { ...prevState, results: results }
        })
      });
    }
  }
  
  const handleInput = (e) => {
    let s = e.target.value;

    setState(prevState => {
      return { ...prevState, s: s }
    });
  }

  const openPopup = id => {
    axios(apiurl + "&i=" + id).then(({ data }) => {
      let result = data;

      console.log(result);

      setState(prevState => {
        return { ...prevState, selected: result }
      });
    });
  }

  const closePopup = () => {
    setState(prevState => {
      return { ...prevState, selected: {} }
    });
  }

  return (
    <div className="App">
      <header>
        <img src={Logo} alt="A Logo"/>
        <h1>   Search for IMDb Ratings</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search} />

        <Results results={state.results} openPopup={openPopup} />

        {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup} /> : false}

        <Navbar />
        
        <Footer />
        
      </main>
    </div>
  );
}

export default App 