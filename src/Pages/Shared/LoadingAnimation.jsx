const LoadingAnimation = () => {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin -rotate-90 rounded-full h-28 w-28">
          <img
            src="https://i.ibb.co/G0pFNsq/logo-1.png"
            alt="Loading"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <p className="absolute pt-36">Loading...</p>
      </div>
    );
  };
  
  export default LoadingAnimation;
  