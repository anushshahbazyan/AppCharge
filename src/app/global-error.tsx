'use client'; // since using useEffect and interactivity makes it a client component
 
import { useEffect } from 'react';
 
export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error]);
    
    return (
        <html>
            <body>
                <div>
                    <h2>Something Went Wrong!</h2>
                    <button
                        onClick={ () => reset() }
                    >
                        Reload the Page
                    </button>
                </div>
            </body>
        </html>
    );
}