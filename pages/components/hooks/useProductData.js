import { useState, useEffect } from "react";

export const useProductData = (filter) => {

    const [products, setProducts] = useState([]);
    
    const getData = () => {
        fetch('MOCK_DATA.json'
        ,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }
        )
          .then(function(response){
            return response.json();
          })
          .then(function(myJson) {
            const products = filter(myJson)
            setProducts(products)
          });
    }
    
    useEffect(() => {
        getData();
    }, []);

    return products;
}
