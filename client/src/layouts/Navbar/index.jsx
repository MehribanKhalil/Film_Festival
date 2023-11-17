import React from 'react'
import styles from './index.module.scss'
import { FaInstagram ,FaYoutube,FaVimeoV,FaTwitter} from "react-icons/fa";
import { TiSocialVimeo } from "react-icons/ti";
const Navbar = () => {
  return (
   <>
       <div className={styles.navbar}>
        <div className={styles.navbar_toggle_btn}>
          
        </div >

        <div className={styles.navbar_logo}>
          <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/12/logo-width-20px.png" alt="" />
        </div>


        <div className={styles.social_media_icons}>
          <FaInstagram/>
          <FaYoutube />
          <FaVimeoV />
          <FaTwitter />
        </div>

      </div>


   </>
  )
}

export default Navbar