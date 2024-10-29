import PropTypes from "prop-types";

function Card({ children }) {
  return (
    <div className="flex flex-col items-center bg-white/30 md:p-6 p-3 border-white/20 border-2 shadow-lg hover:shadow-2xl">
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Card;
