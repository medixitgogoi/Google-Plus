import { useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { BsCheckLg } from "react-icons/bs";
import MicIcon from "../assets/mic.svg";
import ImageIcon from "../assets/image.svg";
import { Context } from "../utils/ContextApi";

const SearchInput = () => {

    const { mode } = useContext(Context);
    const navigate = useNavigate();
    const { query } = useParams();
    const [searchQuery, setSearchQuery] = useState(query || "");

    const searchQueryHandler = (e) => {
        if (e.key === "Enter" && searchQuery.length > 0) {
            navigate(`/${searchQuery}/${1}`);
        }
    }

    return (
        <main id="searchBox" className={`h-[35px] w-full md:w-[550px] flex items-center gap-3 px-3 md:px-4 border rounded-3xl ${mode === "light" ? "hover:shadow-c border-[#dfe1e5]" : "border-[#605d5d]"} ${mode === "light" ? "focus-within:shadow-c" : "focus-within:shadow-slate-600"} focus-within:shadow-c ${mode === "light" && "focus-within:border-0 hover:border-0 hover:bg-white"}`}>
            <AiOutlineSearch size={18} color="#9aa0a6" />
            <input
                id="search"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyUp={searchQueryHandler}
                autoFocus
                className={`grow outline-0 font-medium text-black/[0.8] ${mode === "dark" && "bg-[#1b1c1c] text-white"}`}
            />
            <div className="flex items-center gap-1 md:gap-3">
                <div className={`border-r ${mode === "light" ? "border-r-black/[0.3]" : "border-r-white/[0.4]"} pr-2`}>
                    {searchQuery && (
                        <IoMdClose
                            size={18}
                            color="#70757a"
                            className="cursor-pointer"
                            onClick={() => setSearchQuery("")}
                        />
                    )}
                </div>
                <img className="h-5 w-5 rounded-full cursor-pointer" src={MicIcon} alt="mic-icon" />
                <img className="h-5 w-5 cursor-pointer" src={ImageIcon} alt="image-icon" />
            </div>
        </main>
    );
};

export default SearchInput;
