import PropTypes from "prop-types";
import Button from "./Button";


const Header = ({ title, onAddClick }) => {
  

  return (
    <div>
      <header className="header">
        <h1>{title}</h1>
        <Button text="Add" color="green" onClick={onAddClick}></Button>
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
  onAddClick: PropTypes.func.isRequired
};

export default Header;
