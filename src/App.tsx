import './App.css'
import Checkout from './Checkout';
import OrderSummary from './components/OrderSummary';

function App() {
  return (
    <>
    <div className='flex  flex-col lg:flex-row  lg:items-start lg:justify-center w-full lg:h-screen bg-gray-200 gap-5 pt-10 px-5'>
      <Checkout />
      <OrderSummary />
     
    
    </div>
    </>
  )
}

export default App
