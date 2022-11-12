export default function Navbar() {
    return (
        <nav className="text-4xl bg-gray-500">
            <ul className="list-none flex items-center h-16 gap-4 mx-4">
                <li className="inline font-medium cursor-pointer hover:bg-gray-400 hover:rounded-md p-1 focus:bg-gray-400">Rent</li>
                <li className="inline font-medium cursor-pointer hover:bg-gray-400 hover:rounded-md p-1 focus:bg-gray-400">Buy</li>
                <li className="inline font-medium cursor-pointer hover:bg-gray-400 hover:rounded-md p-1 focus:bg-gray-400">Sell</li>
            </ul>
        </nav>
    )
}