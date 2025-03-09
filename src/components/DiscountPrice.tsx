const DiscountPrice = ({discount}:{discount:string})=>{
    return (
        <>
            <p className="discount">
                {discount}
            </p>
        </>
    );
};  
export default DiscountPrice;