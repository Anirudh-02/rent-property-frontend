export default function PriceFilter({ price, setFilterOptions }) {
    return (
        <div className="flex flex-col">
            <label htmlFor="price-select" className="block font-medium text-gray-600 dark:text-gray-300">Price</label>
            <select value={price} onChange={(e) => setFilterOptions('price', e.target.value)} name="price" id="price-select" className="p-1 border border-gray-30 hover:border-2 hover:border-gray-400 focus:outline-none focus:border-2 focus:border-blue-400 focus:rounded-sm focus:shadow-sm dark:bg-slate-700">
                <option value={""}>Price Range</option>
                <option value={"2000000"}>₹10,00,000 - 20,00,000</option>
                <option value={"3000000"}>₹20,00,000 - 30,00,000</option>
                <option value={"4000000"}>₹30,00,000 - 40,00,000</option>
                <option value={"5000000"}>₹40,00,000 - 50,00,000</option>
                <option value={"6000000"}>₹50,00,000 - 60,00,000</option>
                <option value={"7000000"}>₹60,00,000 - 70,00,000</option>
                <option value={"8000000"}>₹70,00,000 - 80,00,000</option>
                <option value={"9000000"}>₹80,00,000 - 90,00,000</option>
                <option value={"10000000"}>₹90,00,000 - 1,00,00,000</option>
            </select>
        </div>
    )
}