import React from "react";

import OrderCard from "./components/OrderCard";
import CheckoutButton from "./components/CheckoutButton";

const ORDERS = [
  {
    product: "Banana",
    price: 54.6,
    quantity: 3,
  },
  {
    product: "Computer",
    price: 100.5,
    quantity: 4,
  },
  {
    product: "Table",
    price: 1070,
    quantity: 3,
  },
];

export default function App() {
  const [orders, setOrders] = React.useState(ORDERS);

  const calTotalPrice = (orders) => {
    let total = 0;
    orders.forEach((order) => {
      total += order.price * order.quantity;
    });
    return total.toFixed(2);
  };

  return (
    <>
      <header>
        <h1>Your orders</h1>
      </header>

      <div className="order-list">
        {orders.map((order, index) => (
          <OrderCard key={index} order={order} setOrders={setOrders} />
        ))}
      </div>

      <CheckoutButton total={calTotalPrice(orders)} /> 
    </>
  );
}
