import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { fetchDataFromApi } from "../utils/api";
import SearchResultHeader from "./SearchResultHeader";
import Footer from "./Footer";
import SearchedItemTemplate from "./SearchedItemTemplate";
import SearchedImageItemTemplate from "./SearchedImageItemTemplate";
import Pagination from "./Pagination";
import { Context } from "../utils/ContextApi";

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

    useEffect(() => {
        // fetchSearchResults();
    }, [query, startIndex, imageSearch]);

    return (
        <div className="flex flex-col min-h-screen">
            <SearchResultHeader />
            <main className="grow p-[12px] pb-0 md:pr-5 md:pl-20"></main>
            <Footer />
        </div>
    );
};

export default SearchResult;
