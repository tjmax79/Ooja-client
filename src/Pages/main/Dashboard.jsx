import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import SectionOne from "./Dashboard/SectionOne";
import MyProductSec from "./Dashboard/MyProductSec";




function Dashboard() {
  const {state:{user}}= useContext(AppContext)

  const {username} = user.user

  return (
    <div>
    <div className="flex flex-col-reverse md:flex-row items-center justify-between bg-tertiary rounded-lg shadow-md">
        <div className="p-10">
            <h2 className="font-iceberg text-5xl text-secondary mb-5">Hello,{username}</h2>
            <p className="text-xl">
                Begin your journey at Ooja, buy and sell at your comfort. we are here to make your experience worthwhile.Sell your products and buy from the best sellers...
            </p>
            <div className="mt-10">
           <button className=" py-3 mr-2 px-10 rounded-lg font-bold text-quinary bg-primary transition-all duration-150 ease-linear hover:bg-secondary">Buy</button>
           <button className="py-3 ml-2 px-10 rounded-lg font-bold text-quinary bg-secondary transition-all duration-150 ease-linear hover:bg-primary">Sell</button>
                
            </div>

        </div>
        <img src="/images/istockphoto-1422023484-1024x1024-removebg-preview.png" alt="a lady holding a phone" />
        <div>
        
 
        </div>
       
    </div>
    <SectionOne/>
    <MyProductSec/>
    </div>
  )
}

export default Dashboard