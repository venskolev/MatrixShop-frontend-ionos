import * as React from "react";
import { Link as RouterLink } from 'react-router-dom';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import IconButton from "@mui/material/IconButton";
import HoverRating from "./Rating";
import "../../sass/ShoppingCart.scss"

export default function MediaCard() {
  // const [value, setValue] = React.useState(2);
  return (
    <Card sx={{ maxWidth: 445, margin: "40px", padding: "20px" }}>
      <CardMedia
        component="img"
        height="140"
        image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography className="shopping-cart-container__title" gutterBottom variant="h5" component="div">
          {/* {Title} */}
          Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div">
          {/* {Category} */}
          Men's clothing
          <h2 style={{color: "red"}}>200 €</h2>
          <hr />
        </Typography>
        <Typography variant="body2" className="shopping-cart-container__item" component="p">
          {/* {Description} */}
          Your perfect pack for everyday use and walks in the forest. Stash your
          laptop (up to 15 inches) in the padded sleeve, your everyday
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><AddShoppingCartIcon /></Button>
        <Button size="small">Wunschzettel</Button>
        <Button size="small" component={RouterLink} to="/products">Weiter</Button>
        <IconButton aria-label="add to favorites"></IconButton>
      </CardActions>
      <CardContent>
        <HoverRating />
      </CardContent>
    </Card>
  );
}
