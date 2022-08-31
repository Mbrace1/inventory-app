import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function ItemDetailed(props) {
    console.log(props)
    
  return (
    <Card elevation="6" sx={{ maxWidth: 400, mx: "auto", my: "1em"}}>
      <CardMedia
        component="img"
        height="140"
        image="*link goes here"
        alt="title"// {props.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          dummy title {/* {props.title} */}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            dummy description {/*{props.description*/}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ItemDetailed