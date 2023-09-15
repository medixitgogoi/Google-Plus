import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { BsCheckLg } from "react-icons/bs";
import MicIcon from "../assets/mic.svg";
import ImageIcon from "../assets/image.svg";

const SearchInput = () => {

    const navigate = useNavigate();

    const { query } = useParams();

    const [searchQuery, setSearchQuery] = useState(query || "");

    const searchQueryHandler = (e) => {
        if (e.key === "Enter" && searchQuery.length > 0) {
            navigate(`/${searchQuery}/${1}`);
        }
    }

    return (
        <main id="searchBox" className="h-[35px] w-full md:w-[550px] flex items-center gap-3 px-4 border border-[#dfe1e5] rounded-3xl hover:bg-white hover:shadow-c hover:border-0 focus-within:shadow-c focus-within:border-0">
            <AiOutlineSearch size={18} color="#9aa0a6" />
            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyUp={searchQueryHandler}
                autoFocus
                className="grow outline-0 text-black/[0.8] font-medium"
            />
            <div className="flex items-center gap-2 md:gap-3">
                {searchQuery && (
                    <IoMdClose
                        size={18}
                        color="#70757a"
                        className="cursor-pointer"
                        onClick={() => setSearchQuery("")}
                    />
                )}
                <img className="h-5 w-5 rounded-full cursor-pointer" src={MicIcon} alt="mic-icon" />
                <img className="h-5 w-5 cursor-pointer" src={ImageIcon} alt="image-icon" />
            </div>
        </main>
    );
};

export default SearchInput;
