// import React from 'react'
// import WebCam from '../../components/WebCam'
// import {useRef, useEffect, useState } from "react";
// import Header from '../../components/Header';
// import SignUp from '../../components/SignUp/Signup';
// import Login from './../../components/Login/Login';

// const User = () => {

//   const webcamRef = useRef(null);
//   const [url, setUrl] = React.useState(null);
 
//   const capturePhoto = React.useCallback(async () => {
//     const imageSrc = webcamRef.current.getScreenshot();
//     setUrl(imageSrc);
// }, [webcamRef]);

// const [isLoggedIn, setisLoggedIn] = useState(false)

// // useEffect(() => {
// //   setUserLoggedIn(localStorage.getItem('user'))

// // }, [userLoggedIn])


// console.log("true", isLoggedIn);
// // useEffect(()=>{
// //   if(localStorage.getItem('user')){
// //     console.log("it is her")
// //     setisLoggedIn(true)
// //   }
// // },[])

//   return (
//     <div>
//       <Header hasLogoutBtn capturePhoto={capturePhoto} isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn}/>
//       <WebCam  url = {url} setUrl={setUrl} webcamRef={webcamRef} />

//       <Login capturePhoto={capturePhoto} url={url} setisLoggedIn={setisLoggedIn}/>
//     </div>
//   )
// }

// export default User