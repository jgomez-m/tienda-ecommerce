import { Link } from "react-router-dom";
const Orders = ({id}) => {
  return <div>
        <h3 className="font-weight-bold">Orden de compra: {id}</h3>
        <span>Gracias por su compra, si desea seguir comprando presione</span>
        <Link to="/">Catalogo de Productos</Link>
    </div>
}
export default Orders;
