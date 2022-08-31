import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import './Item.css'

function Item(props) {
    console.log(props)
    
  return (
    <Card elevation="6" sx={{height: 600, width: 300, m: "1em",  display: 'flex',  flexDirection: 'column', alignItems: "center", justifyContent: "space-around"}}>
      <CardMedia
        component="img"
        height= "200px"
        image={props.image}
        alt={props.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            £{props.price}
        </Typography>
      </CardContent>
      <CardActions sx={{justifyContent: "center"}}>
        <Button onClick={props.fetchSingleItem} data-id={props.id} size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default Item