export default function PriceFilter({ price, setFilterOptions }) {
    return (
        <div className="flex flex-col">
            <label htmlFor="price-select" className="block font-medium text-gray-600 dark:text-gray-300">Price</label>
            <select
                value={price}
                onChange={(e) => setFilterOptions('price', e.target.value)}
                name="price"
                id="price-select"
                className="p-1 border border-gray-30 hover:border-2 hover:border-gray-400 focus:outline-none focus:border-2 focus:border-blue-400 focus:rounded-sm focus:shadow-sm dark:bg-slate-700"
            >
                <option value={""}>Price Range</option>
                <option value={"25000"}>₹10,000 - 25,000</option>
                <option value={"40000"}>₹25,000 - 40,000</option>
                <option value={"55000"}>₹40,000 - 55,000</option>
                <option value={"70000"}>₹55,000 - 70,000</option>
                <option value={"85000"}>₹70,000 - 85,000</option>
                <option value={"100000"}>₹85,000 - 1,00,000</option>
            </select>
        </div>
    )
}