import axios from "axios"
import { useEffect, useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import ProdCard from "./ProdCard";


const  MyProductSec = () => {

    const [myProduct, setMyProduct] = useState([]);

    useEffect(() => {
        
        const fetchMyProduct = async () =>{
            try{
            const response = await axios.get("https://fakestoreapi.com/products");
            const data = await response.data;
            console.log(data, "mine");
            setMyProduct(data);
        } catch (error){
            console.log(error)
            }}
        fetchMyProduct()
    }, [])
   
   
   
    return ( 
        <div className="h-[500px] overflow-auto w-full relative bg-quinary scroll-m-2">
            <div className="top-0 sticky text-center bg-secondary py-2 flex items-center justify-center">
           <h2 className="text-2xl font-playfair font- bold text-primary mr-3">
            My Products
           </h2>
           <FaPlusCircle className="text-2xl text-primary" />
        </div>

        <div className="flex gap-2 flex-wrap items-center justify-center mt-5">
            {myProduct.map((product, index) => (
               <ProdCard key = {index} {...product} />
            ))}
        </div>
        </div>
     );
}
 
export default MyProductSec;