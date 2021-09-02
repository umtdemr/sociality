import React from 'react'
import { Link } from "react-router-dom";

const ProductList = ({products}) => {
	return (
		<div className="product_list grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
			{
				products.map(product => (
					<Link className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden" to={"/product/" + product.id}>
							<div className="flex items-end justify-end h-56 w-full bg-cover">
								<img src={product.image_link} alt="qwe"/>
							</div>
							<div className="px-5 py-3">
									<h3 className="text-gray-700 uppercase">{product.name}</h3>
									<span className="text-gray-500 mt-2">{product.price}</span>
							</div>
					</Link>
				))
			}
			</div>
	)
}

export default ProductList;
