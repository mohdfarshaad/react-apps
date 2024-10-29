import PropTypes from "prop-types";

function Button({ label, onClick, size, color, icon }) {
  return (
    <button
      className={`${size} ${color} font-semibold mb-3 rounded-md text-white cursor-pointer hover:bg-white/30 hover:text-black`}
      onClick={onClick}
    >
      {label}
      {icon}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  size: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
};

export default Button;
