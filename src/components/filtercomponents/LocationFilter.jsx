export default function LocationFilter({ location, setFilterOptions }) {
    return (
        <div className="flex flex-col">
            <label htmlFor="cities-input" className="block font-medium text-gray-600">Location</label>
            <input value={location} onChange={(e) => setFilterOptions('location', e.target.value)} placeholder="Location" list="cities" id="cities-input" className="block p-1 border border-gray-300 hover:border-2 hover:border-gray-400 focus:outline-none focus:border-2 focus:border-blue-400 focus:rounded-sm focus:shadow-sm"></input>
            <datalist id="cities">
                <option value={"New York"}></option>
                <option value={"Mumbai"}></option>
                <option value={"London"}></option>
                <option value={"Albuqurque"}></option>
                <option value={"Chicago"}></option>
            </datalist>
        </div>
    )
}