import PropTypes from "prop-types"
import Button from "./Button"
// impt

//rafce
const Header = ({ title, showAddTask, buttonState }) => {
  return (
    <div>
      <header className="header">
        <h1> {title}</h1>
        <Button
          onClick={showAddTask}
          color={buttonState ? "red" : "green"}
          text={buttonState ? "Close" : "Add"}
        />
      </header>
    </div>
  )
}

Header.defaulProps = {
  title: "Task Tracker",
}

Header.propTypes = {
  title: PropTypes.string,
  // now only strings are accepted but it will render with a console error
}

// CSS in JS
const headngStyle = {
  color: "red",
  backgroundColor: "black",
}

export default Header

/*
const Header = ({title}) => {
  //we just got the title from props cz we dont need more params
  return (
    <div>
      <header>
        <h1>{title}</h1>
      </header>
    </div>
  )
}
*/
