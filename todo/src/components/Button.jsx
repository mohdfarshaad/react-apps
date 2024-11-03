import PropTypes from "prop-types";

function Button({ label: buttonLabel, onClick: handleClick }) {
  return (
    <button
      className="px-4 bg-black/50 mt-3 text-white py-2 rounded-md"
      onClick={handleClick}
      type="button"
    >
      {buttonLabel}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
