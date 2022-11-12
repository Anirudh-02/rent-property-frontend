
export default function PropertyItem({ property }) {
    return (
        <div>
            <div className="max-w-96 h-fit border hover:border-2 border-black rounded-lg p-3">
                <img className="max-h-40 mx-auto border-2 border-gray-800 rounded-md my-1" src={property.imgUrl} alt="Image" />
                <h1 className="text-3xl">{new Intl.NumberFormat('en-IN', { style: "currency", currency: "INR", maximumSignificantDigits: 4 }).format(property.price)}<span className="text-lg text-gray-600">/per annum</span></h1>
                <div className="flex justify-between my-1">
                    <div>
                        <h2 className="text-lg font-semibold">{property.city}</h2>
                        <p className="text-gray-800">{property.name}, {property.address}</p>
                    </div>
                    <button className="rounded-full border border-red-600 hover:border-2 active:bg-red-600 w-10 h-10">
                        <i className="fa-regular fa-heart"></i>
                    </button>
                </div>
                <div className="grid grid-cols-2 my-1">
                    <p className="border-r-2 border-gray-700 text-center">{property.bhk} BHK</p>
                    <p className="text-center">{property.area} sq. meters</p>
                </div>
            </div>
        </div>
    )
}