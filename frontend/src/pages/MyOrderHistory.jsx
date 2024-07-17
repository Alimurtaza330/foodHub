import React, { useState, useEffect } from 'react';
import Navbarr from '../components/Navbarr';
import Footer from '../components/Footer';

const MyOrderHistory = () => {
    const [orderData, setOrderData] = useState([]);

    const fetchMyOrder = async () => {
        try {
            const userEmail = localStorage.getItem('userEmail');
            const response = await fetch("http://localhost:8001/api/myOrderHistory", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: userEmail })
            });
            if (!response.ok) {
                throw new Error('Failed to fetch order history');
            }
            const data = await response.json();
            setOrderData(data.orderData || []);
        } catch (error) {
            console.error('Error fetching order history:', error);
        }
    };

    useEffect(() => {
        fetchMyOrder();
    }, []);

    return (
        <div>
            <Navbarr />
            <div className='container'>
                <div className='row'>
                    {orderData.length > 0 ? (
                        orderData.map((item, index) => (
                            <div key={index} className='col-12 col-md-6 col-lg-3'>
                                {item.Orderdate ? (
                                    <div className='m-auto mt-5'>
                                        <h4>{item.Orderdate}</h4>
                                        <hr />
                                    </div>
                                ) : (
                                    <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
                                        {/* <img src={item.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} /> */}
                                        <div className="card-body">
                                            <h5 className="card-title">{item.name}</h5>
                                            <div className='container w-100 p-0' style={{ height: "38px" }}>
                                                <span className='m-1'>{item.qty}</span>
                                                <span className='m-1'>{item.size}</span>
                                                <div className='d-inline ms-2 h-100 w-20 fs-5'>
                                                    {item.price}Rs
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))
                    ) : (
                        <p>No orders found</p>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MyOrderHistory;
