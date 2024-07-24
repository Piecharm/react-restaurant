function Rice({ riceObj }) {
    return (
        <div className="rice">
            <img src={riceObj.imgName} alt={riceObj.name} />
            <div>
                <h3>{riceObj.name}</h3>
                <span>{riceObj.price}</span>
            </div>
        </div>
    );
}

export default Rice;
