import React from 'react';
// import '../../sass/AdminProducts.scss'
import "../../sass/ShoppingCart.scss";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/action/cartActions";
import { useUser } from '../../Context/UserContext';

const Cart = ({
  queryCur,
  sortType,
  products,
  actAttr,
  activePage,
  activeProduct,
}) => {
  const displayProduct = (
    queryCur,
    sortType,
    products,
    actAttr,
    activePage
  ) => {
    return activeProduct(queryCur, sortType, products, actAttr).slice(
      (activePage - 1)
    );
  };

  const nav = useNavigate();
  const dispatch = useDispatch();
  const token = useUser();

  const handleProduct = (productId) => {
    nav(`/product/${productId}`)
    console.log("Handel:", productId)
  }

  const ImageBase64 = ({ data }) => (
    <>
      {data ? <img alt="Bild" src={data} /> : undefined}
    </>
  );
  const formatPrice = (price) => {
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
    }).format(price);
  };
console.log("Token Cart",token.user)
  return (
    <div className='row'>
          {displayProduct(
            queryCur,
            sortType,
            products,
            actAttr,
            activePage,
            activeProduct
          ).map(product=> {
            return (

              <Card
          key={products._id}
          sx={{overflow: "visible", maxWidth: 445, margin: "40px", padding: "20px" }}
        >

          <div className="shopping-cart-container">
            <div className="column-1">
              <ImageBase64 data={product.photo} alt="Bild" />
              <CardContent>
                <Typography
                  className="shopping-cart-container__title"
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  {/* {Title} */}
                  {product.productName}
                </Typography>
                <Typography
                  className="shopping-cart-container__cat"
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  {/* {Category} */}

                  <h4>{product.category}</h4>
                  <h4>{formatPrice(product.price)}</h4>
                  <h5 style={{ color: "red" }}><h4>10% Rabatt Neueröffnung</h4>Statt: <h5 style={{ textDecorationLine: 'line-through', textDecorationStyle: 'solid' }}>{formatPrice(((product.price) * 10 / 100) + (product.price))}</h5></h5>

                  <hr />
                </Typography>
                <Typography
                  variant="body2"
                  className="shopping-cart-container__item"
                  component="p"
                >
                  {/* {Description} */}
                  {product.description}
                </Typography>
              </CardContent>

              {/* <CardActions>

                <Button size="small">
                  <AddShoppingCartIcon />
                </Button>
                <Button size="small">Wunschzettel</Button>
                <Button size="small" component={RouterLink} to="/products">
                  Weiter
                </Button>
                <IconButton aria-label="add to favorites"></IconButton>
              </CardActions>
              <CardContent>
                <HoverRating />

              </CardContent> */}
              <Button className="m-1" variant="outlined" onClick={() => { handleProduct(product._id) }}>
                Produkt anzeigen
              </Button>
              {!token.user ?
              (<Button variant="contained" disabled color="success" onClick={() => { dispatch(addToCart(product)) }}>
                in warenkorb
              </Button>) : (<Button variant="contained" color="success" onClick={() => { dispatch(addToCart(product)) }}>
                in warenkorb
              </Button>)
              }
            </div>
          </div>
        </Card>
            );
          })}
    </div>
  );
};

export default Cart;