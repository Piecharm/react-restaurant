const formatCurrency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
});

function Rice({ riceObj }) {
    return (
        <li className="flex gap-4 py-2">
            <img src={riceObj.imgName} alt={riceObj.name} className="h-24" />
            <div className="flex grow flex-col pt-0.5">
                <h3 className="font-medium">{riceObj.name}</h3>
                <div className="mt-auto flex items-center justify-between">
                    <p className="text-sm">
                        {formatCurrency.format(riceObj.price)}
                    </p>
                </div>
            </div>
        </li>
    );
}

export default Rice;
