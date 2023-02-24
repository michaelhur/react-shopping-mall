import React from 'react';
import { StyledProductItem } from './item';
import { Product } from '../../types/types';

const ProductDetail = ({ item: { category, title, description, image, price, rating } }: { item: Product }) => {
    return (
        <StyledProductItem>
            <p>{category}</p>
            <p>{title}</p>
            <img src={image} alt="Product Image" />
            <span>{description}</span>
            <span>${price}</span>
            <span>{rating.rate}</span>
        </StyledProductItem>
    );
};

export default ProductDetail;
