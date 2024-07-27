import riceData from "../data";
import Rice from "./Rice";

function Menu() {
    const rices = riceData;
    return (
        <main>
            <h2>Our menu</h2>
            <p>Authentic Rice Dishes Delivered To Your Doorstep.</p>
            <ul className="px-4">
                {rices.map((rice) => (
                    <Rice riceObj={rice} key={rice.name} />
                ))}
            </ul>
        </main>
    );
}

export default Menu;
