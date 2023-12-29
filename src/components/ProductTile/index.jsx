import './index.scss'

const ProductTile = ({ title, subtitle, description }) => {
  return (
    <div>
      <h3>{title}</h3>
      <h6>{subtitle}</h6>
      <div className="tile-text">
      {description.map((p) => (
        <p> {p}</p>
      ))}
      </div>
    </div>
  );
};

export default ProductTile;
