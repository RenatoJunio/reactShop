import { useRef, useState } from "react";

import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isPostal = (value) => /^\d{4}(-\d{3})?$/.test(value);

const Checkout = (props) => {
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    street: true,
    city: true,
    postal: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostalIsValid = isPostal(enteredPostal);
    const enteredCityIsValid = !isEmpty(enteredCity);

    setFormInputValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postal: enteredPostalIsValid,
    });

    const formIsValid =
      enteredCityIsValid &&
      enteredNameIsValid &&
      enteredPostalIsValid &&
      enteredStreetIsValid;

    if (!formIsValid) return;

    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      postal: enteredPostal,
      city: enteredCity,
    });
  };

  const nameControlClasses = `${classes.control} 
  ${formInputValidity.name ? "" : classes.invalid}`;

  const streetControlClasses = `${classes.control} 
  ${formInputValidity.street ? "" : classes.invalid}`;

  const postalControlClasses = `${classes.control} 
  ${formInputValidity.postal ? "" : classes.invalid}`;

  const cityControlClasses = `${classes.control} 
  ${formInputValidity.city ? "" : classes.invalid}`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputValidity.name && (
          <span className={classes.errorMessage}>
            Please enter a valid name!
          </span>
        )}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputValidity.street && (
          <span className={classes.errorMessage}>
            Please enter a valid street name!
          </span>
        )}
      </div>
      <div className={postalControlClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalInputRef} />
        {!formInputValidity.postal && (
          <span className={classes.errorMessage}>
            Please enter a valid postal code! (xxxx-xxx)
          </span>
        )}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputValidity.city && (
          <span className={classes.errorMessage}>
            Please enter a valid city name!
          </span>
        )}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
