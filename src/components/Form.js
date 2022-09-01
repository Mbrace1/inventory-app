import React, { useState } from 'react'


function Form(props) {

    const [title, setTitle] = useState('')
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('')
    const [url, setUrl] = useState('')
    const [category, setCategory] = useState('')


    async function addItem(event) {
        event.preventDefault()
        const urlToGo = url ? url : "https://picsum.photos/seed/picsum/200/300"

        const body = {
            title: title,
            price: price,
            description: description,
            image: urlToGo,
            category: category
        }

        try {
            const response = await fetch(`http://localhost:3001/items`, {
                headers: { 'Content-Type': 'application/json' },
                method: 'POST',
                body: JSON.stringify(body)
            })

            const data = await response.json()
        } catch (err) {
            console.log("failed to fetch items", err)
        }
        setCategory('')
        setDescription('')
        setPrice(null)
        setUrl('')
        setTitle('')
        // also need to clear the inputs on form as well as state
    }


    return (
        <form onSubmit={addItem} id='form'>
            <label>
                Title:
                <input type="text" name="Title" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
            </label>
            <label>
                Price:
                <input type="number" name="Price" placeholder="Price" onChange={(e) => setPrice(e.target.value)} />
            </label>
            <label>
                Description:
                <input type="text" name="Description" placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
            </label>
            <label>
                Image:
                <input type="text" name="Image" placeholder="Image URL" onChange={(e) => setUrl(e.target.value)} />
            </label>
            <label>
                Category:
                <select >
                    <option value="Mens">Mens</option>
                    <option value="Womens">Womens</option>
                    <option value="Jewellery">Jewellery</option>
                    <option value="Electronics">Electronics</option>
                </select>
            </label>
            <button type="submit">submit</button>
        </form>
    )
}


export default Form
