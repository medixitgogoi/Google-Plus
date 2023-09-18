import React from 'react';

const SkeletonSearchItem = () => {
    return (
        <div className='mb-2 md:mb-4'>
            <div className='py-3'>
                <div className='w-[150px] md:w-[250px] h-[13px] rounded-sm bg-slate-200' />
                <div className='mt-1 w-[200px] md:w-[300px] h-[20px] rounded-sm bg-slate-200' />
            </div>
            <div className='mt-1 w-[330px] md:w-[700px] lg:w-[800px] h-[15px] rounded-sm bg-slate-200' />
            <div className='mt-1 w-[330px] md:w-[700px] lg:w-[800px] h-[15px] rounded-sm bg-slate-200' />
        </div>
    )
}

const Skeleton = () => {
    return (
        <main className='p-[12px] pb-0 md:pr-5 md:pl-20 animate-pulse'>
            <div className='mb-3 w-[200px] h-[13px] rounded-sm bg-slate-200' />
            
            <SkeletonSearchItem />
            <SkeletonSearchItem />
            <SkeletonSearchItem />
            <SkeletonSearchItem />
            <SkeletonSearchItem />

        </main>
    );
}

export default Skeleton;
