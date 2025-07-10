import fetchData from '../utils/fetchData';
import { Product } from '../utils/types';
import ProductItem from '../components/productItem';

export default async function Page() {
    const products: Product[] = await fetchData();

    return (
        <main className='flex flex-col'>
            {
                products.map((product: Product) => {
                    return (
                        <ProductItem
                            key={product.id}
                            product={product}
                        />
                    );
                })
            }
        </main>
    )
}