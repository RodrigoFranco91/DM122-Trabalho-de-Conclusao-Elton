import React, { createContext, useState, useContext} from 'react';

const ProductListContext = createContext([0, () => {}]);

const ProductListProvider = ( { children } ) => {
    const [products, setProducts] = useState(0);

    return (
        <ProductListContext.Provider value={[products, setProducts]}>
            { children }
        </ProductListContext.Provider>
    )
}

function useCounter(){
    const context = useContext(ProductListContext)

    return context;
}

export { ProductListProvider, useCounter }