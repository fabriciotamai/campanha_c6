import { useEffect, useState } from "react";
import PuffLoader from "react-spinners/PuffLoader";

const GatewayPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [isLoading]);

  const handleIframeLoad = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="relative">

      {isLoading && (
        <div className="absolute inset-0 flex items-center min-h-screen justify-center bg-[#212121] z-10 pb-16">
          <PuffLoader color="#F4F4F4" size={90} />
        </div>
      )}
      <div className="w-full h-[calc(100vh-100px)]">
        <iframe
          src="https://go.disruptybr.com.br/djtek"
          title="Gateway Disrupt"
          className="w-full h-full border-none pt-20"
          onLoad={handleIframeLoad}
        />
      </div>
    </div>
  );
};

export default GatewayPage;
