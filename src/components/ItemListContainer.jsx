import { useState, useEffect } from "react";
import {pedirDatos} from "./toolsFunction/toolsFunction"
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";



const ItemListContainer = () => {
  const [titulo, setTitulo] = useState("Productos");
 const [productos, setProductos] = useState([]);
 const categoria = useParams().categoria;

  useEffect(() => {
   pedirDatos()
     .then((res) => {
       if (categoria) {
        setProductos(res.filter((prod) => prod.genero === categoria));
        setTitulo(categoria);
      }else {
        setProductos(res);
        setTitulo("Productos")
       }
       
     });
 }, [categoria]);
 
 return (
   <div>
      <ItemList productos = {productos} titulo={titulo}/>
   </div> 
 )
};

export default ItemListContainer