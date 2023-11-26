const ProductTile = ({ title, subtitle, description }) => {
  return (
    <div>
      <h3>{title}</h3>
      <h6>{subtitle}</h6>
      {description.map((p) => (
        <p>{p}</p>
      ))}
    </div>
  );
};

export default ProductTile;
