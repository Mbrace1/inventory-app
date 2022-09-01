import React from 'react'


function Form() {

    const handleSubmit = (data) => {
        console.log(data)
    }


    return (
        <form onSubmit={handleSubmit}>
            <label>
                Title:
                <input type="text" name="Title" placeholder="Title" />
            </label>
            <label>
                Price:
                <input type="number" name="Price" placeholder="Price" />
            </label>
            <label>
                Description:
                <input type="text" name="Description" placeholder="Description" />
            </label>
            <label>
                Image:
                <input type="text" name="Image" placeholder="Image URL" />
            </label>
            <label>
                Category:
                <select>
                    <option value="Mens">Mens</option>
                    <option value="Womens" >Womens</option>
                    <option value="Jewellery" >Jewellery</option>
                    <option value="Electronics" >Electronics</option>
                </select>
            </label>
            <button type='submit'>Add</button>
        </form>
    )
}


export default Form
