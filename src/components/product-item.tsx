import Image from 'next/image';

export default function ProductItem (props: any) {
    const product = props.product;
    
    return (
        <div className='flex flex-col items-center justify-center gap-2 p-4 border border-gray-500 rounded-xl h-96'>
            <Image
                src={product.image}
                alt={product.title}
                width={300}
                height={300}
                priority={false}
                className='aspect-square h-2/3'
            />
            
            <div> { product.title } </div>
            <div> { product.price } $ </div>
            <div> { product.rating.rate } / 5 </div>
        </div>
    );
}