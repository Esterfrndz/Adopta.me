import React from 'react';
import '@coreui/coreui/dist/css/coreui.min.css';
import '../components/SectionOne.css';

function SectionOne() {
  return (
    <>
    {/* Contenido */}
      <div className="d-flex justify-content-center align-items-center content" >
        <div className="row ">
          {/* Texto */}
          <div className='col-md-8 contentText '>
            <h2>
              <strong>Encuentra tu mejor compañía</strong>
            </h2>
            <p>
              Bienvenid@ a Adopta.me, la plataforma líder en adopción de perros y gatos. Descubra una amplia gama de adorables animales que esperan su hogar definitivo. Únase a nosotros para hacer una diferencia en sus vidas.
            </p>
            <div className='contentInput'>
            <input>
            </input>
            <button>
              Únete ahora
            </button>
            </div>
          </div>
          {/* Imagen */}
          <div className='col-md-4 d-flex justify-content-center imagen'>
            <dotlottie-player
              src="https://lottie.host/89f22e01-0a09-44ce-8990-23a3bb79a826/rxkE8tbsMm.json"
              background="transparent"
              speed="1"
              
              loop
              autoplay
            ></dotlottie-player>
          </div>

          {/* Input email */}

         


        </div>
      </div>
    </>
  );
}

export default SectionOne;
