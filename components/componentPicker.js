import navValues from "../helpers/navValues";
import Patient from "./patient";
import PatientList from "./patientList";

const ComponentPicker = ({ currentNavLocation }) => {
  switch (currentNavLocation) {
    case navValues.patient:
      return <PatientList />;
    case navValues.patient:
      return <Patient />;
    default:
      return (
        <h3>
          No component for navigation value
          {currentNavLocation} found
        </h3>
      );
  }
};

export default ComponentPicker;
