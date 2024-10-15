import { useEffect, useState } from "react";
//import "./Styles/Navbar.css"
import { pedirItemPorId } from "./toolsFunction/toolsFunction";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = ({itemId}) => {
  const [item, setItem] = useState(null);
  const id = useParams().id;

  useEffect(() => {
      pedirItemPorId(Number(id))
          .then((res) => {
              setItem(res);
          })
  }, [id])


  return (
      <div>
        {item && <ItemDetail item={item} />} 
      </div>
  );
};

export default ItemDetailContainer