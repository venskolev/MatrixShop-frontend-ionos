import React, { useState } from 'react';
import { Route } from 'react-router-dom';


// Components
 //import Navigation from '../Buttons';
import Products from '../Products/Products';
import ShoppingCart from '../Products/ShoppingCard';

//Contexts


//hooks
import { useLocalStorage } from '../../hooks/useLocalStorage'
import Navbar from '../NavBar/NavBar';
import { CartContext, ProductContext } from '../../Context';

function App() {
	const [products] = useState([]);
	const [cart, setCart] = useLocalStorage('cart', []);
	// const [cartLocal, setCartLocal] = useLocalStorage('cart')

	const addItem = item => {
		setCart([...cart, item]);
		// setCartLocal([cart])
	};

	const removeItem = id => {
		let newCart = cart.filter(item => item.id !== id)
		setCart(newCart)
	}

	return (
		<div className="App">

			<CartContext value={{ cart, removeItem}}>
				<Navbar cart={cart} />

				<Route
					path="/cart"
					component={ShoppingCart}
				/>
			</CartContext>

			<ProductContext.Provider value={{ products, addItem}}>
				<Route
					exact
					path="/"
					component={Products}
				/>
			</ProductContext.Provider>

		</div>
	);
}

export default App;


// import React from "react";
// import Footer from "../Footer/Footer";

// export default function Impressum() {
//   return (
//     <>
//     <div className="impressum">
//       <h1>Impressum</h1>
//     </div>
//     <Footer />
//     </>
//   );
// }