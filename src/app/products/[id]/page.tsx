import { Metadata } from 'next';
import fetchData from '../../../utils/fetchData';
import ProductItem from '../../../components/product-item';
import { Product } from '../../../utils/types';
import { notFound } from 'next/navigation';

type Params = {
    params: Promise<{ id: number }>
};

export async function generateStaticParams() {
    const products = await fetchData();
    return products.map((product: Product) => {
        return {
            id: product.id + ''
        }
    });
}

export async function generateMetadata({
    params
}: Params): Promise<Metadata> {
    const { id } = await params;
    const product = await fetchData(id + '');
    
    return {
        title: product.title,
        description: product.description,
    }
}

export default async function Page({
    params
}: Params) {
    const { id } = await params;
    const product = await fetchData(id + '');

    if (!product) {
        notFound();
    }

    return (
        <main>
            <ProductItem product={product} size='full' />
        </main>
    );
}