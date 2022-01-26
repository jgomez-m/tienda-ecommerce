import { Link } from "react-router-dom";
const Orders = ({id}) => {
  return <div>
        <h3 className="font-weight-bold m-2">Orden de compra: {id}</h3>
        <p>Gracias por su compra, si desea seguir comprando presione</p>
        <Link to="/">Catalogo de Productos</Link>
    </div>
}
export default Orders;
