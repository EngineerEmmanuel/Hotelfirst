import travel from './2tra-re.png';
import bg from './BG-Logo.png';
import mala from './mala-logo.png';
import thai from './thai.png';
import peace from './peace.png';
import quatar from './quatar.jpg';
import ethiopia from './ethiopian.png';

const Airlines = () => {
    return ( 
        <div className="air-con">
            <div className="air-subcon">
            <div className="air-uls">
                <ul className='first-ul'>
                {/* <h2>Search for other top airlines</h2> */}
                    <li> <div className="air-logo"> <img src={bg} alt="logo" width={20} /> </div> Biman BD Airlines</li>
                    <li><div className="air-logo"><img src={mala} alt="logo" width={30} /></div> Malaysia Airlines</li>
                    <li> <div className="air-logo"><img src={thai} alt="logo" width={20} /></div> Thai Lion Airlines</li>
                </ul>
                <ul className='sec-ul'>
                    <li><div className="air-logo"><img src={peace} alt="logo" width={20} /></div> Peace Airlines</li>
                    <li><div className="air-logo"><img src={quatar} alt="logo" width={30} /></div> Quatar Airways</li>
                    <li><div className="air-logo"><img src={ethiopia} alt="logo" width={30} /></div> Ethiopia Airline</li>
                    
                </ul>
            </div>
            <img src={travel} alt="People travelling" width={500} id="tra"  />
            </div>
        </div>
     );
}
 
export default Airlines;