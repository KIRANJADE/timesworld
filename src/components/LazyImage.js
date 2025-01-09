import React, { Suspense, lazy } from 'react';
import Loader from './Loader';

const LazyImage = ({ src, alt, className }) => {
    const LazyLoadedImage = lazy(() =>
        Promise.resolve({
            default: () => <img src={src} alt={alt} className={className} loading="lazy" />,
        })
    );

    return (
        <Suspense fallback={<div className="image-placeholder"><Loader /></div>}>
            <LazyLoadedImage />
        </Suspense>
    );
};

export default LazyImage;
