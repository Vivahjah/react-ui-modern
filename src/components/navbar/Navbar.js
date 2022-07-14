import React, {useState} from 'react'
import './navbar.css'
import Logo from  '../../assets/logo.svg'
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri'

const Navbar = () => {

const [toggleMenu, setToggleMenu] = useState(false);

const Menu = () => {
  return (
    <>
      <p><a href="#home">Home</a></p>
      <p><a href="#gpt3">What is GPT?</a></p>
      <p><a href="#possibility">Open AI</a></p>
      <p><a href="#features">Case Studies</a></p>
      <p><a href="#blog">Library</a></p>
    </>
  )
}

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navhar-links_logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {
          toggleMenu ? <RiCloseLine color='#ffff' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='#ffff' size={27} onClick={() => setToggleMenu(true)} />
        }
        {
          toggleMenu &&( <div className="scale-up-center gpt3__navbar-menu_container">
            <div className="gpt3__navbar-menu_container-links">
              <Menu />
              <div className="gpt3__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type='button'>Sign up</button>
              </div>
            </div>
          </div>)
        }
      </div>
    </div>
  )
}

export default Navbar