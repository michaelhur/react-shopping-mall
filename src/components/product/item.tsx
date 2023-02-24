import { Product } from '../../types/types';
import styled from '@emotion/styled';

const ProductItem = ({ category, description, id, image, price, rating, title }: Product) => (
    <StyledProductItem>
        <p>{category}</p>
        <p>{title}</p>
        <img src={image} alt="Product Image" />
        <span>${price}</span>
        <span>{rating.rate}</span>
    </StyledProductItem>
);

export default ProductItem;

export const StyledProductItem = styled.li`
    list-style: none;
    border: 1px solid #000000;
    padding: 10px;

    img {
        height: 150px;
        width: 100%;
        object-fit: contain;
    }
`;
