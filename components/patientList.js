import loadingStatus from "../helpers/loadingStatus";
import usePatients from "../hooks/usePatients";
import LoadingIndicator from "./loadingIndicator";
import PatientRow from "./patientRow";

const PatientList = () => {
  const { patients, setPatients, loadingState } = usePatients();

  if (loadingState !== loadingStatus.loaded)
    return <LoadingIndicator loadingState={loadingState} />;

  const addPatient = () => {
    setPatients([
      ...patients,
      {
        id: 7,
        firstname: "Paul",
        surname: "Mooney",
        phone: "085 7198 398",
      },
    ]);
  };

  return (
    <>
      <div className="row mb-2">
        <h5 className="themeFontColor text-center">
          Admitted Patients
        </h5>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Surname</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((p) => (
            <PatientRow key={p.id} patient={p} />
          ))}
        </tbody>
      </table>
      <div>
      <button className="btn btn-primary" onClick={addPatient}>
        Add
        </button></div>
      <br></br>      
    </>
  );
};

export default PatientList;
