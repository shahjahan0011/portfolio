import './index.scss';
import logoJ from '../../../assets/images/logoJ.png';
// import { useEffect, useState } from 'react'

const Logo = () => {

  // const [animate, setAnimate] = useState(false);

  // useEffect(() => {
  //   const timeoutId = setTimeout(() => {
  //     setAnimate(true)
  //   }, 100)
  //   // small delay to trigger animation after mount
  //   return () => clearTimeout(timeoutId);
  // }, [])

  return (
    <div className="logo-container">
      <img
        className="solid-logo"
        src={logoJ}
        alt="Logo J"
      />
    </div>
  )
}

export default Logo;