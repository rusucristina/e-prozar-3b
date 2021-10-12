import { useState } from 'react'

const Filters = ({ categories, selectedLanguage, updateFilteredProducts, setSelectedLanguage, language }) => {
    const [categoryFilter, setCategoryFilter] = useState('')
    const [nameFilter, setNameFilter] = useState('')
    const [priceFilter, setPriceFilter] = useState(0)

    const handleNameChange = e => {
        setNameFilter(e.target.value)
        updateFilteredProducts(categoryFilter, e.target.value, priceFilter)
    }
    const handlePriceChange = e => {
        setPriceFilter(e.target.value)
        updateFilteredProducts(categoryFilter, nameFilter, e.target.value)

    }
    const handleCategoryFilter = e => {
        setCategoryFilter(e.target.value)
        updateFilteredProducts(e.target.value, nameFilter, priceFilter)
    }
    const onButtonClick = () => {
        updateFilteredProducts(``)
        setCategoryFilter(``)
        setNameFilter(``)
        setPriceFilter(``)
    }

    return <section className="filter">

        <button onClick={() =>setSelectedLanguage(language.english)}>
            <i className="flag flag-us"></i>
        </button>

        <button onClick={() =>setSelectedLanguage(language.romanian)}>
            <i className="flag flag-ro"></i>
        </button>
        <input
            type="text"
            value={nameFilter}
            onChange={handleNameChange}
            placeholder={selectedLanguage.filterPlaceHolder}
        />
        <input
            type="number"
            value={priceFilter}
            step="10"
            onChange={handlePriceChange}
        />
        <button onClick={onButtonClick}>
            Reset
        </button>
        <div>{selectedLanguage.resetFiltersButton}</div>
        <select value={categoryFilter} onChange={handleCategoryFilter}>
            {categories?.map(category => (
                <option key={category} value={category}>
                    {category}
                </option>
            ))}
        </select>
    </section>
}

export default Filters