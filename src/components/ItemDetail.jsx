import { useState } from "react";

const ItemDetail = ({item}) => {
const [contador, setContador] = useState(0);
  return (  
     <div className="container">
         <div className="producto-detalle">
            <img src={item.imagen} alt={item.titulo} />
               <div>
                 <h3 className="titulo"> {item.titulo} </h3>
                 <p className="categoria"> {item.genero} </p>
                 <p className="precio"> {item.precio} </p>
                          <div  className="boton-item-detail">
                            <button onClick={() => setContador(contador < 5 ? contador + 1 : contador)}>
                            <p>Agregar</p> 
                            </button>
                              <h4>{contador}</h4>
                            <button onClick={() => setContador (contador => contador >= 1 ? contador - 1 : contador ) }>
                                <p>Quitar</p> 
                            </button>
                            </div>
                </div>
          </div>
     </div>
  )
}

export default ItemDetail