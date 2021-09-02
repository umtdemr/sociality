import React, { useEffect, useState } from 'react'
import ProductList from '../../comonents/product-list/product-list.component';




const Products = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		let url = `${process.env.REACT_APP_BASE_URL}/product/list/`;
		fetch(url)
			.then(res => res.json())
			.then(res => {
				setProducts(res.results)
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
