import { useHistory } from 'react-router-dom';
import "./Search.css";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
    const history = useHistory();
    const onSubmit = (e) => {
        history.push(`?s=${searchQuery}`);
        e.preventDefault();
    };

    return (
        <div className="search-container">
            {/* <button type="submit" id="icon"><i class="fa fa-search" aria-hidden="true"></i></button> */}
        <form id="search-bar"
            action="/"
            method="get"
            autoComplete="off"
            onSubmit={onSubmit}
        >
            <label htmlFor="header-search">
                <span className="visually-hidden">
                    Search blog posts
                </span>
            </label>
            <input
                value={searchQuery}
                onInput={(e) => setSearchQuery(e.target.value)}
                type="text"
                id="header-search"
                placeholder="Search"
                name="s"
                
            />
            <button type="submit" id="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
            
            
        </form>
        </div>
    );
};

export default SearchBar;