
import React, {useState, useEffect} from 'react'
import './App.css';
import ItemsList from './components/ItemsList'
import Item from './components/Item'

function App() {
  const [items, setItems] = useState([])
  const [showItem, setShowItem] = useState(false)
  
  async function fetchItems() {
    reset()
    try {
      const response = await fetch(`api/route/`)
      const data = await response.json()
      console.log(data)
      // setItems(data)
    } catch (err) {
      console.log("failed to fetch items", err)
    }
  }

  async function fetchSingleItem() {
    console.log("fetch item")
    setShowItem(true)
  }

  // useefeect to getAll items on page load
  useEffect(() => {
    // fetchItems()
  }, [])

  function reset() {
    setShowItem(false)
  }

  return (
    <div className="App">
      {/* showItem will toggle on/off multiple item view vs single*/}
      {!showItem && <ItemsList fetchSingleItem={fetchSingleItem}/>}
      {/* pass props into item from fetchSingleItem func */}
      {showItem && <Item/>}
      {showItem && <button onClick={reset}>Go back</button>}
    </div>
  );
}

export default App;
