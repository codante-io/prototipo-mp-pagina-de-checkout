import { useEffect, useState } from "react";
import IconQrCode from "../assets/icons/qrcode.png";
import QRCode from "qrcode";
import ButtonPayment from "./ButtonPayment";
import { FaArrowsRotate } from "react-icons/fa6";
import { FaCopy } from "react-icons/fa";

const PagePix = () => {
  const [pixCode, setPixCode] = useState(
    "00020126440014BR.GOV.BCB.PIX0114+5581999999995204000053039865408299.905802BR5925NOME DO RECEBEDOR6009Sao Paulo62070503***6304ABCD"
  );
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  const [showToast, setShowToast] = useState(false);

  const generatePixCode = () => {
    const random = Math.floor(Math.random() * 1000000);
    return `00020126440014BR.GOV.BCB.PIX0114+5581999999995204000053039865408299.90${random}5802BR5925NOME DO RECEBEDOR6009Sao Paulo62070503***6304ABCD`;
  };

  const generateQrCode = async () => {
    const newCode = generatePixCode(); 
    setPixCode(newCode);
    const url = await QRCode.toDataURL(newCode);
    setQrCodeUrl(url);
  };

  useEffect(() => {
    generateQrCode();
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(pixCode);
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <section className="flex flex-col gap-5 w-full lg:max-lg lg:w-lg items-center">
      <div className="border-green-700/50 border-2 rounded-lg px-5 py-2 flex gap-5 items-center">
        <img src={IconQrCode} alt="QR Code do Pix" />
        <p className="text-green-700">
          O Pagamento é instantâneo! Após o pagamento via PIX, a confirmação é
          imediata.
        </p>
      </div>

      <div className="border-2 border-gray-100 rounded ">
        <img
          src={qrCodeUrl}
          alt="QR Code do Pix"
          className="w-50 h-50 object-contain"
        />
      </div>
      <button
        onClick={generateQrCode}
        className="cursor-pointer border-gray-100 border-1 hover:bg-gray-300 px-4 py-2 rounded-md text-sm w-fit transition flex items-center gap-2"
      >
        <FaArrowsRotate />
        Atualizar QR Code
      </button>

      <div className=" w-full">
        <p>Ou copie e cole o código PIX:</p>
        <div className="flex border border-gray-300 items-center px-3 py-2 rounded-md gap-2 cursor-pointer">
          <input
            type="text"
            value={pixCode}
            readOnly
            className="  text-sm w-full"
          />
        <button
          onClick={copyToClipboard}
          className="cursor-pointer px-4 py-2 rounded-md text-sm transition"
        >
          <FaCopy/>
        </button>
         
        </div>
      </div>

      <ButtonPayment buttonText="Gerar Boleto" orderTotal="279,90" />
      {showToast && (
  <div className="fixed bottom-5 right-5 bg-green-700 text-white px-4 py-2 rounded-lg shadow-lg animate-fade-in-out">
    Código PIX copiado com sucesso!
  </div>
)}
    </section>
  );
};

export default PagePix;
