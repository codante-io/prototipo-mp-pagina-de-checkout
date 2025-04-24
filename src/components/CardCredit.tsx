import MagnectCard from "../assets/icons/magnetic-card.png";
import Lock from "../assets/icons/lock.png";
import ButtonPayment from './ButtonPayment';

const CardCredit = () => {
  return (
    <form action="" className="mt-5 flex flex-col gap-5  w-full lg:max-lg lg:w-lg ">
      <div>
        <p>Número do Cartão</p>
        <div className="flex gap-2 mt-2 border-1 border-gray-300/50 items-center rounded px-2 ">
          <img src={MagnectCard} alt="" sizes="" className="opacity-20" />
          <input
            type="text"
            placeholder="0000 0000 0000 0000"
            className="w-full h-10 placeholder-gray-300 text-lg"
          />
        </div>
      </div>
      <div>
        <p>Nome do Cartão</p>
        <div className="flex gap-2 mt-2 border-1 border-gray-300/50 items-center rounded px-2 ">
          <input
            type="text"
            placeholder="Nome como está no cartão"
            className="w-full h-10 placeholder-gray-300 text-lg"
          />
        </div>
      </div>

      <div className="flex gap-5 justify-between">
        <div>
          <p>Validade</p>
          <div className="flex gap-2 mt-2 border-1 border-gray-300/50 items-center rounded px-2 ">
            <img src={MagnectCard} alt="" sizes="" className="opacity-20" />
            <input
              type="text"
              placeholder="MM/AA"
              className="w-full h-10 placeholder-gray-300 text-lg"
            />
          </div>
        </div>

        <div>
          <p>CVV</p>
          <div className="flex gap-2 mt-2 border-1 border-gray-300/50 items-center rounded px-2 ">
            <img src={MagnectCard} alt="" sizes="" className="opacity-20" />
            <input
              type="text"
              placeholder="123"
              className="w-full h-10 placeholder-gray-300 text-lg"
            />
          </div>
        </div>
      </div>

      <div>
        <p>Parcelas</p>
        <div className="flex gap-2 mt-2 border-1 border-gray-300/50 items-center rounded px-2 ">
          <select name="" id="" className="w-full h-10">
            <option value="aa"> 1 x de R$299,90 (sem juros)</option>
            <option value="aa"> 2 x de R$149,90 (sem juros)</option>
          </select>
        </div>
      </div>

      <label className="inline-flex items-center cursor-pointer">
        <input type="checkbox" className="peer hidden" />
        <div className="w-5 h-5 border-2 border-black peer-checked:bg-black transition-colors rounded"></div>
        <span className="ml-2 text-sm">Salvar cartão para compras futuras</span>
      </label>

  
        <div className="flex gap-2 mt-2 items-center rounded px-2 justify-center">
          <img src={Lock} alt="" sizes="" className="w-4" />
          <p className="text-gray-400">Seus dados estão protegidos com critpografia SSL</p>
        </div>

    <ButtonPayment buttonText="Finalizar pagamento" orderTotal="299.90" />

    </form>
  );
};

export default CardCredit;
