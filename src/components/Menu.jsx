import riceData from "../data";
import Rice from "./Rice";

function Menu() {
    const rices = riceData;
    return (
        <main className="menu">
            <h2>Our menu</h2>
            <p>Authentic Rice Dishes Delivered To Your Doorstep.</p>
            <ul className="rices">
                {rices.map((rice) => (
                    <Rice riceObj={rice} key={rice.name} />
                ))}
            </ul>
        </main>
    );
}

export default Menu;


