import { ImageResponse } from '@vercel/og';
import fetchData from '../../../utils/fetchData';
 
export const size = {
  width: 1200,
  height: 630,
};
 
export const contentType = 'image/png';
 
export default async function Image({ params }: { params: { id: number } }) {
  const product = await fetchData(params.id + '');
 
  return new ImageResponse(
    (
        <div
            style={{
                fontSize: 128,
                background: 'white',
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            {product.title}
        </div>
    )
  )
}