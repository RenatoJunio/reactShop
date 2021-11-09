import classes from "./HeaderLoginButton.module.css";

const HeaderLoginButton = (props) => {
  return (
    <button className={classes.button}>
      <span>Login</span>
    </button>
  );
};

export default HeaderLoginButton;
