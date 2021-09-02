import React from 'react'

import { Link } from "react-router-dom";


const Products = () => {
	return (
		<>
			<h1 className="mb-11 font-semibold">Products</h1>
			<div className="product_list grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
					<Link className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden" to="/">
							<div className="flex items-end justify-end h-56 w-full bg-cover">
								<img src="https://i.etsystatic.com/16533248/r/il/ea29f5/3010015383/il_794xN.3010015383_qwe8.jpg" alt="qwe"/>
							</div>
							<div className="px-5 py-3">
									<h3 className="text-gray-700 uppercase">classNameic watch</h3>
									<span className="text-gray-500 mt-2">$123</span>
							</div>
					</Link>
			</div>
		</>
	)
}

export default Products;
