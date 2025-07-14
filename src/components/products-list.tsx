import Link from 'next/link';

import fetchData from '../utils/fetchData';
import { Product } from '../utils/types';
import ProductItem from '../components/product-item';

export default async function Products() {
    const products: Product[] = await fetchData();

    return products.map((product: Product) => {
        return (
            <Link href={`/products/${product.id}`} key={product.id}>
                <ProductItem
                    product={product}
                    size='small'
                />
            </Link>
        );
    });
}