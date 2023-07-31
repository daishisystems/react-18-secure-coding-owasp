import { useContext } from "react";
import navValues from "../helpers/navValues";
import { navigationContext } from "./app";
import { logo } from "./banner.module.css";

const subtitleStyle = {
  fontStyle: "bold",
  fontSize: "x-large",
  color: "blue",
};

const Banner = ({ children }) => {
  const { navigate } = useContext(navigationContext);
  return (
    <header className="row mb-4">
      <div className="col-5">
        <img
          src="./GloboLogo.png"
          alt="logo"
          className={logo}
          onClick={() => navigate(navValues.patient)}
        />
      </div>
      <div className="col-7 mt-5" style={subtitleStyle}>
        {children}
      </div>
    </header>
  );
};

export default Banner;
