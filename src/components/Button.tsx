const Button = ({ text }: { text: string }) => {
  return (
    <div className="canpara">
      <a type="submit" href="#">
        <div>
          <p className="para">{text}</p>
        </div>
      </a>
    </div>
  );
};
export default Button;
//import { Product } from '../types/product';
// export default function ProductProps(props:Product) { 
//type Product = {data: Product};

//export default function Product({data:{title, image, rating,price,salePrice}}:ProductCProps) {
// if(data.stock === 0){
//   return <div>Out of stock</div>: Neu het hang
//}
// return (
//   <div className="product"> render ra neu con hang
//     <img src={image} alt={title} />)}


// export default function Product({name, price, image}:Product) {
//   return (
//     <div className="product">
//       <img src={props.image} alt={props.name} />
//       <h3>{props.name}</h3>
//       <h3>{title}</h3>
//       <p>{props.price}</p> 
//     </div>
//   );
// };

//const obj = {x: 1, y: 2};
//const {x, y} = obj; dessctructuring object


//export default function Product({name, price, image}:Product) {
//  return ( 
//    <div className="product">
//     {data.salePrice ? <span>Sale<span>}
//      <img src={image} alt={name} />
//      <h3>{name}</h3>
//      <p>{price}</p>
//    {data.rating>0 && <div className="product-rating">{data.rating}</div>} Neu rating >0 thi render ra con neu khong thi khong hien thi
//     {data.salePrice ? (
//          <div className="product-sale">
//            <p>{data.price}</p>)
//            <p>{data.salePrice}</p>
//          </div>) : (
//              <div className="product-price">$data.price</div> //Neu co salePrice thi render ra con neu khong thi render ra price
//          )}
//    </div>
//  );
//};