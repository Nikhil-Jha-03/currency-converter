import { useState } from "react";
import InputBox from "./components/inputBox";
import useCurrencyHook from "./hooks/getCurrencyDetails.js";
function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("inr");
  const [to, setTo] = useState("usd");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const data = useCurrencyHook(from);
  console.log(data)
  const option = Object.keys(data);

  function currencyConvert(){
    let result = amount * data[to]
    setConvertedAmount(result)
  }  

  return (
    <>
      <div className="flex flex-col gap-6 h-screen justify-center items-center bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700">
      <h1 className="text-4xl font-bold text-center text-white mb-8">Currency Converter</h1>
  <div className="w-full max-w-md bg-white rounded-xl p-8 shadow-xl backdrop-blur-md bg-white/40 flex flex-col gap-5">
    <InputBox
      amount={amount}
      setAmount
      label={"From"}
      onAmountChange={(amount) => {
        setAmount(amount);
      }}
      option={option}
      selectedCurrency={from} 
      onCurrencyChange={(currenciess) => {
        setFrom(currenciess);
      }}
    />

    <InputBox
      amount={convertedAmount}
      label={"To"}
      option={option}
      selectedCurrency={to}
      onCurrencyChange={(currenciess) => {
        setTo(currenciess);
      }}
      onConvertAmountChange={(e) => {
        setConvertedAmount(amount);
      }}
    />

    <button 
      onClick={currencyConvert} 
      className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
    >
      Convert
    </button>
  </div>
</div>

    </>
  );
}

export default App;
