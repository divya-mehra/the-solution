const ProductDetail = ({ title, code, description, ingredients, bestFor }) => {
  return (
      <div >
        <h3>{title}</h3>
        <h6>{code}</h6>
        <p>{description}</p>
      </div>
      
  );
};

export default ProductDetail;
