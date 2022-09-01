
import React, { useState, useEffect } from 'react'
import './App.css';
import ItemsList from './components/ItemsList'
import Item from './components/Item'
import ItemDetailed from './components/ItemDetailed'
import Button from '@mui/material/Button';
import { Hidden } from '@mui/material';

function App() {
  const [items, setItems] = useState([])
  const [showItem, setShowItem] = useState(false)
  const [detailedItem, setDetailedItem] = useState({})
  const [deleteMessage, setDeleteMessage] = useState(false)

  async function fetchItems() {
    setShowItem(false)
    setDeleteMessage(false)

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

  async function removeItem(e) {
    try {
      const id = e.currentTarget.dataset.id
      console.log(id)
      const response = await fetch(`http://localhost:3001/items/${id}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      })
      console.log(response)
      setDeleteMessage(true)
    } catch (err) {
      console.log("failed to fetch items", err)
    }
  }

  // useefeect to getAll items on page load
  useEffect(() => {
    fetchItems()
  }, [])

  return (
    <div className="App">
      {/* showItem will toggle on/off multiple item view vs single*/}
      {!showItem && <ItemsList data={items} fetchSingleItem={fetchSingleItem} />}
      {/* pass props into item from fetchSingleItem func */}
      {showItem && <ItemDetailed deleteMessage={deleteMessage} removeItem={removeItem} item={detailedItem} />}
      {showItem && <Button sx={{mt: "1em"}} onClick={fetchItems} color="primary" variant="contained" size="sizeLarge">Go back</Button>}
    </div>
  );
}

export default App;
