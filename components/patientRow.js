import { useContext } from "react";
import navValues from "../helpers/navValues";
import { navigationContext } from "./app";

const PatientRow = ({ patient }) => {
  const { navigate } = useContext(navigationContext);
  return (
    <tr onClick={() => navigate(navValues.patient, patient)}>
      <td>{patient.firstname}</td>
      <td>{patient.surname}</td>
      <td>{patient.phone}</td>
    </tr>
  );
};

export default PatientRow;
