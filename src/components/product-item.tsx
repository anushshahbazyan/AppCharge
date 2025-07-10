import Image from 'next/image';

export default function ProductItem (props: any) {
    const product = props.product;
    const size = props.size;

    const className = `flex flex-col items-center justify-center gap-2 p-4 ${size === 'small' ? 'border border-gray-500 rounded-xl h-96' : ''}`;
    const imageSize = size === 'small' ? 300 : 500;
    
    return (
        <div className={className}>
            <Image
                src={product.image}
                alt={product.title}
                width={imageSize}
                height={imageSize}
                priority={false}
                className='aspect-square h-2/3'
            />
            
            <div> { product.title } </div>
            <div> { product.price } $ </div>
            <div> { product.rating.rate } / 5 </div>
        </div>
    );
}