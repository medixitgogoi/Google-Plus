import { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useParams, useNavigate } from "react-router-dom";
import { pagination } from "../utils/Constants";
import Logo from "../assets/google-pagination-logo.png";

const Pagination = ({ queries }) => {

    const [page, setPage] = useState(pagination[0].startIndex);
    const { query } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        setPage(pagination[0].startIndex);
    }, [query])

    const paginationClickHandler = (startIndex) => {
        setPage(startIndex);
        navigate(`/${query}/${startIndex}`);
    }

    return (
        <main className="flex flex-col items-center py-14 max-w-[800px]">
            <div className="relative text-[#4285f4]">
                {queries?.previousPage && (
                    <div className="absolute left-[-30px] md:left-[-40px] top-[10px]" onClick={() => paginationClickHandler(queries?.previousPage[0].startIndex)}>
                        <FiChevronLeft size={18} className="cursor-pointer" />
                        <div className="cursor-pointer absolute left-[-5px] top-[20px] hidden md:block">
                            Prev
                        </div>
                    </div>
                )}

                <img src={Logo} alt="google-logo" className="w-[250px]" />

                {queries?.nextPage && (
                    <div className="absolute right-[-30px] md:right-[-40px] top-[10px]" onClick={() => paginationClickHandler(queries?.nextPage[0].startIndex)}>
                        <FiChevronRight size={18} className="cursor-pointer" />
                        <div className="cursor-pointer absolute left-[-5px] top-[20px] hidden md:block">
                            Next
                        </div>
                    </div>
                )}
            </div>

            <div className="flex gap-3 text-[#4285f4] text-sm">
                {pagination.map((p) => (
                    <span
                        key={p.page}
                        onClick={() => paginationClickHandler(p.startIndex)}
                        className={`cursor-pointer ${page === p.startIndex ? "text-black" : ""}`}>
                        {p.page}
                    </span>
                ))}
            </div>

        </main>
    );
};

export default Pagination;
