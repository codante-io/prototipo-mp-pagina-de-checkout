type ButtonPaymentProps = {
  buttonText: string;
  orderTotal: string;
}
const ButtonPayment = ({buttonText, orderTotal} : ButtonPaymentProps) => {
  return (
    <button className='flex cursor-pointer rounded p-3 gap-2 items-center justify-center bg-black shadow-lg hover:shadow-2xl transition-all duration-300 text-white w-full font-bold'>
   {buttonText} (R${orderTotal})
    </button>
  )
}

export default ButtonPayment
