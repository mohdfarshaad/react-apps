import InputBox from "./component/InputBox";
import Button from "./component/Button";
import Card from "./component/Card";
import Layout from "./component/Layout";
import { ArrowUpDown } from "lucide-react";

function App() {
  return (
    <Layout>
      <Card>
        <h1 className="mb-3 font-semibold text-2xl">Currency Converter</h1>
        <InputBox label="From" />
        <Button size="px-5 py-2" color="bg-black" icon={<ArrowUpDown />} />
        <InputBox label="To" readOnly={true} />
        <Button label="Convert" size="w-full py-3" color="bg-black" />
      </Card>
    </Layout>
  );
}

export default App;
