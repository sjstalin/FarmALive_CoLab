import React, { useEffect, useState } from "react";
import Axios from "axios";

import Farmerprofile from "../farmer/Profile";
import Machineprofile from "../transport/Profile";
import Buyerprofile from "../buyer/Profile";

export default function Main() {
  const [role, setRole] = useState("");

  Axios.defaults.withCredentials = true;
  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn == true) {
        setRole(response.data.user[0].role);
      }
    });
  }, []);

  return (
    <div>
      {role == "farmer" && <Farmerprofile />}
      {role == "machine" && <Machineprofile />}
      {role == "buyer" && <Buyerprofile />}
    </div>
  );
}
