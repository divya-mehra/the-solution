import './index.scss'

const ProductTransition = ({ props }) => {

    // defined by light orange color

    let orange = "#D76F00";

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
    <circle cx="50%" cy="80%" r="100%" fill={orange} ></circle>
      </svg>
    </div>
  );
};

export default ProductTransition;
