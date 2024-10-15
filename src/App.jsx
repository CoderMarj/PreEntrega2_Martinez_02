import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NotFount from './components/NotFount';

//import ItemListContainer from './components/ItemListContainer';
//import ItemDetailContainer from './components/ItemDetailContainer';

const App = () => {
  return (
  
      <BrowserRouter>

      < Navbar  />

         < Routes >
          
            < Route path = "/" element = {<ItemListContainer/>}/>
            < Route path = "/item/:id" element = {<ItemDetailContainer/>}/>
            < Route path = "/productos" element = {<ItemListContainer/>}/>
            < Route path = "/productos/:categoria" element = {<ItemListContainer/>}/>
            < Route path = "*" element = {<NotFount/>}/>
                         
         </Routes>
        
       </BrowserRouter>
         
  )
}

export default App;
