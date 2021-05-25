import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title }) => {
  return (
    <header className="header">
      {/* <h1 style={{ color: 'red', backgroundColor: 'black' }}>{title}</h1> */}
      {/* or */}
      {/* <h1 style={headingStyle}>{title}</h1> */}

      <h1>{title}</h1>
      <Button color="green" text="Add" />
    </header>
  );
};

//passing in props from App.js as in <Header title="Hello" /> would overwrite this
//title with "Hello"
Header.defaultProps = {
  title: 'Task Tracker',
};

//Passing in title props other than a string will still render but the console will show a warning
Header.propTypes = {
  title: PropTypes.string,
  //title: PropTypes.string.isRequired,
};

//couple ways of adding CSS inline.  This way below or above.
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// };

export default Header;
