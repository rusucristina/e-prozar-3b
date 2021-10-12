const ProductList = ({ products, selectedLanguage,onCartClick, cart }) => {
 
    return <section className="products">
        {products.map(product=>(
            <div className="card" key={product.id}>
                <div className="card-image">
                    <img src={product.image}/>
                 </div>
                 <div className="card-body">
                     <h3>name: {product.name}</h3>
                     <p>category: {product.category}</p>
                     <p>description: {product.description}</p>
                     <p>price: {product.price}</p>
                 </div>
                 <button onClick={()=>onCartClick(product.id)}>{cart?.[product.id]}</button>
            </div>
        ))}
        {selectedLanguage.addCartButton}
            </section>
}
 
export default ProductList