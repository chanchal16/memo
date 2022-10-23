import React from 'react'
import {AiOutlineBulb} from 'react-icons/ai';
import {RiInboxArchiveLine} from 'react-icons/ri';
import {IoTrashOutline} from 'react-icons/io5';
import {MdLabelOutline} from 'react-icons/md'
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  // const getClassName = ({isActive})=>{
  //   return isActive ? "link active" : "link"        
  // }
  return (
    <aside className='flex  gap-4 py-4 sidebar flex-col'>      
        <ul className='flex  gap-6 flex-col'>
            <NavLink to={'/'} className={`flex items-center gap-2 p-2 link active`}>
                <AiOutlineBulb size={'1.5em'} />
               <span className='text-xl'>Notes</span> 
            </NavLink>
            <NavLink to={'/archive'} className={`flex items-center gap-2 p-2 link`}>
                <RiInboxArchiveLine size={'1.5em'} />
                <span className='text-xl'>Archive</span>
            </NavLink>
            <NavLink to={'/trash'} className='flex items-center gap-2 p-2 link'>
                <IoTrashOutline size={'1.5em'} />
               <span className='text-xl'>Trash</span> 
            </NavLink>
        </ul>
        <span className='text-xl'>Labels</span>
        
    </aside>
  )
}
