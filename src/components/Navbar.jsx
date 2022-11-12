export default function Navbar({ theme, changeTheme }) {
    return (
        <nav className="text-4xl bg-gray-500 dark:bg-gray-900 dark:text-white ">
            <ul className="list-none flex items-center h-16 gap-4 mx-4">
                <li className="inline font-medium cursor-pointer hover:bg-gray-400 dark:hover:bg-gray-700 hover:rounded-md p-1 focus:bg-gray-400">Rent</li>
                <li className="inline font-medium cursor-pointer hover:bg-gray-400 dark:hover:bg-gray-700 hover:rounded-md p-1 focus:bg-gray-400">Buy</li>
                <li className="inline font-medium cursor-pointer hover:bg-gray-400 dark:hover:bg-gray-700 hover:rounded-md p-1 focus:bg-gray-400">Sell</li>
                <li className="ml-auto">
                    <button onClick={changeTheme}>
                        {theme == 'light' ? <i class="fa-regular fa-moon"></i> : <i class="fa-regular fa-sun"></i>}
                    </button>
                </li>
            </ul>
        </nav>
    )
}