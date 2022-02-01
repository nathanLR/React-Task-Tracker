import PropTypes from "prop-types";
import Button from "./Button";
import { useLocation } from "react-router-dom";

const Header = ({ title, onAddClick, showAdd }) => {
  const location = useLocation();
  return (

    <div>
      <header className="header">
        <h1>{title}</h1>

        {location.pathname === "/" && <Button
          text={showAdd ? "Close" : "Add"}
          color={showAdd ? "red" : "green"}
          onClick={onAddClick}
        ></Button>}
      </header>
    </div>
  );
};

//style in JS or inline : <h1 style={{color: "blue"}}>
// const titleStyle = {
//     color: 'blue',
// }

Header.defaultProps = {
  title: "Your Header title goes here.",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  onAddClick: PropTypes.func.isRequired,
};

export default Header;
