import React from 'react';
import '@coreui/coreui/dist/css/coreui.min.css';
import { CNavbar, CContainer, CNavbarBrand, CCollapse , CNavbarNav , CNavItem, CNavbarToggler, CNavLink} from '@coreui/react';
import '../components/PrimeraSection.css';
import Perro from '../assets/home/perro-def.png';





function PrimeraSection(){

return(

<div class="row-container">
  <div class="left-section contentText">
    <h2>Encuentra tu mejor compañía</h2>
    <p>Bienvenid@ a Adopta.me, la plataforma líder en adopción de perros y gatos. Descubra una amplia gama de adorables animales que esperan su hogar definitivo. Únase a nosotros para hacer una diferencia en sus vidas.</p>
    <button class="btn btn-primary">ADOPTA</button>
  </div>
  <div class="right-section">
    <img src={Perro} alt="Descripción de la imagen"/>
  </div>
</div>

);



}

export default PrimeraSection;


