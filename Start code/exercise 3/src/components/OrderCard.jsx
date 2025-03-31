import React from "react";

export default function OrderCard({order,setOrders}) {
  
  const [quantity, setQuantity] = React.useState(order.quantity);
  const increment = () => {
    setQuantity(quantity + 1);
    setOrders((prevOrders) =>
      prevOrders.map((o) =>
        o.product === order.product ? { ...o, quantity: quantity + 1 } : o
      )
    );
  };
  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      setOrders((prevOrders) =>
        prevOrders.map((o) =>
          o.product === order.product ? { ...o, quantity: quantity - 1 } : o
        )
      );
    }
  };

  return (
    <div className="order">
      <div>
        <h4>{order.product}</h4>
        <small>{order.price}</small>
      </div>

      <div className="order-quantity">
        <div onClick = {decrement}className="order-button">-</div>
        {/* quantity */}
        <h4>{quantity}</h4> 
        <div onClick={increment} className="order-button">+</div>
      </div>
    </div>
  );

}
