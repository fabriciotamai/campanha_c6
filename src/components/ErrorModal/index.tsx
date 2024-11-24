import { useEffect, useState } from "react";
import IconWarning from "../../assets/c6/iconWarning.svg";
import { useAppContext } from "../../context/AppContext";

const ErrorModal = () => {
  const { isModalOpenError, setIsModalOpenError, textError } = useAppContext();
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    let interval: number | undefined;

    if (isModalOpenError) {
      setProgress(0); //

      interval = window.setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(closeModal, 500);
            return 100;
          }
          return prev + 2;
        });
      }, 100);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isModalOpenError]);

  const closeModal = () => {
    setIsModalOpenError(false);
    setProgress(0);
  };


  if (!isModalOpenError) return null;

  return (
    <div
      className="antialiased"
      style={{
        position: "fixed",
        top: "10%",
        left: "50%",
        transform: "translate(-50%, -20%)",
        width: "400px",
        background: "#212121",
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        padding: "0px 20px",
        textAlign: "left",
        color: "#fff",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          paddingTop: "30px",
          paddingBottom: '20px',
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <img src={IconWarning} alt="Warning Icon" />
        <p
          className="font-c6display-light  "
          style={{ fontSize: "16px", textAlign: 'left', marginLeft: '15px' }}
        >

          {textError}
        </p>
      </div>



      {/* Barra de progresso */}
      <div
        style={{
          position: "absolute",
          bottom: "0",
          left: "0",
          width: "100%",
          height: "4px",
          background: "#555",
          borderRadius: "0 0 10px 10px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            background: "#FF6F61",
            transition: "width 0.3s ease-in-out",
          }}
        />
      </div>
    </div>
  );
};

export default ErrorModal;
