import PropTypes from "prop-types";

function Card({ children: cardChildren }) {
  return (
    <div className="p-4">
      <div className="flex flex-col p-6 rounded-xl shadow-md w-max shadow-slate-800">
        {cardChildren}
      </div>
    </div>
  );
}


Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
