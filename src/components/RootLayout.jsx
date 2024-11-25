import Footer from "./Footer"
import Navigation from "./Navigation";
import { Outlet } from "react-router-dom";


const RootLayout = () => {
    return ( 
        <>
        <Navigation/>
        <main className="min-h-dvh px-5">
            <Outlet/>

        </main>
        <Footer/>
        </>
     );
}
 
export default RootLayout ;