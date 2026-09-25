'use client'
import { blog_data } from '@/Assets/assets';
import React, { use, useEffect, useState } from 'react'


const page = ({ params }) => {
    const { id } = use(params)
    const [data, setData] = useState(null);

    const fetchBlogData = () => {
        for(let i=0; i<blog_data.length; i++) {
            if (Number(id) === blog_data[i].id) {
                setData(blog_data[i]);
                console.log(blog_data[i]);
                break;
            }
        }
    }

    useEffect(() => {
      fetchBlogData();
    }, [id])
    

    return (
        <div>
            {id}
        </div>
    )
}

export default page