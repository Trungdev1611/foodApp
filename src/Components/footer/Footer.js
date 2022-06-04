import React from 'react'
import './footer.scss'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import FeedIcon from '@mui/icons-material/Feed';
import ApartmentIcon from '@mui/icons-material/Apartment';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <div className='footer'>

      <div className='footer-wrapper-top'>
        <div className="footer-time">
          <table>
            <tbody>
              <tr>
                <td>Sunday</td>
                <td><MoreHorizIcon className='icon' /></td>
                <td className='color-hightligh'>Closed</td>
              </tr>
              <tr>
                <td>Monday</td>
                <td><MoreHorizIcon className='icon' /></td>
                <td className='color-hightligh'>8.00-20.00</td>
              </tr>
              <tr>
                <td>Monday</td>
                <td><MoreHorizIcon className='icon' /></td>
                <td className='color-hightligh'>10.00-5.00</td>
              </tr>
              <tr>
                <td>Monday</td>
                <td><MoreHorizIcon className='icon' /></td>
                <td className='color-hightligh'>12.00-9.00</td>
              </tr>
              <tr>
                <td>Monday</td>
                <td><MoreHorizIcon className='icon' /></td>
                <td className='color-hightligh'>7.00-1.00</td>
              </tr>
              <tr>
                <td>Monday</td>
                <td><MoreHorizIcon className='icon' /></td>
                <td className='color-hightligh'>9.00-12.00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="footer-address">
          <h3 className="heading">Address</h3>
          <div className="info"><span><PhoneInTalkIcon className='info-icon' /></span> +449 888 666 0000</div>
          <div className="info"><span><FeedIcon className='info-icon' /></span> foodg@gmail.com</div>
          <div className="info"><span><ApartmentIcon className='info-icon' /></span> New York, Lincolnshirek</div>
          <div className="icon">
            <span><FacebookIcon className=' logo-icon facebook' /></span>
            <span ><TwitterIcon className=' logo-icon twiter' /></span>
            <span ><InstagramIcon className=' logo-icon instagram' /></span>
            <span ><YouTubeIcon className=' logo-icon youtube' /></span>
          </div>
        </div>
      </div>
      {/* <div className="footer-map" >

        <img src={map} alt="" />
      </div> */}
    </div>
  )
}

export default Footer