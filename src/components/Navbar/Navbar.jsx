import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <ul className={styles.Navbar}>
      <li className="Home">Home</li>
      <li className="Contacts">Contacts</li>
      <li className="Profile">Profile</li>
    </ul>
  );
};

export default Navbar;
