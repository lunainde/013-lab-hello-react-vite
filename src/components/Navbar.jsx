import logo from "./../assets/logo.png";
import menu from "./../assets/menu.png";

function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} />
      <img src={menu} />
    </div>
  );
}
export default Navbar;
