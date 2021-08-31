import React from 'react'
import { Link } from 'react-router-dom';


const Header = () => {
	return (
    <div className="header w-full flex justify-between py-5 px-5 rounded border-b-2 border-blue-50 mb-10 dark:border-gray-400">
      <div className="header__logo">
        <h1 className="text-2xl font-bold dark:text-white">
					<Link to="/">Sociality</Link></h1>
      </div>
			<div className="header__actions">
				<Link to="/" className="mx-5">Home</Link>
				<Link to="/products">Products</Link>
			</div>
    </div>
  );
}


export default Header;
