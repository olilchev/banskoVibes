import logo from './logo.svg';
import { useRef } from 'react';
import './App.css';
import { NavigationBar } from './NavigationBar';
import { Footer } from './Footer';
import { Apartment } from './Apartment';
import ImageGallery from 'react-image-gallery';
import { images } from './gallery-image';


function App() {
  return (
    // <Routes>
    //     <Route path="apartments" element={<Apartment />}>
         
    //     </Route>
    //   </Routes>
  // //   <div>
  <div>
  <div className="background-image"></div>

      <NavigationBar />
      <Apartment />
      
    
    <Footer />
    
    </div>

  );
}

export default App;
