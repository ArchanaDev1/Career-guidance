import React, { useEffect, useState } from "react";

const Popup = ({ message = "Submitted", duration = 3000, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Automatically hide the popup after `duration` milliseconds
    const timer = setTimeout(() => {
      setVisible(false);
      if (onClose) onClose();
    }, duration);

    // Cleanup function to clear the timeout
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    visible && (
      <div className="popup">
        <div className="popup-message">{message}</div>
      </div>
    )
  );
};

export default Popup;
