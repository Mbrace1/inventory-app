import React from 'react'
import Item from './Item'
import Grid from '@mui/material/Grid';

import './ItemList.css'

function ItemList(props) {
    console.log(props)

    return (
        <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        wrap="wrap"
        >
            {props.data.map((data, key) => {
                // need to pass props rather than dummy
                return <Item fetchSingleItem={props.fetchSingleItem}
                key={key} id={data.id} title={data.title} 
                description={data.description} 
                price={data.price} image={data.image}/>
            })}
        </Grid>
    )
}

export default ItemList