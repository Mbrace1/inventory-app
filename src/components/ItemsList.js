import React, {useState} from 'react'
import Item from './Item'
import Grid from '@mui/material/Grid';

import './ItemList.css'

function ItemList(props) {
    console.log(props)
    const [filter, setFilter] = useState("")

    return (
        <>
            <label for="searchFor">Search Items: </label>
            <input id="searchFor" type="text" onChange={(e) => setFilter(e.target.value)}></input>
            <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            wrap="wrap"
            >
            {props.data.filter(data => {
                if (filter == "") {
                    return data
                } else if (data.title.toLowerCase().includes(filter.toLowerCase())) {
                    return data
                }
                }).map((data, key) => {
                    // need to pass props rather than dummy
                    return <Item fetchSingleItem={props.fetchSingleItem}
                    key={key} id={data.id} title={data.title} 
                    description={data.description} 
                    price={data.price} image={data.image}/>
                })}
            </Grid>
        </>
    )
}

export default ItemList