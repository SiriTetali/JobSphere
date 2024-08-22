import logo from "../assets/images/logo.svg";
import Wrapper from "../assets/wrappers/Navbar";

const Logo = () => {
  return (
    <div className="LOGO-DIV">
      <img src={logo} alt="JobSphere" className="logo" />
      {/* <p className="JobSphere">JobSphere</p> */}
    </div>
  )
};
export default Logo;
