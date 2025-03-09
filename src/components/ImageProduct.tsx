const ImageProduct = ({link}:{link:string})=>{
    return (
      
        <div className="imgProduct">
          <img src={link} alt="Product" />
        </div>
      
    );
};  
export default ImageProduct;