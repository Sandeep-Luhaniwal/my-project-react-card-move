import React, { useRef } from 'react'
import NewCards from './NewCards'

export const Forground = () => {
    const ref = useRef(null);
    const data = [
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
            filesize: ".9mb",
            close: true,
            tag: { isOpen: true, tagTile: "download Now", tagcolor: "green" }
        },
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
            filesize: ".9mb",
            close: true,
            tag: { isOpen: true, tagTile: "download Now", tagcolor: "blue" }
        },
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
            filesize: ".9mb",
            close: true,
            tag: { isOpen: false, tagTile: "upload", tagcolor: "green" }
        },
    ]
    return (
        <>
            <div ref={ref} className='fixed w-full h-full z-20 top-0 left-0 flex gap-8 flex-wrap p-5'>

                {data.map((item, index) => {
                    return (
                        <NewCards data={item} refrence={ref} />
                    )
                })}
            </div>
        </>
    )
}
