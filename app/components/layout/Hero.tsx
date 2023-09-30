const Hero = () => {
  return (
    <div
      className="flex flex-col items-center gap-12 py-32 bg-cover w-full"
      style={{
        height: "413px",
        backgroundImage: "url(../../../souvlucky2.png)",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <h1
        className="text-center text-blue-500 font-sedgwick"
        style={{
          fontSize: "100px",
          fontWeight: 400,
          fontStyle: "normal",
        }}
      >
        Taste of Greece
      </h1>
    </div>
  );
};

export default Hero;
