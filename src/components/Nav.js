import {Link, useLocation} from "react-router-dom";

const Nav = ({search, setSearch}) => {
    const location = useLocation();
    // const search = location.state?.search;
    // const setSearch = location.state?.setSearch;

    return (
        <nav className="Nav">
           <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="search"> Search Posts</label>
                <input
                    id="search"
                    type="text"
                    placeholder="Search Posts"
                    value={search}
                    onChange={event => setSearch(event.target.value)}
                />
               <ul>
                   <li>
                       <Link to="/" > Home </Link>
                   </li>
                   <li>
                       <Link to="/post" > Post </Link>
                   </li>
                   <li>
                       <Link to="/about" > About </Link>
                   </li>
               </ul>
           </form>
        </nav>
    );
};

export default Nav;
