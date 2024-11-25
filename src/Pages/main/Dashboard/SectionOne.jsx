import axios from "axios";
import {useState, useEffect} from "react";
import ProdCard from "./ProdCard";

const  SectionOne  = () => {
    const [products, setProducts] = useState(null);

    useEffect(() =>{
        const fetchProducts = async () => {
            const res = await axios.get ("https://fakestoreapi.com/products");
            setProducts(res.data);
            console.log(res.data)
        };

        fetchProducts()
    }, []);

    return(
        <>
        <h2 className="text-secondary font-playfair font-bold text-3xl text-center my-10">
            Products
        </h2>
        <div className="bg-qiunary h-[500px] mb-10 overflow-auto flex flex-wrap gap-2 p-10 justify-center items-center">
            {products && products.map((product, index) =>(<ProdCard key={index} {...product} />))}
        </div>
        </>
    );
}
 
export default  SectionOne;