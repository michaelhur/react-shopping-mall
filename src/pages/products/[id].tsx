import { useParams } from 'react-router-dom';
import { fetcher, QueryKeys } from '../../queryClient';
import { useQuery } from '@tanstack/react-query';
import { Product } from '../../types/types';
import { StyledProductItem } from '../../components/product/item';
import ProductDetail from '../../components/product/detail';

const ProductDetailPage = () => {
    const { id } = useParams();

    const { data } = useQuery<Product>([QueryKeys.PRODUCTS, id], () =>
        fetcher({
            method: 'GET',
            path: `/products/${id}`,
        }),
    );

    console.log(data);

    if (!data) return null;

    return (
        <>
            <h2>제품 상세 정보</h2>
            <ProductDetail item={data} />
        </>
    );
};

export default ProductDetailPage;
