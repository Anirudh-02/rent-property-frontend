import { useCallback, useEffect, useRef, useState } from "react"
import PropertyItem from "./propertyitemcomponent/PropertyItem"

export default function Properties({ availableProperties }) {
    const itemsPerPage = 12
    const [page, setPage] = useState(1)
    const loader = useRef(null)
    
    const handleObserver = useCallback((entries) => {
        const target = entries[0]
        if (target.isIntersecting) {
            setPage(prevPage => prevPage + 1)
        }
    })

    useEffect(() => {
        const options = {
            rootMargin: "20px",
            threshold: 0
        }
        const loaderObserver = new IntersectionObserver(handleObserver, options)
        if (loader.current) loaderObserver.observe(loader.current)
    }, [handleObserver])

    return (
        <>
            <div className="max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-3xl bg-white rounded-lg shadow-lg xl:max-w-7xl mx-auto p-4 my-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-2 dark:bg-gray-900">
                {availableProperties.length > 0 ?
                    availableProperties.slice(0, itemsPerPage * page).map((property) => <PropertyItem key={property.id} property={property} />)
                    :
                    <p className="text-4xl">No results found...</p>
                }
            </div><div ref={loader}></div>
        </>
    )
}