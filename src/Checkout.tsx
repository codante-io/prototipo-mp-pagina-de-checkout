import MenuPayment from './components/MenuPayment'

const Checkout = () => {
  return (
    <section className="bg-white shadow-md rounded-lg p-10 max-w-4xl">
      <h2 className=' text-2xl lg:text-4xl font-bold'>Finalizar Compra</h2>
      <p className='text-gray-500 text-md'>Escolha seu método de pagamento preferido</p>
      <MenuPayment />
     
      </section>
  )
}

export default Checkout