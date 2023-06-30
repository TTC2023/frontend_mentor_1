import Mobile from './components/Mobile/Mobile'
import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ImageCarousel from './components/ImageCarousel/ImageCarousel';
import Content from './components/Content/Content';

function App() {

  const [finalQuantity, setFinalQuantity] = useState(0)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768)
    }
    window.addEventListener('resize', handleResize)
    handleResize();

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="App">
      {isMobile ? (
        <Mobile />
      ) : (
        <>
          <NavBar finalQuantity={finalQuantity}/>
          <div className='components'>
            <ImageCarousel />
            <Content finalQuantity={finalQuantity} setFinalQuantity={setFinalQuantity}/>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
