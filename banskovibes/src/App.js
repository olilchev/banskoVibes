import logo from './logo.svg';
import { useRef } from 'react';
import './App.css';
import { NavigationBar } from './NavigationBar';
import { Footer } from './Footer';
import { Apartment } from './Apartment';
import ImageGallery from 'react-image-gallery';
import { images } from './gallery-image';
import { Home } from './Home';


function App() {
  return (
    // <Routes>
    //     <Route path="apartments" element={<Apartment />}>
         
    //     </Route>
    //   </Routes>
  // //   <div>
  <div>
  <div className="background-image"></div>

     <div className="background-image"></div>  <NavigationBar />
      <Apartment />
      {/* <Home /> */}
      
      
    
    <Footer />
    
    </div>

  );
}

export default App;
