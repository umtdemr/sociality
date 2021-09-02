import React, { useEffect, useState } from 'react'

import { useParams } from "react-router-dom";


const Product = () => {
	const params = useParams();
	const [product, setProduct] = useState({})
	const product_id = params.id;

	useEffect(() => {
		fetch(`${process.env.REACT_APP_BASE_URL}/product/${product_id}`)
			.then(res => res.json())
			.then(res => {
				setProduct(res)
			})

	}, [product_id]);
	return (
		<div className="md:flex md:items-center">
                <div className="w-full h-64 md:w-1/2 lg:h-96">
                    <img className="h-full w-full rounded-md object-cover max-w-lg mx-auto" src={product.image_link} alt={product.name} />
                </div>
                <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                    <h3 className="text-gray-700 uppercase text-lg">{product.name}</h3>
                    <hr className="my-3" />
                    <span className="text-gray-500 mt-3">{product.price}</span>
                </div>
            </div>
	)
}


export default Product;
