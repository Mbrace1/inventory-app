import React, { useState } from 'react'


function UpdateForm(props) {

    const [title, setTitle] = useState('')
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [category, setCategory] = useState('')


    async function UpdateItem(e) {
        e.preventDefault()

        try {
            const id = e.currentTarget.dataset.id
            const response = await fetch(`http://localhost:3001/items/${id}`, {
                headers: { 'Content-Type': 'application/json' },
                method: 'PUT',
                body: JSON.stringify({
                    title: title,
                    price: price,
                    description: description,
                    image: image,
                    category: category
                })
            })

        } catch (err) {
            console.log("failed to fetch items", err)
        }
        setCategory('')
        setDescription('')
        setPrice(null)
        setImage('')
        setTitle('')
        // also need to clear the inputs on form as well as state
    }


    return (
        <form onSubmit={UpdateItem} id='form' data-id={props.id}>
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
                <input type="text" name="Image" placeholder="Image URL" onChange={(e) => setImage(e.target.value)} />
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


export default UpdateForm
