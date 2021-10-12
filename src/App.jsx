import productList from "./productList";
import Filters from "./components/filters";
import { useEffect, useState } from "react";
import Promotion from "./components/promotion";
import ProductList from "./components/productList";
import Footer from "./components/footer";
import Coupon from "./components/coupon";
import language from "./language";

const App = () => {
    const [selectedLanguage, setSelectedLanguage] = useState(language.english)
    const [filteredProducts, setFilteredProducts] = useState(productList);
    const [categories, setCategories] = useState();
    const [cart, setCart] = useState()
    const [counter, setCounter] = useState(0)
    const [existingCoupon, setExistingCoupon] = useState(false)

    useEffect(() => {
        // categories = ['health', 'grocery',....]
        let myCartObj = {}
        productList.forEach(product => myCartObj[product.id] = selectedLanguage.addCartButton)
        setCart(myCartObj)

        let newCategories = [];
        for (let i = 0; i < productList.length; i++) {
            if (newCategories.indexOf(productList[i].category) === -1) {
                newCategories.push(productList[i].category)
            }
        }
        setCategories(newCategories.sort())
    }, [])

    const onCartClick = (id) => {
        const cartCopy = { ...cart }
        if (cartCopy[id] === selectedLanguage.addCartButton) {
            cartCopy[id] = selectedLanguage.removeCartButton
            setCounter(counter + 1)
        } else {
            cartCopy[id] = selectedLanguage.addCartButton
            setCounter(counter - 1)
        }
        setCart({ ...cartCopy })
    }

    const updateFilteredProducts = (category, name, price) => {
        let newProducts = [...productList]
        newProducts = newProducts.filter(product => (category ? product.category === category : true)
            && (name ? product.name.toLowerCase().includes(name.toLowerCase()) : true)
            && (price ? parseInt(product.price.substring(1)) >= price : true))
        setFilteredProducts(newProducts)
    }

    const applyCoupon = discount => {
        if (existingCoupon)
            return;
        let newProducts = [...filteredProducts]
        newProducts.map(product => product.price = "$" + parseInt(product.price.substring(1)) * discount / 100)
        setFilteredProducts(newProducts)
        setExistingCoupon(true)
    }

    return (
        <>
            <Filters
                counter={counter}
                updateFilteredProducts={updateFilteredProducts}
                categories={categories}
                selectedLanguage={selectedLanguage}
                setSelectedLanguage={setSelectedLanguage}
                language={language}
            ></Filters>

            <Coupon selectedLanguage={selectedLanguage}
                applyCoupon={applyCoupon} />

            <Promotion selectedLanguage={selectedLanguage}></Promotion>

            <ProductList
                onCartClick={onCartClick}
                cart={cart}
                products={filteredProducts}
                selectedLanguage={selectedLanguage}
            ></ProductList>

            <Footer selectedLanguage={selectedLanguage}></Footer>
        </>
    );
};

export default App;