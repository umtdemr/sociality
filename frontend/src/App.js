import {
	BrowserRouter as Router,
	Route,
	Switch,
} from "react-router-dom";

import './App.css';
import Header from './comonents/header/header.components';
import Home from "./pages/home/home.component";
import Products from "./pages/products/products.component";
import Product from "./pages/product/product.page";


function App() {
  return (
		<Router>
			<div className="App content container mx-auto">
				<Header />
				<div className="px-5">
						<Switch>
							<Route exact path="/" >
								<Home />
							</Route>
							<Route exact path="/products" >
								<Products />
							</Route>
							<Route exact path="/product/:id" >
								<Product />
							</Route>
						</Switch>
				</div>
			</div>
		</Router>
  );
}

export default App;
