import PropTypes from "prop-types";
import bg from "../assets/bg.jpg";

function Layout({ children }) {
  return (
    <div
      className="min-h-screen w-full flex bg-black/90 justify-center items-center bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
