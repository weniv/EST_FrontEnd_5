import React from 'react'

export default function ImageList({ imageList }) {
    return (
        <ul>
            {
                imageList.map((img) => <li key={img.id}><img src={img.download_url} alt="" style={{ width: 300, height: 200 }} /></li>)
            }
            <li></li>
        </ul>
    )
}
