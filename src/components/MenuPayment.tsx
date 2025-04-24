import { useState } from 'react'
import MagneticCard from '../assets/icons/magnetic-card.png'
import CardCredit from './CardCredit'
import BankSlip from './BankSlip'
import PagePix from './PagePix'

const MenuPayment = () => {
  const [selectedPayment, setSelectedPayment] = useState("credit");

  return (
    <div>
      <section className='bg-gray-100 p-1 rounded-lg flex flex-col gap-5 my-5 justify-between lg:flex-row'>
        <button
          onClick={() => setSelectedPayment("credit")}
          className={`flex  w-full lg:w-fit cursor-pointer rounded-lg p-2 gap-2 items-center lg:justify-center 
            ${selectedPayment === "credit" && "bg-white shadow-md"} 
            hover:shadow-lg transition-all duration-300`}
        >
          <img src={MagneticCard} alt="Ícone de cartão" />
          <p className='text-sm'>Cartão de crédito</p>
        </button>

        <button
          onClick={() => setSelectedPayment("boleto")}
          className={`flex w-full lg:w-fit cursor-pointer rounded-lg p-2 gap-2 items-center lg:justify-center 
            ${selectedPayment === "boleto" && "bg-white shadow-md" } 
            hover:shadow-lg transition-all duration-300`}
        >
          <img src={MagneticCard} alt="Ícone de cartão" />
          <p className='text-sm'>Boleto</p>
        </button>

        <button
          onClick={() => setSelectedPayment("pix")}
          className={`flex w-full lg:w-fit cursor-pointer rounded-lg  p-2 lg:px-10 gap-2 items-center lg:justify-center 
            ${selectedPayment === "pix" && "bg-white shadow-md" } 
            hover:shadow-lg transition-all duration-300`}
        >
          <img src={MagneticCard} alt="Ícone de cartão" />
          <p className='text-sm'>Pix</p>
        </button>
      </section>

      {selectedPayment === "credit" && <CardCredit />}
      {selectedPayment === "boleto" && <BankSlip />}
      {selectedPayment === "pix" && <PagePix />}
    </div>
  );
}

export default MenuPayment
