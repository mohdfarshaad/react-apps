import PropTypes from "prop-types";
import { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  fieldDisabled = false,
  selectCurrency = "usd",
  currencyOptions = [],
  onCurrencyChange,
}) {
  const amountInputId = useId();

  return (
    <div className="flex flex-col bg-gray-100 p-4 mb-3">
      <div className="flex justify-between mb-3">
        <label htmlFor={amountInputId} className="text-gray-600 font-normal">
          {label}
        </label>
        <p className="text-gray-600 font-normal">Curreny Type</p>
      </div>
      <div>
        <input
          id={amountInputId}
          type="number"
          className="outline:none focus:outline-none  rounded-s-md py-1.5 px-2 md:w-[300px]
          w-[150px]
          "
          placeholder="Amount"
          disabled={fieldDisabled}
          value={amount === "" ? "" : amount} // Display empty when input is cleared
          onChange={(e) => {
            const newValue = e.target.value;
            onAmountChange &&
              onAmountChange(newValue === "" ? "" : Number(newValue));
          }}
        />
        <select
          name="currency"
          size="1"
          className="px-2 py-2 rounded-e-md cursor-pointer outline-none md:w-[100px]
          w-[50px]"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

InputBox.propTypes = {
  label: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currencyOptions: PropTypes.array,
  onAmountChange: PropTypes.func.isRequired,
  fieldDisabled: PropTypes.bool,
  selectCurrency: PropTypes.string,
  onCurrencyChange: PropTypes.func.isRequired,
};

export default InputBox;
