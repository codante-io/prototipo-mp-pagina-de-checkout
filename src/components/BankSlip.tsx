import Info from '../assets/icons/info.png';
import ButtonPayment from './ButtonPayment';

const BankSlip = () => {
  return (
    <section className='flex flex-col gap-5  w-full lg:max-lg lg:w-lg'>
      <div className='border-red-300/50 border-2 rounded-lg px-5  py-2 flex gap-5 items-center'>
        <img src={Info} alt=""/>
        <p className='text-red-300'>O boleto bancário vence em 3 dias úteis. Após o pagamento, a compensação pode levar até 3 dias úteis.</p>
      </div>
      <div>
        <p>CPF</p>
        <div className="flex gap-2 mt-2 border-1 border-gray-300/50 items-center rounded px-2 ">
          <input
            type="text"
            placeholder="000.000.000-00"
            className="w-full h-10 placeholder-gray-300 text-lg"
          />
        </div>
      </div>
      <div >
        <p>Nome Completo</p>
        <div className="flex gap-2 mt-2 border-1 border-gray-300/50 items-center rounded px-2 ">
          <input
            type="text"
            placeholder="Almira Maria"
            className="w-full h-10 placeholder-gray-300 text-lg"
          />
        </div>
      </div>
      <ButtonPayment buttonText='Gerar Boleto' orderTotal="279,90" />
    </section>
  )
}

export default BankSlip
