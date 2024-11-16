import classes from "./button.module.css";

export default function Button({ children, isDisabled, ...props }) {
  return (
    <button className={isDisabled ? classes.DisabledButton : classes.Button}>
      {children}
    </button>
  );
}