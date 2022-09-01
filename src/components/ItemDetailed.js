import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function ItemDetailed(props) {


  return (
    <Card elevation="6" sx={{ maxWidth: "80vw", minWidth: 300, mx: "auto", my: "1em" }}>
      <CardMedia
        component="img"
        height="140"
        image={props.item.image}
        alt="title"// {props.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.item.description}
        </Typography>
      </CardContent>
      {/* <button onClick={}></button>  to open the second form to update data*/}
    </Card>
  );
}

export default ItemDetailed