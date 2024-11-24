import { useState } from "react";
import PuffLoader from "react-spinners/PuffLoader";

const GatewayPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative">

      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#212121] z-10">
          <PuffLoader color="#F4F4F4" size={60} />
        </div>
      )}
      <div className="w-full h-[calc(100vh-100px)] mt-4">
        <iframe
          src="https://go.disruptybr.com.br/djtek"
          title="Gateway Disrupt"
          className="w-full h-full border-none"
          onLoad={handleIframeLoad}
        />
      </div>
    </div>
  );
};

export default GatewayPage;
