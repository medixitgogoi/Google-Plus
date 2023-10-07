import { useContext } from "react";
import { Context } from "../utils/ContextApi";

const SearchedItemTemplate = ({ data }) => {

    const { mode } = useContext(Context);

    const createMarkUp = (htmlContent) => {
        return { __html: htmlContent }
    }

    return (
        <main className="flex flex-col py-3 max-w-[800px]">
            <section className="group cursor-pointer" onClick={() => window.open(data.link)}>
                <div className={`text-sm truncate text-[#202124] ${mode === "dark" && "text-white/[0.4]"}`}>
                    {data.formattedUrl}
                </div>
                <div className={`group-hover:underline text-xl text-[#1a0dab] ${mode === "dark" && "text-blue-600"} pt-2 leading-6`}>
                    {data.title}
                </div>
            </section>
            <section className={`text-sm text-[#4d5156] leading-4 pt-3 md:pt-3 ${mode === "dark" && "text-white/[0.5]"}`} dangerouslySetInnerHTML={createMarkUp(data.htmlSnippet)} />
        </main>
    );
};

export default SearchedItemTemplate;
