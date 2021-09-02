import React, { useState } from 'react'


const ScrapeInput = () => {
	const [loading, setLoading] = useState(false);
	const [inputVal, setInputVal] = useState(false);

	const handleChange = () => {
		const pattern = /https?:\/\/(www\.)?etsy\.com\/listing\/[0-9]*\/([-a-zA-Z0-9()@:%_+.~#?&//=]*)/
		var regex = new RegExp(pattern);

		if (!inputVal.match(regex)) {
			alert("Please enter valid etsy product url");
			return;
		}
		setLoading(true);
		fetch(
			`${process.env.REACT_APP_BASE_URL}/product/scrape/`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({"url": inputVal})
			}
		)
			.then(res => res.json())
			.then(res => {
				if (res.message === "created") {
					alert(`Success! Product ID: ${res.product_id}`)
				}
			})
			.finally(() => {
				setLoading(false);
			})
	}

	return (
		<div className="scrape_input mx-auto flex justify-center">
			{!loading &&
			(
				<div className="form_group w-full flex justify-center">
					<input
						className="block p-2 outline-none shadow-md border-2 border-gray-300 focus:border-gray-500 text-black rounded-xl w-2/3"
						type="text"
						placeholder="Enter etsy product url"
						onChange={(e) => setInputVal(e.target.value)}
						/>
						<button
							className="px-10 py-2 bg-gray-500 text-white ml-5"
							onClick={() => handleChange()}
						>Save Product</button>
				</div>
			)
			}
			{loading &&
				<span>Loading...</span>
			}
		</div>
	)
}

export default ScrapeInput;
