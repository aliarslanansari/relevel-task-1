import React, { lazy, Suspense } from 'react'
import Spinner from '../components/Spinner'

const lazyLoader = (
  importFunc: () => Promise<any>,
  fallback?: (props: any) => JSX.Element
) => {
  const LazyComponent = lazy(importFunc)

  return (props: any) => (
    <Suspense
      fallback={
        fallback || (
          <div
            style={{
              width: 100,
              margin: '0 auto',
              position: 'absolute',
              top: '50%',
              left: '50%',
              marginTop: '-12px',
              marginLeft: '-12px',
              fontSize: '2rem',
              color: '#3355ff',
            }}>
            <Spinner />
          </div>
        )
      }>
      <LazyComponent {...props} />
    </Suspense>
  )
}

export default lazyLoader
