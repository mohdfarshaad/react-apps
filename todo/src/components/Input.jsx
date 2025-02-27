import PropTypes from "prop-types";

function Input({ label: labelText, type: inputType, value: inputValue, onValueChange: handleInputChange }) {
  return (
    <div>
      <input
        type={inputType}
        className="mt-2 py-2 px-3 outline-none focus:outline-none text-black rounded-md"
        placeholder={labelText}
        value={inputValue}
        onChange={(event) => handleInputChange(event.target.value)}
      />
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onValueChange: PropTypes.func.isRequired,
};

export default Input;
