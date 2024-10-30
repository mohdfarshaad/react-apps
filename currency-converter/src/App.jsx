import { useState } from "react";
import { InputBox, Layout, Button, Card } from "./component";
import { ArrowUpDown } from "lucide-react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currenInfo = useCurrencyInfo(from);

  const options = Object.keys(currenInfo);

  console.log(options);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convertAmount = () => {
    setConvertedAmount(amount * currenInfo[to]);
  };

  return (
    <Layout>
      <Card>
        <h1 className="mb-3 font-semibold text-2xl">Currency Converter</h1>
        <InputBox
          label="From"
          amount={amount}
          currencyOptions={options}
          onAmountChange={(newAmount) => {
            setAmount(newAmount);
          }}
          onCurrencyChange={(newCurrency) => {
            setFrom(newCurrency);
          }}
          selectCurrency={from}
        />
        <Button
          size="px-5 py-2"
          color="bg-black"
          icon={<ArrowUpDown />}
          onClick={swap}
        />
        <InputBox
          label="To"
          amount={convertedAmount}
          fieldDisabled={true}
          currencyOptions={options}
          onAmountChange={(newAmount) => {
            setAmount(newAmount);
          }}
          onCurrencyChange={(newCurrency) => {
            setTo(newCurrency);
          }}
          selectCurrency={to}
        />
        <Button
          label={`convert ${from} to ${to}`}
          size="w-full py-3"
          color="bg-black"
          onClick={convertAmount}
        />
      </Card>
    </Layout>
  );
}

export default App;
