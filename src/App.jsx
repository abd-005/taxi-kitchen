import { Suspense } from 'react';
import Navbar from './components/Navbar'
import Heading from './components/Heading'
import OrderContainer from './components/OrderContainer';

const loadOrders = () => fetch("/orders.json").then((res) => res.json());

function App() {
  const ordersPromise = loadOrders();

  return (
    <div>
      <header className='w-11/12 mx-auto py-3'>
      <Navbar></Navbar>
      </header>
      <section>
        <Heading>Kitchen Room</Heading>
      </section>
      <section>
        <Suspense fallback={"Loading ⌛"}>
          <OrderContainer promise={ordersPromise}></OrderContainer>
        </Suspense>
      </section>
    </div>
  )
}

export default App
