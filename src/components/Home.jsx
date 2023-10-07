import { useContext, useEffect } from "react";
import Logo from "../assets/google-logo.png";
import HomeHeader from "./HomeHeader";
import SearchInput from "./SearchInput";
import Footer from "./Footer";
import { Context } from "../utils/ContextApi";

const Home = () => {

    const { setMode } = useContext(Context);

    useEffect(() => {
        setMode("light");
    }, [])

    return (
        <div className="flex flex-col h-screen">
            <HomeHeader />

            <main className="grow flex justify-center">
                <div className="w-full px-5 flex flex-col items-center pt-[25vh]">
                    <img className="w-[172px] md:w-[252px] mb-6" src={Logo} alt="app-logo" />
                    <SearchInput />
                    <div className="flex gap-2 text-[#3c4043] mt-8">
                        <button className="h-9 px-4 bg-[#f8f9fa] hover:bg-[#ececeb] transition-all duration-200 text-sm rounded-md border border-[#f8f9fa] hover:border-[#dadce0]">Google search</button>
                        <button className="h-9 px-4 bg-[#f8f9fa] hover:bg-[#ececeb] transition-all duration-200 text-sm rounded-md border border-[#f8f9fa] hover:border-[#dadce0]">I'm feeling lucky</button>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );

};

export default Home;
