import React, { useRef, useEffect } from "react";
import Webcam from "react-webcam";
import { Box } from "@mui/material";

const videoConstraints = {
  width: 140,
  facingMode: "environment",
};

const WebCam = ({ url,  webcamRef }) => {

  console.log("url", url);

  const onUserMedia = (e) => {
    console.log(e);
  };

  return (
    <>
      <Box sx={{ pr: 4, pt: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "right" }}>
          <Webcam
            ref={webcamRef}
            audio={false}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
            onUserMedia={onUserMedia}
          />
        </Box>
        {/* <button onClick={capturePhoto}>Capture</button>
      <button onClick={() => setUrl(null)}>Refresh</button> */}
        {url && (
          <Box sx={{ display: "flex", justifyContent: "right", mt: "20px" }}>
            <img src={url} alt="Screenshot" width="100px" height="100px" />
          </Box>
        )}
      </Box>
    </>
  );
};

export default WebCam;
