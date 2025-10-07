import React, { use, } from "react";
import States from "./States";
import OrderCard from "./cards/OrderCard";


const OrderContainer = ({ promise }) => { 
    const orders = use(promise)
    console.log(orders)
   
  return (
    <div>
      <States></States>

      <section className="w-11/12 mx-auto py-10 grid  grid-cols-1 lg:grid-cols-12 gap-5">
        <div className="lg:col-span-7">
          <h2 className="font-bold text-4xl">Currrent Orders</h2>

          <div className="space-y-5">
            {orders.map((order) => (
              <OrderCard
                key={order.id}
                order={order}
              ></OrderCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrderContainer;