import React, { useEffect, useState } from "react";
import Axios from "axios";

import Farmer from "/Users/joshuasatlin/Documents/GitHub/untitled folder/farmalive/src/components/Auth/farmer.js";
import Machine from "../../components/Auth/Machine.js";
import Buyer from "../../components/Auth/Buyer.js";

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
      {role == "farmer" && <Farmer />}
      {role == "machine" && <Machine />}
      {role == "buyer" && <Buyer />}
    </div>
  );
}
