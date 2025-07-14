import Image from 'next/image';
import { Product } from '../utils/types';

export default function ProductItem (props: { product: Product, size: string, }) {
    const product = props.product;
    const size = props.size;

    const className = `flex flex-col items-center justify-center gap-2 p-4 ${size === 'small' ? 'border border-gray-500 rounded-xl h-96' : ''}`;
    const imageWidth = size === 'small' ? 300 : 600;
    const imageHeight = size === 'small' ? 400 : 800;
    
    return (
        <div className={className}>
            <Image
                src={product.image}
                alt={product.title}
                width={imageWidth}
                height={imageHeight}
                loading='lazy'
                priority={false}
                className='aspect-3/4 h-3/4'
            />
            
            <div> { product.title } </div>
            <div> { product.price } $ </div>
            <div> { product.rating.rate } / 5 </div>
        </div>
    );
}