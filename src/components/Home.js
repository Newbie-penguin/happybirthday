import React from 'react'
import roshni from '../roshi_logo.jpg'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="App">
        <img src={roshni} alt='Fashion logo' width={200} height={200}/>
        <h1 style={{color:"#fcfecf"}}>Roshi</h1>
        <h2 style={{color:"#fcfecf"}}>An exquisite embodiment of unrivaled opulence and refined elegance.</h2>
        <h3 style={{color:"#fcfecf"}}>Karl Lagerfield could not afford our scarves</h3>
        <div>
        <Link to="/scarf">
          <button
            className="btn"
            style={{ backgroundColor: "#fcfecf", color: "black", fontSize: '20px', padding: '10px 20px'}}
          >
          BROWSE COLLECTION
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Home