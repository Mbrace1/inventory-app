
import React, { useState, useEffect } from 'react'
import './App.css';
import ItemsList from './components/ItemsList'
import Item from './components/Item'
import Form from './components/Form';
import ItemDetailed from './components/ItemDetailed'
import Button from '@mui/material/Button';

function App() {
  const [items, setItems] = useState([])
  const [showItem, setShowItem] = useState(false)
  const [form, setForm] = useState(false)
  const [detailedItem, setDetailedItem] = useState({})


  async function fetchItems() {
    reset()
    try {
      const response = await fetch(`http://localhost:3001/items`, {
        header: 'Access-Control-Allow-Origin: *'
      })
      const data = await response.json()
      console.log(data)
      setItems(data)
    } catch (err) {
      console.log("failed to fetch items", err)
    }
  }

  async function fetchSingleItem(e) {
    try {
      const id = e.currentTarget.dataset.id
      const response = await fetch(`http://localhost:3001/items/${id}`, {
        header: 'Access-Control-Allow-Origin: *'
      })
      const data = await response.json()
      console.log(data)
      setDetailedItem(data)
    } catch (err) {
      console.log("failed to fetch items", err)
    }
    console.log("fetch item")
    setShowItem(true)
  }

  // useefeect to getAll items on page load
  useEffect(() => {
    fetchItems()
  }, [])

  function reset() {
    setShowItem(false)
  }

  return (
    <div className="App">

      <button onClick={() => {
        setForm(!form)
      }}>Add An Item</button>
      {form && <Form />}
      {/* showItem will toggle on/off multiple item view vs single*/}
      {!showItem && <ItemsList data={items} fetchSingleItem={fetchSingleItem} />}
      {/* pass props into item from fetchSingleItem func */}
      {showItem && <ItemDetailed item={detailedItem} />}
      {showItem && <Button onClick={reset} color="primary" variant="contained" size="sizeLarge">Go back</Button>}
    </div>
  );
}

export default App;
