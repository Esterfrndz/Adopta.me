

import '../components/NavegationComponent.css';


function NavComponent() {

    return(
        <div className="row navegation">
        <div className="col-12 col-md-8 titulo text-center text-md-start">Adopta.me</div>
        <div className="col-12 col-md-4 presion items text-center text-md-end">
          <ul className="d-flex justify-content-center justify-content-md-end">
            <button className="btn  mx-2">Adopta</button>
            <button className="btn  mx-2">Tienda</button>
            <button className="btn  mx-2">Contacto</button>
          </ul>
        </div>
      </div>

    );
}

export default NavComponent;