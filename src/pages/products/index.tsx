import { fetcher, QueryKeys } from '../../queryClient';
import { useQuery } from '@tanstack/react-query';
import { Product } from '../../types/types';
import ProductItem from '../../components/product/item';
import styled from '@emotion/styled';

const ProductList = () => {
    const { data } = useQuery<Product[]>([QueryKeys.PRODUCTS], () =>
        fetcher({
            method: 'GET',
            path: '/products',
        }),
    );

    return (
        <div>
            <StyledProductList>
                {data?.map((product) => (
                    <ProductItem {...product} key={product.id} />
                ))}
            </StyledProductList>
        </div>
    );
};

export default ProductList;

const StyledProductList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
`;
