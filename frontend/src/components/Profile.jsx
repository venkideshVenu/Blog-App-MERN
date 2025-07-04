import axios from "axios";
import { useEffect, useState } from "react";
import { API_BASE_URL, ENDPOINTS } from "../constants/apiEndPoints";

export default function Profile() {
  const [user, setUser] = useState({});

  const getUser = async () => {
    const response = await axios.get(`${API_BASE_URL}${ENDPOINTS.GETUSER}`, {
      headers: {
        token: localStorage.getItem("token"),
      },
    });
console.log(response)
    setUser(response.data.user);
  };

  useEffect(() => {
    getUser();
  }, []);

  return <div>{JSON.stringify(user)}</div>;
}
