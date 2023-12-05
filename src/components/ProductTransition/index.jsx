import "./index.scss";

const ProductTransition = ({ props }) => {
  // defined by light orange color

  let circle;

  // listen for the scroll

  const updateCircles = () => {
    const newCircles = () => {};

    const scrollPosition = window.scrollY;
  };

  return (
    <div
      className="full-width relative-hero flex-column"
      //   style={{
      //     backgroundImage: `url('/assets/look_one.png')`,
      //     backgroundSize: "cover",
      //   }}
    >
      <div className="hero-text-title show centered">Reset with CC LOOK-1</div>
      <h6 className="centered">Or as we like to call her, Clementine</h6>
      <svg className="svg-hero-background" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50%" cy="100%" r="100%" fill="#D76F0030"></circle>
        <circle cx="50%" cy="100%" r="80%" fill="#D76F0030"></circle>
        <circle cx="50%" cy="100%" r="60%" fill="#D76F0030"></circle>
        <circle cx="50%" cy="100%" r="40%" fill="#D76F0030"></circle>
        <circle cx="50%" cy="100%" r="20%" fill="#D76F0030"></circle>
        <circle cx="50%" cy="100%" r="10%" fill="#D76F0030"></circle>
      </svg>
    </div>
  );
};

export default ProductTransition;
