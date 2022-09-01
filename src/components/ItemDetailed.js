import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { display } from '@mui/system';


function ItemDetailed(props) {
  console.log(props)

  return (
    <>
      <Card elevation="6" sx={{ width: "300px", mx: "auto", my: "1em", display: props.deleteMessage ? "none" : "block" }}>
        <CardMedia
          component="img"
          height="100%"
          image={props.item.image}
          alt={props.item.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.item.title}
          </Typography>
          <Typography variant="body1" sx={{fontSize:"1.2em", fontWeight:"bold"}}>
            £{props.item.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.item.description}
          </Typography>
        </CardContent>
        <CardActions sx={{justifyContent: "center"}}>
          <Button onClick={props.removeItem} data-id={props.item.id} size="small">Remove Item</Button>
        </CardActions>
      </Card>
      {props.deleteMessage && <h1>Item Deleted</h1>}
    </>
  );
}

export default ItemDetailed