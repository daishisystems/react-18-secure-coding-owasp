import { useEffect, useState } from "react";
import useGetRequest from "./useGetRequest";

const usePatients = () => {
  const [patients, setPatients] = useState([]);
  const { get, loadingState } = useGetRequest("/api/patients");

  useEffect(() => {
    const fetchPatients = async () => {
      const patients = await get();
      setPatients(patients);
    };
    fetchPatients();
  }, [get]);

  return { patients, setPatients, loadingState };
};

export default usePatients;
