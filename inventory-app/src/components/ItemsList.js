import React from 'react'
import Item from './Item'
import Grid from '@mui/material/Grid';

import './ItemList.css'

function ItemList(props) {
    // console.log(props)
    const dummyData = [
        {
            id: 0,
            title: "dummy title",
            description: "dummy description",
            price: "dummy price"
        },
        {
            id: 1,
            title: "dummy title",
            description: "dummy description",
            price: "dummy price"
        },
        {
            id: 2,
            title: "dummy title",
            description: "dummy description",
            price: "dummy price"
        },
        {
            id: 3,
            title: "dummy title",
            description: "dummy description",
            price: "dummy price"
        }
    ]
    
    return (
        <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        wrap="wrap"
        >
            {dummyData.map((data, key) => {
                // need to pass props rather than dummy
                return <Item fetchSingleItem={props.fetchSingleItem}
                key={key} id={data.id} title={data.title} 
                description={data.description} 
                price={data.price}/>
            })}
        </Grid>
    )
}

export default ItemList