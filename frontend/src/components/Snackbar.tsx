import React, { useState, useEffect } from "react";

interface SnackbarProps {
  message: string;
  duration?: number; // Duration in milliseconds
  onClose?: () => void;
  mode?: "warning" | "success" | "error"; // Added mode property
}

const Snackbar: React.FC<SnackbarProps> = ({
  message,
  duration = 3000,
  onClose,
  mode = "success", // Default mode is 'success'
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onClose) onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [message, duration, onClose]);

  if (!isVisible) return null;

  // Determine the styling based on the mode
  const modeClasses = {
    warning: "bg-yellow-400 text-black",
    success: "bg-green-500 text-white",
    error: "bg-red-500 text-white",
  };

  const selectedModeClass = modeClasses[mode] || modeClasses.success;

  return (
    <div
      className={`fixed left-1/2 transform -translate-x-1/2 bottom-4 px-6 py-3 rounded-lg shadow-md ${selectedModeClass}`}
    >
      {message}
      <button
        onClick={() => {
          setIsVisible(false);
          if (onClose) onClose();
        }}
        className="text-lg ml-4"
      >
        &#x2715;
      </button>
    </div>
  );
};

export default Snackbar;
