import React from "react";
import { CartUse, DispatchUse } from "../Reducer.js";
import trash from "../assets/trash.svg";

const Cart = () => {
  const cart = CartUse();
  const dispatch = DispatchUse();
  const totalprice = cart.reduce((total, food) => total + food.price, 0);

  const handleRemove = (index) => {
    dispatch({ type: "REMOVE", index: index });
  };

  const handleCheckout = async () => {
    const userEmail = localStorage.getItem("userEmail");
    let response = await fetch('http://localhost:8001/api/orderDetail', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        order: cart,
        email: userEmail,
        date: new Date().toDateString(),
      })
    });

    if (response.ok) {
      const result = await response.json();
      if (result.success) {
        dispatch({ type: "DROP" });
        alert("Order placed successfully!");
      } else {
        alert("Failed to place order");
      }
    } else {
      alert("Failed to place order");
    }
  };


  return (
    <>
      <div className="container mt-5">
        <h2 className="text-center mb-4">Item Cart</h2>
        {cart.length === 0 ? (
          <p className="text-center text-muted">Your cart is empty</p>
        ) : (
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Option</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody className="bg-secondary">
                {cart.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.qty}</td>
                    <td>{item.size}</td>
                    <td>{item.price} Rs</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleRemove(index)}
                      >
                        <img
                          src={trash}
                          alt="Remove"
                          style={{ width: "20px", height: "20px" }}
                        />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {cart.length === 0 ? (
          <p></p>
        ) : (
          <div className="d-flex justify-content-end">
            <div className="mt-3">
              <h5>Total: {totalprice} Rs</h5>
              <button className="btn btn-primary mt-3" onClick={handleCheckout}>
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
