import "./index.scss";

const ProductParallax = ({ transition, story }) => {
  return (
    <div style={{ overflow: "hidden" }}>
      <div>{transition}</div>
      <div>{story}</div>
    </div>
  );
};

export default ProductParallax;
