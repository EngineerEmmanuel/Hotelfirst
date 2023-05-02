import city1 from './cities (1).jpg'
import city2 from './cities (2).jpg'
// import city3 from './cities (3).jpg'
import city4 from './seccity (1).jpg'

const Entire = () => {
    return ( 
        <div className="entire-con">
            <h2>Entire city choice</h2>
            <div className="cities">
                <div className="first-city">
                    <div className="first-city-img">
                    <img src={city1} alt="" style={{width:"100%"}} />
                    </div>
                    
                    <p className='money'>$200.00</p>
                    <div className="first-city-text">
                        <h3>Booking ID:983453</h3>
                        {/* <div className="logo"> */}
                        <button>Book now</button>
                        {/* </div> */}
                    </div>
                </div>
                <div className="first-city">
                    <div className="first-city-img">
                    <img src={city2} alt="" style={{width:"100%"}} />
                    </div>
                    
                    <p className='money'>$500.00</p>
                    <div className="first-city-text">
                        <h3>Booking ID:983453</h3>
                        {/* <div className="logo"> */}
                        <button>Book now</button>
                        {/* </div> */}
                    </div>
                </div>
                <div className="first-city">
                    <div className="first-city-img">
                    <img src={city4} alt="" style={{width:"100%"}} />
                    </div>
                    
                    <p className='money'>$800.00</p>
                    <div className="first-city-text">
                        <h3>Booking ID:983453</h3>
                        {/* <div className="logo"> */}
                        <button>Book now</button>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Entire;