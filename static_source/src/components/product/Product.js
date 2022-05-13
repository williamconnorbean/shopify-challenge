import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Product = (props) => {
  const {
    name,
    description,
    salePrice,
    costPrice,
    stock
  } = props;

  return (
    <Card sx={{ width: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2">
          Sale price: {salePrice}
          <br />
          Cost price: {costPrice}
          <br />
          Units in stock: {stock}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Edit</Button>
        <Button size="small" color="error">Delete</Button>
      </CardActions>
    </Card>
  );
};

export default Product;
