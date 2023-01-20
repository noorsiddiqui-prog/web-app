import React from "react";
import WebCam from "../../components/WebCam";
import { useRef, useEffect, useState } from "react";
import SignUp from "../../components/SignUp/Signup";
import Header from "./../../components/Header/index";

const UserSignup = () => {
  const [hasLoginBtn, setHasLoginBtn] = useState(true);

  return (
    <div>
      <Header isLoggedIn={false} hasLoginBtn={hasLoginBtn} />

      <SignUp setHasLoginBtn={setHasLoginBtn} />
    </div>
  );
};

export default UserSignup;
