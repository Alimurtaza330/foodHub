import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Badge from "react-bootstrap/Badge"
import Overlay from '../Overlay';
import Cart from '../pages/Cart';
import { CartUse } from '../Reducer';


function Navbarr({ onSearch }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [cartView, setCartview] = useState(false);
    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    };
    const data = CartUse();

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        onSearch(searchQuery);
    };

    return (
        <nav className="navbar navbar-expand-lg bg-secondary navbar-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">FOOD HUB</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        {localStorage.getItem('login') && (
                            <li className="nav-item">
                                <Link className="nav-link" to="/myOrderhistoy">My Order</Link>
                            </li>
                        )}
                    </ul>
                    {localStorage.getItem('login') ? (
                        <div className="d-flex align-items-center">
                            <button className="btn btn-outline-light mx-1" onClick={() => {
                                localStorage.removeItem('login');
                                window.location.reload();
                            }}>Logout</button>
                            <form className="d-flex ms-auto" role="search" onSubmit={handleSearchSubmit}>
                                <input
                                    className="form-control me-2"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                    value={searchQuery}
                                    onChange={handleSearchInputChange}
                                />
                                <button className="btn btn-outline-light" type="submit">Search</button>
                            </form>
                            <div className="btn btn-outline-light ms-2" onClick={() => { setCartview(true) }}>My Cart
                                <Badge pill bg='danger' className='ms-2'>{data.length === 0 ? "" : data.length}</Badge>
                            </div>
                            {cartView ? <Overlay onClose={() => { setCartview(false) }}><Cart /></Overlay> : null}
                        </div>
                    ) : (
                        <div className="d-flex">
                            <Link className="btn btn-outline-light mx-1" to="/login">Login</Link>
                            <Link className="btn btn-outline-light mx-1" to="/signup">Signup</Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbarr;
