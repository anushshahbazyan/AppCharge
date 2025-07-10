import fetchData from '../../../utils/fetchData';
import ProductItem from '../../../components/productItem';

export async function generateStaticParams() {
    const products = await fetchData();
    return products.map((product) => {
        id: product.id
    });
}

export default async function Page({
    params
}: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const product = await fetchData(id);

    return (
        <ProductItem product={product} />
    );
}