
import { useState, useEffect } from 'react';
import './App.css';
import NasaImages from './components/NasaImages';
import Loading from './components/Loading';
import Header from './components/Header';
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // Simulando o término do carregamento após 2 segundos
    }, 2000);
  }, []);

  return (
    <>
    <Header
      foto = './logoInter.png'
      />
    
    <div>
      {isLoading ? (
        <Loading 
        foto= './logoInter.png'
        />
        ) : (
          <NasaImages />
          )}
    </div>
          </>
  );
}

export default App;
