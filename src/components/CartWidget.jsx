import carrito from "../assets/carrito-rjo.png"


const CartWidget = ({contador, children}) => {

  return (
    <>
        {/* carrito */}
        <div className="logo-container">
          <img src={carrito} alt="carrito" />

          <div className='texto-encima'><button className="boton-carrito">{contador}</button></div>
         
        </div>
    </>
  );
};

export default CartWidget;