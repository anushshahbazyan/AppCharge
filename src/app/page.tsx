import Link from 'next/link';

import fetchData from '../utils/fetchData';
import { Product } from '../utils/types';
import ProductItem from '../components/product-item';
import { Suspense } from 'react';

async function Products() {
    const products: Product[] = await fetchData();

    return products.map((product: Product) => {
        return (
            <Link href={`/products/${product.id}`} key={product.id}>
                <ProductItem
                    product={product}
                />
            </Link>
        );
    });
}

export default async function Page() {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 p-6'>
            <Suspense fallback={<div>Loading...</div>}>
                <Products />
            </Suspense>
        </div>
    );
};