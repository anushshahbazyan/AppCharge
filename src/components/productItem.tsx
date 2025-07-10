import Image from 'next/image';

export default function ProductItem (props) {
    const product = props.product;
    return (
        <div className='flex flex-col flex-wrap'>
            <Image
                src={product.image}
                alt={product.title}
                width={300}
                height={200}
            />
            
            <div> { product.title } </div>
            <div> { product.price } </div>
            <div> { product.rating.rate } </div>
        </div>
    );
}