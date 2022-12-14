import React from "react";
import { 
    Cards 
} from "../../components";

export interface ProductsNameProps {
    data: {}
}

export const ProductsName: React.FC<ProductsNameProps> = ({
    data
}) => {
    return (
        <h1>Product NAME Page</h1>
    )
}

export default ProductsName;