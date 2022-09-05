import React from 'react'
import {data} from './data'

const Cards = () => {
    return (<> 
    <div className = "images-grid" > {
        data.map((d) => {
        
          
            return <> < div className = 'card' > <img className="card-image" src={d.image} alt='a'/>
            <div className="information">${d.rate}/month<br/>
                <h1>{d.type}</h1><br/>
                <p>{d.address}</p>

                <div className="icons">
                    <div className="room">

                        <img className="small-icon"src="/bed.png" alt=""/>{d.beds} Beds

                    </div>
                    <div className="room">
                        <img className="small-icon"src="/bathtub.png" alt=""/>{d.bathroom} Bathroom

                    </div>
                    <div className="room">
                        <img className="small-icon"src="/area.png" alt=""/>{d.area} sqft

                    </div>

                </div>

            </div>
        </div>

    </>

        })
    } </div>
    </>)
}

export default Cards
