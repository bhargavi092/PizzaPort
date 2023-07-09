import React,{useEffect, useState} from 'react'
import logo from '../assets/kisspng-pizza-delivery-italian-cuisine-chef-clip-art-delivery-pizza-5b0c43dab69f59.269617461527530458748.png'
import {Link} from 'react-router-dom';
import ReorderIcon from '@material-ui/icons/Reorder';
import '../styles/Navbar.css';

function Navbar() {

    const [sticky,setSticky]=useState(false)

    useEffect(()=>{
        const handleScroll=()=>{
            if(window.scrollY>0){
                setSticky(true)
            }
            else{
                setSticky(false)
            }
            
            // console.log(window.scrollY)
        };
        window.addEventListener('scroll',handleScroll)
        return ()=> window.removeEventListener('scroll',handleScroll)
    })

    const [openLinks,setOpenLinks]=useState(false)
    const toggleNavbar=()=>{
        setOpenLinks(!openLinks)
    }

  return (
    <nav className={`${sticky ? 'sticky': ''}`}>
        <div className='navbar' >
            <div className='leftSide' id={openLinks?'open':'close'}>
                <img src={logo}/>
                <div className='hiddenLinks'>
                    <Link to='/'>Home</Link>
                    <Link to='/menu'>Menu</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/contact'>Contact</Link>
                </div>
            </div>
            
            <div className='rightSide'>
                <Link to='/' smooth>Home</Link>
                <Link to='/menu' smooth>Menu</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
                <button onClick={toggleNavbar}>
                    <ReorderIcon />
                </button>

            </div>
        </div>
    </nav>
  
  )
}

export default Navbar