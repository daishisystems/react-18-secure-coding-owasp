import { useContext } from "react";

const Patient = () => {
  const { param: patient } = useContext(navigationContext);
  return (
    <div className="row">
      <div className="col-6">
        <div className="row">          
        </div>
      </div>
      <div className="col-6">
        <div className="row mt-2">
          <h5 className="col-12">{patient.firstname}</h5>
        </div>
        <div className="row">
          <h3 className="col-12">{patient.surname}</h3>
        </div>
        <div className="row">
          <h2 className="themeFontColor col-12">
            {currencyFormatter.format(patient.phone)}
          </h2>
        </div>        
      </div>
    </div>
  );
};

export default Patient;
