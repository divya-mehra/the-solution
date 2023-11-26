const ProductTransition = ({ props }) => {
  return (
    <div
      className="full-width static-hero flex-column"
      style={{
        backgroundImage: `url('/assets/look_one.png')`,
        backgroundSize: "cover",
      }}
    >
      <div className="hero-text-title centered">Reset with CC LOOK-1</div>
      <h6 className="centered">Or as we like to call her, Clementine</h6>
    </div>
  );
};

export default ProductTransition;
