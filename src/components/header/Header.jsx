import { NavLink, useNavigate } from "react-router";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Slices/AuthSlice";
import { useProductContext } from "../../context/ProductsContext";

export default function Header() {

    const navigate = useNavigate();

    //use for login and logout && dropdown close
    const user = useSelector(store => store.auth.user);
    const dispatch = useDispatch();
    const [showDropdown, setShowDropdown] = useState(false); // State to control dropdown visibility
    const dropdownRef = useRef(null);// Ref to track the dropdown container


    //use for search box
    const [searchValue, setSearchValue] = useState("");
    const [results, setResults] = useState([]);
    const { keywords } = useProductContext();



    const handleSearch = (e) => {
        e.preventDefault();
        if (searchValue.trim()) {
            navigate(`/search?q=${searchValue}`, { state: { from: location.pathname } })

        }
        setResults([]);
    }

    const handleChange = (e) => {

        const query = e.target.value;
        setSearchValue(query)
        if (query.length > 0) {
            const matchedFound = keywords.filter(item => item.toLowerCase().includes(query.toLowerCase()));
            setResults(matchedFound);
        } else {
            setResults([]);
        }
    }

    const handelClick = (value) => {
        setSearchValue(value)
        setResults([]);
    }

    // Effect to handle clicks outside the dropdown
    useEffect(() => {
        console.log(dropdownRef.current);
        
        function handleClickOutside(e) {
            // Check if the click is outside the dropdownRef container
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setShowDropdown(false); // Close dropdown if clicked outside
            }
        }

        // Add event listener when dropdown is open
        if (showDropdown) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        // Cleanup event listener when component unmounts or dropdown state changes
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showDropdown]); // Runs whenever showDropdown state changes


    return (
        <nav className="bg-gray-700 shadow-md rounded-lg">
            <div className="flex flex-wrap items-center justify-between mx-auto py-2 px-3 ">

                {/* Logo / Branding */}
                <NavLink to="/" className="flex items-center space-x-3">
                    <span className="text-white text-2xl font-semibold">💰 Shopping App</span>
                </NavLink>

                {/* Search Bar */}

                <form onSubmit={handleSearch} className="w-full max-w-[280px] mx-4  relative">
                    <div className="row flex items-center border border-gray-300 rounded-lg overflow-hidden">
                        <input
                            type="text"
                            autoComplete="off"
                            className="flex-grow px-2 py-1 text-white outline-none"
                            placeholder="Search anything..."
                            value={searchValue}
                            onChange={handleChange}
                        />

                        <button
                            type="submit"
                            className="search-button px-3 py-2 bg-gray-600 text-white hover:bg-gray-700"
                        >
                            🔍
                        </button>
                    </div>


                    {/* Dropdown Result Box */}
                    {results.length > 0 && (<div className="result-box absolute w-full bg-gray-300 border border-gray-300 rounded-md shadow-lg mt-1 max-h-[200px] overflow-y-auto">
                        <ul className="p-2">
                            {
                                results.map((result) => (
                                    <li
                                        key={result}
                                        className="list-none px-3 py-1 cursor-pointer rounded-md hover:bg-gray-500"
                                        onClick={() => handelClick(result)}
                                    >
                                        {result}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>)}
                </form>

                {/* Navigation Links */}
                <ul className="flex items-center space-x-4">

                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `text-2xl transition-colors duration-300 ${isActive ? "text-yellow-300" : "text-yellow-500"
                            }`
                        }
                    >
                        <i className="fa-solid fa-house"></i>
                    </NavLink>
                    <li>
                        <NavLink
                            to="/cart"
                            className={({ isActive }) =>
                                `text-2xl transition-colors duration-300 ${isActive ? "text-yellow-300" : "text-yellow-500"
                                }`
                            }
                        >
                            <i className="fa-solid fa-cart-shopping"></i>
                        </NavLink>
                    </li>
                    {!user && (<li>
                        <NavLink to="/login" className="text-2xl text-yellow-500">
                            <i className="fa-solid fa-right-to-bracket"></i>
                        </NavLink>
                    </li>)}

                    {/* Profile Section */}
                    <li className="relative">
                        {user && (
                            <div className="relative" ref={dropdownRef}>


                                {/* Profile Avatar */}

                                <button

                                    onClick={() => setShowDropdown(!showDropdown)}

                                    className="flex items-center space-x-4 me-4 focus:outline-none"
                                >
                                    <div className="text-2xl text-yellow-300 hover:cursor-pointer">
                                        <i className="fa-solid fa-user"></i>
                                    </div>

                                </button>

                                {/* Dropdown Menu (Hidden in Header) */}

                                {showDropdown && (
                                    <div

                                        className="absolute right-0 mt-3 w-45 bg-white text-black rounded-lg shadow-xl border border-gray-200">
                                        <div className="p-4 text-center">
                                            <div className="text-lg font-semibold text-gray-900">{user.name}</div>
                                            <p className="text-sm text-gray-500">Welcome back!</p>
                                        </div>
                                        <hr className="border-gray-200" />
                                        <button
                                            onClick={() => {
                                                dispatch(logout());
                                            }}
                                            className="w-full py-3 text-center bg-red-500 text-white font-medium rounded-b-lg transition duration-300 hover:bg-red-600 hover:cursor-pointer"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                )}

                            </div>
                        )}
                    </li>
                </ul>
            </div>
        </nav>
    );
}




