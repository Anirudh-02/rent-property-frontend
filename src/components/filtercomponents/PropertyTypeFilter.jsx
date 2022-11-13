export default function PropertyTypeFilter({ type, setFilterOptions }) {
    return (
        <div className="flex flex-col">
            <label htmlFor="property-type-select" className="block font-medium text-gray-600 dark:text-gray-300">Property Type</label>
            <select
                value={type}
                onChange={(e) => setFilterOptions('type', e.target.value)}
                name="property-type"
                id="property-type-select"
                className="p-1 border border-gray-30 hover:border-2 hover:border-gray-400 focus:outline-none focus:border-2 focus:border-blue-400 focus:rounded-sm focus:shadow-sm dark:bg-slate-700"
            >
                <option value="">Type</option>
                <option value="House">House</option>
                <option value="Office">Office</option>
                <option value="Warehouse">Warehouse</option>
            </select>
        </div>
    )
}