import { Route, Routes } from 'react-router'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Items from './pages/Items' 
import ItemEdit from './components/ItemEdit'
import { useState } from 'react'

function App() {
  
  const [item, setItem] = useState({});
  const [tat, setTat]=useState(false);

  const changeRoute= (event, item) => {
    event.preventDefault();
    setTat(true);
    setItem(item);
  }

  const changeRoute2= (e, item) => {
    e.preventDefault()
    setTat(false);
    setItem(item);
  }
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        {tat==false?<Route path="/items" element={<Items onUpdateItem={changeRoute}/>}></Route>:<Route path="/items"  element={<ItemEdit data={item} onUpdateItem={changeRoute2}/>}></Route>}
      </Routes>
    </>
  )
}

export default App