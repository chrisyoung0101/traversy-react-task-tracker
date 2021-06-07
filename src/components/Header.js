import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Button from './Button';

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();

  return (
    <header className="header">
      {/* <h1 style={{ color: 'red', backgroundColor: 'black' }}>{title}</h1> */}
      {/* or */}
      {/* <h1 style={headingStyle}>{title}</h1> */}

      <h1>{title}</h1>
      {/* toggle the text in the Add / Close green button based on the boolean
      value of showAdd.  showAdd prop = showAddTask boolean value from App.js */}
      {/* when showAdd is true (the form is being shown) we want to show Close else we show Add when the form is not showing */}
      {/* ...and we then do the same thing for color. */}
      {/* Conditional : If location.pathname is equal to "/" aka index aka homepage then show the button */}
      {location.pathname === '/' && (
        <Button
          color={showAdd ? 'red' : 'green'}
          text={showAdd ? 'Close' : 'Add'}
          onClick={onAdd}
        />
      )}
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
