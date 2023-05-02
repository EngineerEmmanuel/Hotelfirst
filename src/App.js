

import Hero from './Hero';
import Facilities from './Facilities';
import Entire from './Entire';
import Resort from './Resort';
import Relaxing from './Relaxing';
import Airlines from './Airlines';
import Get from './Get';
import Footer from './Footer';
import Header2 from './Header2';
import header2 from './header2.css';
import {  Routes,  Route} from 'react-router-dom';


function App() {
  <Routes>
  <Route path="./Hero" element={<Hero />} />
  <Route path="./Facilities" element={<Facilities/>} />
  <Route path="./Get" element={<Get/>} />
</Routes>
  return (
   
    <div className="App">

      {/* <Routes>
        <Route path="/" element={<Hero/>}/>
        <Route path="/Facilities" element={<Facilities/>}/>
        <Route path="/Get" element={<Get/>}/>
      </Routes> */}
    
    <Header2/>
     {/* <Header/> */}
    <Hero />
    <Facilities/>
     <Entire/>
     <Resort/>
     <Relaxing/>
     <Airlines/>
     <Get/>
     <Footer/>
    </div>
    
  );
}

export default App;
