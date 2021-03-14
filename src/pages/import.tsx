/**
 * @description 动态加载
 */
import React, { Suspense } from 'react'

const Demo = React.lazy(() => import('../components/demo'))

function DynamicImport() {
    return (
        <div>
            <div>动态加载</div>
            <Suspense fallback={<div>Loading...</div>}>
                <Demo />
            </Suspense>
        </div>
    )
}

export default DynamicImport;
