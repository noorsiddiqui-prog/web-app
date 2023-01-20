import React from "react";
import WebCam from "../../components/WebCam";
import { useRef, useEffect, useState } from "react";
import Header from "../../components/Header";
import SignUp from "../../components/SignUp/Signup";
import Login from "./../../components/Login/Login";

const UserLogin = () => {
  const webcamRef = useRef(null);
  const [url, setUrl] = React.useState(null);

  const capturePhoto = React.useCallback(async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setUrl(imageSrc);
  }, [webcamRef]);

  const [isLoggedIn, setisLoggedIn] = useState(false);

  console.log("true", isLoggedIn);

  return (
    <div>
      <Header
        hasLogoutBtn
        capturePhoto={capturePhoto}
        isLoggedIn={isLoggedIn}
        setisLoggedIn={setisLoggedIn}
      />
      <WebCam url={url} setUrl={setUrl} webcamRef={webcamRef} />
      <Login
        capturePhoto={capturePhoto}
        url={url}
        setisLoggedIn={setisLoggedIn}
      />
    </div>
  );
};

export default UserLogin;
