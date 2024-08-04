import riceData from "../data";
import Rice from "./Rice";

function Menu() {
    const rices = riceData;
    return (
        <main className="max-w-full mx-auto py-10 px-4 text-center ">
            <div className="mb-5 font-semibold text-[#d11b27]">
                <h2 className="text-2xl">Our menu</h2>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {rices.map((rice) => (
                    <Rice riceObj={rice} key={rice.name} />
                ))}
            </ul>
        </main>
    );
}

export default Menu;
