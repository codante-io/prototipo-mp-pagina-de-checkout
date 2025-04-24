import IconBag from "../assets/icons/icon-bag.png";

const OrderSummary = () => {
  return (
    <section className="bg-white shadow-md rounded-lg p-10 max-w-4xl flex flex-col gap-5">
      <div>
        <h2 className="text-2xl lg:text-4xl font-bold">Resumo do pedido</h2>
        <p className="text-gray-500 text-lg lg:text-xl">Detalhes da sua compra</p>
      </div>
      <section className="flex justify-between items-center gap-5 mt-5">
        <div>
          <img src={IconBag} alt=""  className="w-full h-auto"/>
        </div>
        <div>
          <h2 className="text-2xl font-bold">Produto <br/> Premium</h2>
          <p className="text-gray-500">Quantidade: 1</p>
        </div>
        <p className="text-2xl font-bold">R$279,90</p>
      </section>
      <hr className="border-gray-200 border-1" />
      <section>
        <div className="flex justify-between items-center">
          <p className="text-gray-500">Subtotal: </p>
          <p className="">R$279,90</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-gray-500">Frete </p>
          <p className="">R$9,90</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-gray-500">Desconto: </p>
          <p className="text-green-700">R$9,90</p>
        </div>
      </section>
      <section>
      <hr className="border-gray-200 border-1" />
      <div className="flex justify-between items-center mt-5">
          <p className="text-2xl font-bold">Total: </p>
          <p className="text-2xl font-bold">R$279,90</p>
      </div>
        <p className="text-gray-500 mt-5">* Frete calculado para CEP: 01000-000</p>
        <p className="text-gray-500 mt-2">* Entrega estimada: 3-5 dias úteis</p>
        <p className="text-2xl font-bold mt-5">Métodos de pagamentos aceitos: </p>
        <div className="flex gap-5 mt-5">
          <p className=" w-fit px-2 py-1 bg-gray-100 rounded">Visa</p>
          <p className=" w-fit px-2 py-1 bg-gray-100 rounded">Mastercard</p>
          <p className=" w-fit px-2 py-1 bg-gray-100 rounded">Elo</p>
          <p className=" w-fit px-2 py-1 bg-gray-100 rounded">Boleto</p>
          <p className=" w-fit px-2 py-1 bg-gray-100 rounded">Pix</p>
        </div>
      </section>
    </section>
  );
};

export default OrderSummary;
