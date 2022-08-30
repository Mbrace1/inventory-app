import React from 'react'
import Item from './Item'
import Grid from '@mui/material/Grid';

import './ItemList.css'

function ItemList() {
    console.log("test")
    const dummyData = [
        {
            title: "dummy title",
            description: "dummy description",
            price: "dummy price"
        },
        {
            title: "dummy title",
            description: "dummy description",
            price: "dummy price"
        },
        {
            title: "dummy title",
            description: "dummy description",
            price: "dummy price"
        },
        {
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
                return <Item key={key} title={data.title} 
                description={data.description} 
                price={data.price}/>
            })}
        </Grid>
    )
}

export default ItemList