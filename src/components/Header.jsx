function Header() {
    return (
        <header className="py-3 text-[#d11b27] shadow-md">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-medium mx-5 ">Rice Delights</h1>
                <div className="flex bg-[#f0f0f0] rounded-md py-2 px-6">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 pt-0.5 text-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                    <input
                        className="ml-2 outline-none bg-transparent font-"
                        type="text"
                        name="search"
                        id="search"
                        placeholder="Search..."
                    />
                </div>
                <div className="flex justify-between items-center gap-4">
                    <button className="text-base font-medium text-white bg-[#d11b27] py-2 px-6 rounded-full flex items-center gap-3 mx-5">
                        Sign Up
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
