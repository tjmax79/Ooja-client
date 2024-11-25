import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className=" min-h-dvh px-20">
            <header className="flex justify-between items-center">
                <div className="flex justify-center items-center">
                    <img src="/svgs/buy.svg" alt="Ooja logo" width={100} />{" "}
                    <h2 className="font-iceberg text-5xl">Ooja</h2>
                </div>
                <nav>
                    <ul className="flex justify-center items-center space-x-2">
                        <li>
                            <Link to="/login" className="bg-primary text-secondary py-2 px-4 rounded-md font-bold">Log In</Link>
                        </li>
                       
                        <li>
                        <Link to="/signup" className="bg-lime-400 text-secondary py-2 px-4 rounded-md font-bold">SignUp</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <div className="flex flex-col items-center justify-center min-h-[500px] relative"> 
                <img src="/svgs/targeting.svg" alt="Ooja" width={75} className="absolute bottom-[500px] bo right-[1100px] rorate-12 -z-10" />
                   <h1 className="font-extrabold text-center font-iceberg text-7xl">
                     Welcome to the best place to buy and sell your favourite items.<span className="oj">Ooja</span> is your one stop<span className="oj"> market place</span>

                </h1>
                <p className="text-center text-slate-800 text-lg my-10">
                    We also offer delivery services, so you can get your items as soon as posssible. Ooja serves everyone around the country. We sell varieties of everything from house hold items to food and groceries and every other needs...
                    </p> 
                    <Link to="/signup" className=" bg-primary text-tertiary py-2 px-4 rounded-md font-bold">Get Started</Link>

                    <img src="/svgs/usb.svg" alt="Ooja" width={100} className="absolute bottom-0 right-0 rotate-6" />
            </div>
        </div>
    );
}

export default Hero;