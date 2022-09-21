// components/card.jsx
import Button from 'react-bootstrap/Button';
const Card = (props) => {
    return (
        <div className="card" style={{width: "18rem"}}>
          <img className="card-img-top" src={props.ruta} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{props.titulo}</h5>
            <p className="card-text">{props.descripcion}</p>
            <Button variant="secondary">Ver más</Button>
          </div>
        </div>
    );
    };
export default Card;