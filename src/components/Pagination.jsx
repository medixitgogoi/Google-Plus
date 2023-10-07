import { useState, useEffect, useContext } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useParams, useNavigate } from "react-router-dom";
import { pagination } from "../utils/Constants";
import Logo from "../assets/google-pagination-logo.png";
import { Context } from "../utils/ContextApi";

const Pagination = ({ queries }) => {

    const { mode } = useContext(Context);
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
            <section className="relative text-[#4285f4]">
                {queries?.previousPage && (
                    <article className="absolute left-[-30px] md:left-[-40px] top-[10px]" onClick={() => paginationClickHandler(queries?.previousPage[0].startIndex)}>
                        <FiChevronLeft size={18} className="cursor-pointer" />
                        <div className="cursor-pointer absolute left-[-5px] top-[20px] hidden md:block">
                            Prev
                        </div>
                    </article>
                )}

                <img src={Logo} alt="google-logo" className="w-[250px]" />

                {queries?.nextPage && (
                    <article className="absolute right-[-30px] md:right-[-40px] top-[10px]" onClick={() => paginationClickHandler(queries?.nextPage[0].startIndex)}>
                        <FiChevronRight size={18} className="cursor-pointer" />
                        <div className="cursor-pointer absolute left-[-5px] top-[20px] hidden md:block">
                            Next
                        </div>
                    </article>
                )}
            </section>

            <section className="flex gap-3 text-[#4285f4] text-sm">
                {pagination.map((p) => (
                    <span
                        key={p.page}
                        onClick={() => paginationClickHandler(p.startIndex)}
                        className={`cursor-pointer ${page === p.startIndex ? mode === "dark" ? "text-white/[0.7]" : "text-black":""}`}>
                        {p.page}
                    </span>
                ))}
            </section>

        </main>
    );
};

export default Pagination;
