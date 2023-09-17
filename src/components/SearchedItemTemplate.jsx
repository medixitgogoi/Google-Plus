const SearchedItemTemplate = ({ data }) => {

    const createMarkUp = (htmlContent) => {
        return { __html: htmlContent }
    }

    return (
        <main className="flex flex-col py-3 max-w-[800px]">
            <section className="group cursor-pointer" onClick={() => window.open(data.link)}>
                <div className="text-sm truncate text-[#202124]">
                    {data.formattedUrl}
                </div>
                <div className="group-hover:underline text-xl text-[#1a0dab] pt-1 leading-6">
                    {data.title}
                </div>
            </section>
            <section className="text-sm text-[#4d5156] leading-5 pt-3 md:pt-2" dangerouslySetInnerHTML={createMarkUp(data.htmlSnippet)} />
        </main>
    );
};

export default SearchedItemTemplate;
