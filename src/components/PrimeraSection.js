import React from 'react';
import '@coreui/coreui/dist/css/coreui.min.css';
import { CNavbar, CContainer, CNavbarBrand, CCollapse , CNavbarNav , CNavItem, CNavbarToggler, CNavLink} from '@coreui/react';
import '../components/PrimeraSection.css';
import Perro from '../assets/home/perro-def.png';




function PrimeraSection(){

return(

<div className="d-flex justify-content-center align-items-center content">
          <div className="row">
            {/* Texto */}
            <div className='col-md-4 contentText text-center text-md-start'>
              <h2>
                <strong>Encuentra tu mejor compañía</strong>
              </h2>
              <p>
                Bienvenid@ a Adopta.me, la plataforma líder en adopción de perros y gatos. Descubra una amplia gama de adorables animales que esperan su hogar definitivo. Únase a nosotros para hacer una diferencia en sus vidas.
              </p>
              <div className='contentInput d-flex justify-content-center justify-content-md-start'>
                <input type="text" className="form-control me-2" placeholder="Introduce tu correo"/>
                <button className="btn btn-primary">Únete ahora</button>
              </div>
            </div>

            

            {/* Imagen */}
            <div className='col-12 col-md-8 d-flex justify-content-center align-items-center imagen '>

              
                 <img src={Perro} className='Perro img-fluid '/>
             
           
            </div>
          </div>
        </div>

    
);



}

export default PrimeraSection;


