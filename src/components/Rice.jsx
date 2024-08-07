const formatCurrency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
});

function Rice({ riceObj }) {
    return (
        <div className="max-w-sm mx-auto relative shadow-md rounded-lg cursor-pointer my-2">
            <img
                src={riceObj.imgName}
                alt={riceObj.name}
                className="h-28 w-32"
            />
            <div className="flex grow flex-col pt-1">
                <h3 className="font-medium">{riceObj.name}</h3>
                <p className="text-sm pt-1">
                    {formatCurrency.format(riceObj.price)}
                </p>
            </div>
        </div>
    );
}

export default Rice;
