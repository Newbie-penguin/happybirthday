import React from 'react'
import scarf from '../scarf_image.jpeg'
import { Link } from 'react-router-dom'

const Scarf = () => {
  return (
    <>
    <div>
        <img src={scarf} width={200} alt = 'scarf' height={200} style={{ float: 'left' }}/>
        <h2 style={{color:"#fcfecf"}}>About this product:</h2>
        <h3 style={{color:"#fcfecf", fontFamily:'monospace'}}>The artisan behind this scarf harmonized an exquisite blend of 
            impeccable craftsmanship and artistic ingenuity, weaving a tapestry of 
            exclusivity that transcends the realms of mere fashion. Each individual 
            thread is delicately selected from the rarest source - OurOwnStores in Commercial Street, meticulously hand-spun 
            with a lot of love and care, and adorned with bespoke patterns that reflect the birthday boy's personal interests. Embracing the essence of understated extravagance, 
            this scarf exudes an air of palpable refinement, effortlessly 
            elevating any ensemble to the pinnacle of sartorial splendor. Its sumptuous 
            textures, as soft as a whisper, is achieved by immersing the scarf in water with some conditioner in it. 
            The result is a luxurious accessory that is as versatile as it is timeless. 
             </h3>

            <h3 style={{color:"#fcfecf", fontFamily:'monospace', paddingBottom:'50px'}}>Discounted price- Priceless</h3>
            <h3 style={{color:"#fcfecf", fontFamily:'monospace', paddingBottom:'50px'}}>Directions of use: Wear it often and immerse it for 20 mins in conditioner water once a couple of months to make it softer</h3>

            
            <h1 style={{color:"#fcfecf", fontFamily:'monospace'}}>Happy Birthday Ninad!</h1>
            <h1 style={{color:"#fcfecf", fontFamily:'monospace'}}>Have a great day and fantastic year ahead!</h1>

            <div>
        <Link to="/">
          <button
            className="btn"
            style={{ backgroundColor: "#fcfecf", color: "black", fontSize: '20px', padding: '10px 20px'}}
          >
          Back to Home
          </button>
        </Link>
      </div>

            
    </div>
    </>
  )
}

export default Scarf