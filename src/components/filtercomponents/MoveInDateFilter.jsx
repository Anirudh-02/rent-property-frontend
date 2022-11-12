export default function MoveInDateFilter({ when, setFilterOptions }) {
    return (
        <div className="flex flex-col">
            <label htmlFor="move-in-date-input" className="block font-medium text-gray-600 dark:text-gray-300">When</label>
            <input value={when} onChange={(e) => setFilterOptions('when', e.target.value)} type="date" name="move-in-date" id="move-in-date-input" className="p-1 border border-gray-30 hover:border-2 hover:border-gray-400 focus:outline-none focus:border-2 focus:border-blue-400 focus:rounded-sm focus:shadow-sm dark:bg-slate-700" min={"2022-11-27"} max={"2022-12-31"} />
        </div>
    )
}