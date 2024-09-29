import { FaSearch } from "react-icons/fa";


function Search() {
    return (
        <div className="bg-[rgb(14,20,33)] rounded-full w-full sm:w-fit flex items-center py-3 px-4 gap-3">
            <FaSearch className="text-white sm:size-5 md:size-4" />
            <input type="text" placeholder="Search City..." className="bg-transparent outline-none text-white w-50 sm:min-w-80" />
        </div>
    )
}

export default Search;