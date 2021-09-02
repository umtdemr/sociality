import React from 'react'

import { useParams } from "react-router-dom";


const Product = () => {
	const params = useParams();
	const product_id = params.id;
	return (
		<div>Product {product_id}</div>
	)
}


export default Product;
