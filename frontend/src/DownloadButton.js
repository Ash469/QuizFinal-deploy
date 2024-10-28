import React, { useState } from "react";
import "./DownloadButton.css";

const DownloadButton = () => {
  const [isWorking, setIsWorking] = useState(false);
  const [buttonText, setButtonText] = useState("Download");

  const handleDownloadClick = () => {
    if (!isWorking) {
      setIsWorking(true);
      setButtonText("Downloading…");

     
      const duration = getMSFromProperty("--dur", ":root");

      setTimeout(() => {
        setButtonText("Completed!");
      }, duration * 0.9);

      setTimeout(() => {
        setIsWorking(false);
        setButtonText("Download");
      }, duration + 1000);
    }
  };

  const getMSFromProperty = (property, selector) => {
    const computedStyle = window.getComputedStyle(document.querySelector(selector));
    const duration = computedStyle.getPropertyValue(property);
    const msLabelPos = duration.indexOf("ms");
    const sLabelPos = duration.indexOf("s");

    if (msLabelPos > -1) return parseFloat(duration.substr(0, msLabelPos));
    if (sLabelPos > -1) return parseFloat(duration.substr(0, sLabelPos)) * 1000;
    return 0;
  };

  return (
    <button
      type="button"
      data-dl
      onClick={handleDownloadClick}
      className={isWorking ? "dl-working" : ""}
      disabled={isWorking}
    >
      <span className="dl-icon"></span>
      <span>{buttonText}</span>
    </button>
  );
};

export default DownloadButton;
