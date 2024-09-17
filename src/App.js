import React from 'react';
import SectionOne from './components/SectionOne';
import '@coreui/coreui/dist/css/coreui.min.css'
import './App.css';
import NavComponent from './components/NavegationComponent';
import PrimeraSection from './components/PrimeraSection';

function App() {
  return (
    <div className="App">
   
        <NavComponent />
        <PrimeraSection/>
      
    </div>
  );
}

export default App;
