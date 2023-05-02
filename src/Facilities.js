// import { faBar } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import resort1 from './resort (1).jpg';
import resort2 from './resort (2).jpg';
import resort3 from './resort (3).jpg';
import resort4 from './resort (4).jpg';
import { useState } from 'react';



const Facilities = () => {
    const [price, setPrice] = useState(400.00)
    return ( 
        <div className="for-facility-center">
        <div className="facility-con">
            <div className="facility-wifi">
                <div className="facility-wifi-text">
                    <h2>Facilities</h2>
                    <h4>see more</h4>
                </div>
                <div className="wifi-pros">
                <div className="wifi-pro1">
                <i class="fa-solid fa-person-swimming"></i>
                </div>
                <div className="wifi-pro2">
                <i class="fa-solid fa-wifi"></i>
                </div>
                <div className="wifi-pro3">
                <i class="fa-solid fa-temperature-arrow-up"></i>
                </div>
                <div className="wifi-pro4">
                <i class="fa-sharp fa-solid fa-spoon"></i>
                </div>
                </div>
            </div>


            <div className="hotels">
                <h2>Hotels For You</h2>
                <h4>5 days & night</h4>
                <div className="check">
                 <h4><span className="checkmark"><i class="fa-sharp fa-solid fa-check"></i></span>USD {price}.00</h4>
                </div>
            </div>
            <div className="results">
                <div className="forsearch">
                <input type="text" placeholder="150 Results" />
                <i id='searchicon' class="fa-solid fa-magnifying-glass"></i>
                </div>
                <div className="result-img">
                    <div className="result-img1" onClick={()=> setPrice(+500)}><img src={resort1} alt="A good resort" width={50} /></div>
                    <div className="result-img1" onClick={()=> setPrice(+50)}><img src={resort2} alt="A good resort" width={50} /></div>
                    <div className="result-img1" onClick={()=> setPrice(+700)}><img src={resort3} alt="A good resort" width={50} /></div>
                    <div className="result-img1" onClick={()=> setPrice(+40)}><img src={resort4} alt="A good resort" width={50} /></div>
                   
                    
                   
                </div>
            </div>
        </div>
        </div>
     );
   
}
 
export default Facilities;