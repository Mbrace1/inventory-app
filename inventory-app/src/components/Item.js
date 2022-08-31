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
    <Card elevation="6" sx={{ maxWidth: "80vw", minWidth: 300, m: "1em"}}>
      <CardMedia
        component="img"
        height="140"
        image="*link goes here"
        alt={props.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {props.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={props.fetchSingleItem} size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default Item