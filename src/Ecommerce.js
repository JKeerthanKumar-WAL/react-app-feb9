import { useState } from "react";
const Ecommerce = () => {
    let [product, setProduct] = useState([]);
    const addProduct = (event) => {
        event.preventDefault();
        let productOb = {
            name: event.target.name.value,
            price: event.target.price.value,
            color: event.target.color.value,
            expiry_date: event.target.date.value,
            description: event.target.description.value
        }
        let newProduct = [...product, productOb];
        setProduct(newProduct);
    }
    const deleteProduct = (indexForDeleting) => {
        let newProduct = product.filter(function (val, index) {
            if (indexForDeleting == index) {
                return false;
            }
            return true;
        });
        setProduct(newProduct);
    }
    return (
        <div className="App-div">
            <h1>Products Form</h1>
            <form onSubmit={addProduct} className="App-form">
                <b>Name : </b><input type="text" name="name" /><br /><br />
                <b>Price : </b><input type="number" name="price" /><br /><br />
                <b>Expiry Date : </b><input type="date" name="date" /><br /><br />
                <b>Description : </b><textarea name="description"></textarea><br /><br />
                <b>Color : </b><input type="color" name="color" /><br /><br />
                <button><b>Add to cart</b></button><br /><br />
            </form>
            {product.map((val, index) => {
                return(
                    <div className="divone">
                        <h2>Product {index+1}</h2>
                        <b>Product Name : </b>{val.name}<br /><br />
                        <b>Product Price : </b>{val.price}<br /><br />
                        <b>Product Color : </b>{val.color}<br /><br />
                        <b>Expiry Date : </b>{val.expiry_date}<br /><br />
                        <b>Product Description : </b>{val.description}<br /><br />
                        <button onClick={() => { deleteProduct(index); }}><b>Delete Product</b></button><br /><br />
                    </div>
                )
            })}
        </div>
    )
}
export default Ecommerce;