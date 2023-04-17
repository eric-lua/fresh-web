const Cube = () => (
  <div
    className={`w-10 h-10 bg-blue-500 rounded-md animate-spin`}
    style={{
      transformStyle: "preserve-3d",
      animationDuration: "2s",
      animationTimingFunction: "linear",
      animationIterationCount: "infinite",
    }}
  >
    <div
      className={`w-full h-full bg-blue-500 rounded-md absolute`}
      style={{
        transform: "rotateX(45deg) rotateY(45deg) translateZ(5px)",
      }}
    ></div>
    <div
      className={`w-full h-full bg-blue-500 rounded-md absolute`}
      style={{
        transform: "rotateX(45deg) rotateY(-45deg) translateZ(5px)",
      }}
    ></div>
    <div
      className={`w-full h-full bg-blue-500 rounded-md absolute`}
      style={{
        transform: "rotateX(-45deg) rotateY(45deg) translateZ(5px)",
      }}
    ></div>
    <div
      className={`w-full h-full bg-blue-500 rounded-md absolute`}
      style={{
        transform: "rotateX(-45deg) rotateY(-45deg) translateZ(5px)",
      }}
    ></div>
  </div>
);

export default Cube;
