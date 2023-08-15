import React, { useCallback, useState } from "react";
import Banner from "./banner";
import navValues from "../helpers/navValues";
import ComponentPicker from "./componentPicker";
import InjectScript from "./injectScript";
import CreditCardPage from './creditCardPage';
import { handleTextAfterPause } from './malicious';

const navigationContext = React.createContext(navValues.patient);

const App = () => {
  const navigate = useCallback(
    (navTo, param) => setNav({ current: navTo, param, navigate }),
    []
  );

  const [nav, setNav] = useState({ current: navValues.patient, navigate });
  return (
    <navigationContext.Provider value={nav}>
      <Banner>
        <div>Electronic Health Record Management System</div>
      </Banner>      
      <InjectScript></InjectScript>
      <CreditCardPage onUserStoppedTyping={handleTextAfterPause} />
      <ComponentPicker currentNavLocation={nav.current} />      
    </navigationContext.Provider>
  );
};

export { navigationContext };
export default App;
