import React, { useEffect, useRef, useState } from 'react';
import { CartUse, DispatchUse } from '../Reducer.js';

const Body = ({ item, options }) => {
    const priceKeys = Object.keys(options);
    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState('');
    const priceRef = useRef();
    const data = CartUse();
    const dispatch = DispatchUse();

    const addToCart = async () => {

        const finalPrice = quantity * parseInt(options[size]);
        let food = [];
        for (const items of data) {
            if (items.id === item._id) {
                food = items
                break
            }
        }
        if (food !== []) {
            if (food.size === size) {
                await dispatch({ type: "UPDATE", id: item._id, price: finalPrice, qty: quantity })
                return
            }
            else if (food.size !== size) {
                await dispatch({ type: "ADD", id: item._id, name: item.name, price: finalPrice, qty: quantity, size: size, img:item.img });
                return
            }
            return
        }
        await dispatch({ type: "ADD", id: item._id, name: item.name, price: finalPrice, qty: quantity, size: size });

        console.log(data);
    };

    useEffect(() => {
        setSize(priceRef.current.value);
    }, []);

    const finalPrice = quantity * parseInt(options[size] || 0);

    return (
        <div className="card m-5 shadow-sm" style={{ width: "18rem", maxHeight: "500px" }}>
            <img src={item.img} className="card-img-top" alt={item.name} style={{ height: "220px", objectFit: "cover" }} />
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <div className='container p-0'>
                    <div className="d-flex mb-2">
                        <select className='form-select form-select-sm me-2' onChange={(e) => setQuantity(e.target.value)} value={quantity}>
                            {Array.from(Array(6), (e, i) => (
                                <option value={i + 1} key={i + 1}>{i + 1}</option>
                            ))}
                        </select>
                        <select className='form-select form-select-sm' ref={priceRef} onChange={(e) => setSize(e.target.value)} value={size}>
                            {priceKeys.map((key) => (
                                <option key={key} value={key}>{key}</option>
                            ))}
                        </select>
                    </div>
                    <div className="fw-bold mb-2">
                        {finalPrice} Rs
                    </div>
                    <button className="btn btn-primary" onClick={addToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}

export default Body;
