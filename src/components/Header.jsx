function Header() {
    return (
        <header className="py-3 text-[#d11b27] shadow-md">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-medium mx-5 ">Rice Delights</h1>
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
