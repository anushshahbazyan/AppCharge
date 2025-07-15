import { Suspense } from 'react';
import ErrorBoundary from '../components/error-boundary';
import Products from '../components/products-list';

export default function Page() {
    return (
        <main>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 p-6'>
                <ErrorBoundary fallback={<h2>Something went wrong!</h2>}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Products />
                    </Suspense>
                </ErrorBoundary>
            </div>
        </main>
    );
};