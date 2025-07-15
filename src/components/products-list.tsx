'use client';
import Link from 'next/link';

import fetchData from '../utils/fetchData';
import { Product } from '../utils/types';
import ProductItem from '../components/product-item';
import { useEffect, useState } from 'react';
import Error from '../app/error';

export default function Products() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const getData = async () => {
            const response = await fetchData();
            setProducts(response);
        };

        getData();
    }, []);

    if (!products.length) {
        return <Error error={{name: '', message: 'Products missing'}} reset={() => {}}></Error>;
    }

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