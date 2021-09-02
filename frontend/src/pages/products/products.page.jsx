import React, { useEffect, useState } from 'react'
import ProductList from '../../comonents/product-list/product-list.component';




const Products = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch("http://127.0.0.1:8000/product/list/")
			.then(res => res.json())
			.then(res => {
				setProducts(res.results)
			})
			.finally(() => {
				setLoading(false);
			})
	}, [])
	return (
		<>
			<h1 className="mb-11 font-semibold">Products</h1>
			<ProductList products={products} />

		</>
	)
}

export default Products;
