const InputBox = ({
  amount,
  onAmountChange,
  label,
  option = [],
  selectedCurrency,
  onCurrencyChange,
  amountDisabled
}) => {
  return (
    <div className="bg-gradient-to-r from-purple-300 to-purple-400 p-4 rounded-lg flex text-black shadow-md">
      <div className="w-1/2 pr-4">
        <label className="text-black mb-2 inline-block text-lg">{label}</label>
        <input
          className="outline-none w-full bg-transparent py-2 px-3 rounded-lg text-black placeholder-zinc-500 shadow-sm focus:ring-2 focus:ring-blue-400"
          disabled={amountDisabled}
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => {
            const value = e.target.value;
            if (value !== "" && !isNaN(value)) {
              onAmountChange && onAmountChange(Number(value));
            }
          }}
        />
      </div>

      <div className="w-1/2 flex flex-col justify-between">
        <p className="text-black mb-2 text-lg">Currency Type</p>
        <select
          className="rounded-lg px-3 py-2 bg-gray-100 text-black cursor-pointer outline-none shadow-sm focus:ring-2 focus:ring-blue-400"
          value={selectedCurrency}
          onChange={(e) => {
            onCurrencyChange && onCurrencyChange(e.target.value);
          }}
        >
          {option.map((items, id) => (
            <option key={id}>{items}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputBox;
