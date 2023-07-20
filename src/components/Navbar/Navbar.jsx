import { useContext } from "react";
import { DefaultContext } from "@/state";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const { state, dispatch } = useContext(DefaultContext);

  const onHandleLogout = () => dispatch({ type: "SET_LOGOUT" });

  return (
    <div className={styles.Navbar}>
      <p>{state.username}</p>
      {state.username && <p onClick={onHandleLogout}>EXIT</p>}
    </div>
  );
};

export default Navbar;
