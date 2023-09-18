import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { fetchDataFromApi } from "../utils/api";
import SearchResultHeader from "./SearchResultHeader";
import Footer from "./Footer";
import SearchedItemTemplate from "./SearchedItemTemplate";
import SearchedImageItemTemplate from "./SearchedImageItemTemplate";
import Pagination from "./Pagination";
import { Context } from "../utils/ContextApi";
import Skeleton from "./Skeleton";

const SearchResult = () => {

    const [results, setResults] = useState([]);
    const { query, startIndex } = useParams();
    const { imageSearch } = useContext(Context);

    const fetchSearchResults = () => {
        let payload = { q: query, start: startIndex }
        if (imageSearch) {
            payload.searchType = 'image';
        }
        fetchDataFromApi(payload).then((res) => {
            console.log(res);
            setResults(res);
        }).catch((error) => {
            console.log(error);
        });
    }

    // setTimeout was used below to test the skeleton shimmer effect
    // setTimeout(() => {
    // }, 3000);

    useEffect(() => {
        // fetchSearchResults();
    }, [query, startIndex, imageSearch]);

    return (
        <div className="flex flex-col min-h-screen">

            <SearchResultHeader />

            {results?.items?.length > 0 ? (

                <main className="grow p-[12px] pb-0 md:pr-5 md:pl-20">
                    <div className="flex text-sm text-[#70757a] mb-3">
                        {`About ${results?.searchInformation?.formattedTotalResults} results in (${results?.searchInformation?.formattedSearchTime})`}
                    </div>
                    {!imageSearch ? (
                        <div>
                            {results?.items?.map((item, index) => (
                                <SearchedItemTemplate key={index} data={item} />
                            ))}
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-2">
                            {results?.items?.map((item, index) => (
                                <SearchedImageItemTemplate key={index} data={item} />
                            ))}
                        </div>
                    )}
                </main>

            ) :
                <Skeleton />
            }

            <Pagination queries={results?.queries} />
            <Footer />

        </div>
    );
};

export default SearchResult;
