import React from 'react'
import "./SidebarOption.css"

export default function SidebarOption({ title }) {
    return (
        <div className='sidebarOption'>
            <p>{title}</p>
        </div>
    )
}
