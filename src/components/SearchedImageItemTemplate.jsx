const SearchedImageItemTemplate = ({ data }) => {
    return (
        <main className="group flex flex-col py-3 cursor-pointer" onClick={() => window.open(data.image.contextLink)}>
            <div className="rounded-xl overflow-hidden bg-black/[0.03] h-[100px] md:h-[120px] lg:h-[140px] group-hover:shadow-c">
                <img className="h-full w-full object-cover" src={data.link} alt="image" />
            </div>
            <div className="text-sm pt-2 text-[#70757a]">
                {data.displayLink}
            </div>
            <div className="text-sm text-[#3c4043] truncate lg:pt-1 group-hover:underline">{data.title}</div>
        </main>
    );
}

export default SearchedImageItemTemplate;
