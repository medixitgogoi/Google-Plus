import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { BsCheckLg } from "react-icons/bs";
import MicIcon from "../assets/mic.svg";
import ImageIcon from "../assets/image.svg";

const SearchInput = () => {

    const [searchQuery, setSearchQuery] = useState("");

    return (
        <main id="searchBox" className="h-[40px] w-full md:w-[550px] flex items-center gap-3 px-4 border border-[#dfe1e5] rounded-3xl hover:bg-white hover:shadow-c hover:border-0 focus-within:shadow-c focus-within:border-0">
            <AiOutlineSearch size={18} color="#9aa0a6" />
            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyUp={(e) => console.log(e.target.value)}
                autoFocus
                className="grow outline-0 text-black/[0.8] font-medium"
            />
            <div className="flex items-center gap-2 md:gap-3">
                {searchQuery && (
                    <IoMdClose
                        size={18}
                        color="#70757a"
                        className="cursor-pointer"
                        onClick={()=>setSearchQuery("")}
                    />
                )}
                <img className="h-6 w-6 rounded-full cursor-pointer" src={MicIcon} alt="mic-icon" />
                <img className="h-6 w-6 cursor-pointer" src={ImageIcon} alt="image-icon" />
            </div>
        </main>
    );
};

export default SearchInput;