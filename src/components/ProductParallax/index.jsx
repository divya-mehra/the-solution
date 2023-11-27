import "./index.scss"
import ProductTransition from "../ProductTransition";

const ProductParallax = ({transition, hero, story}) => {
    return (
        <>
        {transition}
    <div style={{ position: "relative", height: "100vh", color: "black"}}> {hero} </div>
    </>);
}
 
export default ProductParallax;