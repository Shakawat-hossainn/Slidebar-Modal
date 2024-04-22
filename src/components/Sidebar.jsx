import React from 'react'
import { useGlobalContext } from '../Context'
import logo from '../logo.svg'
import { FaTimes } from 'react-icons/fa'
import {links,social} from '../data'



const Sidebar = () => {
    const {isSideOpen,closeSide} = useGlobalContext()
  return (
    <>
    <article className={`${isSideOpen?'show-sidebar sidebar':'sidebar'}`}>
        <div className="sidebar-header">
            <img src={logo} alt="logo" />
            <button className="close-btn" onClick={closeSide}><FaTimes/></button>
        </div>
        <ul className="links">
          {links.map((link,index) => {
            const {id,url,text,icon} = link
            return(
              <li key={index}>
                <a href={url}>{icon}{text}</a>
              </li>
            )
            
          }
          )}
        </ul>
        <ul className="social-icons">
          {social.map((icons,index) => {
            const {id,url,icon} = icons
            return(
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            )
            
          }
          )}
        </ul>

    </article>
    
    </>
  )
}

export default Sidebar
