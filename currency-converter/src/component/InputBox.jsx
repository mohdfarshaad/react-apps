import PropTypes from "prop-types";

function InputBox({ label, readOnly }) {
  return (
    <div className="flex flex-col bg-gray-100 p-4 mb-3">
      <div className="flex justify-between mb-3">
        <p className="text-gray-600 font-normal">{label} </p>
        <p className="text-gray-600 font-normal">Curreny Type</p>
      </div>
      <div>
        <input
          type="number"
          className="outline:none focus:outline-none  rounded-s-md py-1.5 px-2 md:w-[300px]
          w-[150px]
          "
          placeholder="0"
          readOnly={readOnly}
        />
        <select
          name="currency"
          size="1"
          defaultValue="usd"
          className="px-2 py-2 rounded-e-md cursor-pointer outline-none md:w-[100px]
          w-[50px]"
        >
          <option value="red">inr</option>
          <option value="green">gbp</option>
          <option value="blue">eur</option>
        </select>
      </div>
    </div>
  );
}

InputBox.propTypes = {
  label: PropTypes.string.isRequired,
  readOnly: PropTypes.bool,
};

export default InputBox;
