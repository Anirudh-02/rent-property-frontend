import { useEffect, useRef, useState } from 'react'
import Filters from './components/Filters'
import Navbar from './components/Navbar'
import Properties from './components/Properties'
import propertyData from './data/data.json'

function App() {
  const [theme, setTheme] = useState('light')
  const [availableProperties, setAvailableProperties] = useState(propertyData)
  const [location, setLocation] = useState("")
  const [price, setPrice] = useState("")
  const [when, setWhen] = useState("")
  const [type, setType] = useState("")

  function changeTheme() {
    theme == 'light' ? setTheme('dark') : setTheme('light')
  }

  function setFilterOptions(filterType, value) {
    if (filterType == 'location') {
      setLocation(value)
    }
    if (filterType == 'price') {
      setPrice(value)
    }
    if (filterType == 'when') {
      setWhen(value)
    }
    if (filterType == 'type') {
      setType(value)
    }
  }

  function filterProperties() {
    setAvailableProperties(
      propertyData.filter((property) => {
        if (
          (location ? property.city == location : 1) &&
          (price ? (property.price < price && property.price >= (price - 1000000)) : 1) &&
          (type ? property.type == type.toLowerCase() : 1) &&
          (when ? new Date(when).getTime() <= new Date(property.moveInDate).getTime() : 1)
        ) {
          return property
        }
      })
    )
  }

  function clearFilterOptions() {
    let val = ""
    setLocation(val)
    setPrice(val)
    setWhen(val)
    setType(val)
    setAvailableProperties(propertyData)
  }

  return (
    <div className={`themeWrapper ${theme}`}>
      <div className={`App dark:bg-zinc-800`}>
        <Navbar theme={theme} changeTheme={changeTheme} />
        <Filters location={location} type={type} when={when} price={price} clearFilterOptions={clearFilterOptions} setFilterOptions={setFilterOptions} filterProperties={filterProperties} />
        <Properties availableProperties={availableProperties} />
      </div>
    </div>
  )
}

export default App
