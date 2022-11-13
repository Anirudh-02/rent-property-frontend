import LocationFilter from "./filtercomponents/LocationFilter";
import MoveInDateFilter from "./filtercomponents/MoveInDateFilter";
import PriceFilter from "./filtercomponents/PriceFilter";
import PropertyTypeFilter from "./filtercomponents/PropertyTypeFilter";

export default function Filters({ location, type, when, price, clearFilterOptions, setFilterOptions, filterProperties }) {
    return (
        <>
            <div className="max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-3xl bg-white rounded-lg shadow-lg xl:max-w-7xl mx-auto p-4 my-4 dark:bg-gray-900 dark:text-white">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2">
                    <LocationFilter location={location} setFilterOptions={setFilterOptions} />
                    <MoveInDateFilter when={when} setFilterOptions={setFilterOptions} />
                    <PriceFilter price={price} setFilterOptions={setFilterOptions} />
                    <PropertyTypeFilter type={type} setFilterOptions={setFilterOptions} />
                </div>
                <div className="flex justify-center mt-3 gap-2">
                    <button onClick={filterProperties} className="bg-blue-500 rounded-md px-6 py-2 hover:shadow-md active:bg-blue-600">Search</button>
                    <button onClick={clearFilterOptions} className="bg-red-500 rounded-md px-6 py-2 hover:shadow-md active:bg-red-600">Clear Filters</button>
                </div>
            </div>
        </>
    )
}