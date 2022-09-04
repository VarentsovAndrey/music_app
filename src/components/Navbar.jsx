import React from "react";
import { connect } from "react-redux";
import { setIsLibrary } from "../actions";

const Navbar = ({ isLibrary, setIsLibrary, isDarkMode }) => {
  return (
    <div className="navbar">
      <button
        onClick={() => setIsLibrary(!isLibrary)}
        className={`${isDarkMode ? "dark-btn" : "light-btn"}`}
      >
        Список треков
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { isLibrary: state.isLibrary, isDarkMode: state.isDarkMode };
};

export default connect(mapStateToProps, { setIsLibrary })(Navbar);
