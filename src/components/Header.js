import PropTypes from 'prop-types';


const Header = ({title}) => {
  return (
  <div>
      <h1>{title}</h1>
  </div>
  );
};

Header.defaultProps = {
    title: "Your Header title goes here."
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header;
