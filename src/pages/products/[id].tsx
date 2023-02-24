import { useParams } from 'react-router-dom';
import { fetcher, QueryKeys } from '../../queryClient';
import { useQuery } from '@tanstack/react-query';
import { Product } from '../../types/types';
import { StyledProductItem } from '../../components/product/item';

const ProductDetail = () => {
    const { id } = useParams();

    const { data } = useQuery<Product>([QueryKeys.PRODUCTS, id], () =>
        fetcher({
            method: 'GET',
            path: `/products/${id}`,
        }),
    );

    console.log(data);

    if (!data) return null;

    const { category, title, description, image, price, rating } = data;

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
