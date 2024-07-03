import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./../../components/login/Login.jsx";
import jwtDecode from "jwt-decode";

const Auth = (props) => {
  const [authenticated, setAuthenticated] = useState(true);
  // const [decoded, setDecoded] = useState({});
  // const dispatch = useDispatch();
  // const totalNotification = useSelector((state) => state.testRedux.specification)
  // const notificationData = useSelector()

  const [roleAuthenticated, setRoleAuthenticated] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    var data = sessionStorage.getItem("imsToken");
    if (data == undefined) {
      setAuthenticated(false);
      setRoleAuthenticated(false);
    } else {
      var decodedData = jwtDecode(data);
      console.log(decodedData);
      if (decodedData.RoleId == 4) {
        navigate("/home");
      }
    }
  }, []);

  if (authenticated && roleAuthenticated) {
    return <div> {props.child}</div>;
  } else if (authenticated) {
    return (
      <div className="d-flex justify-content-center">
        <h3>Not Authenticated</h3>
      </div>
    );
  } else {
    return (
      <span>
        <Login />
      </span>
    );
  }
};

export default Auth;
