import styles from "../product.module.css";

const StoryStart = ({ description_two }) => {
  return (
    <>
      <div className={`${styles.productStart} ${styles.productFullWidth} `}>
        {description_two.map((para) => (
          <p
            style={{
              color: "#041c04",
              fontWeight: 600,
              fontSize: 18,
              // fontFamily: "Optima"
            }}
          >
            {para}
          </p>
        ))}
      </div>
    </>
  );
};

export default StoryStart;
