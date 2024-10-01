import { FaSearch } from "react-icons/fa";


function Search() {

    return (
        <div className="search-box relative bg-[rgb(14,20,33)] text-white rounded-full w-full sm:w-fit flex items-center py-3 px-4 gap-3">
            <FaSearch className="sm:size-5 md:size-4" />
            <input type="text" placeholder="Search City..." className="bg-transparent outline-none w-50 sm:min-w-80" />

            {/* result-box */}
            {/* <ul className="result-box absolute bottom-[-200px] text-white z-50 overflow-y-auto rounded-lg left-0 w-full min-h-48 bg-[#0e1421]">
                <li className="bg-[] cursor-pointer p-2">cairo</li>
            </ul> */}
        </div>
    )
}

export default Search;