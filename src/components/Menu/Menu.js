import React from 'react';
import { StyledMenu } from './Menu.styled';
import { bool, func } from 'prop-types';
import Hotline from '../../icon/hotline.svg';
import Help from '../../icon/help.svg'
// import { slide as SideMenu } from 'react-burger-menu';
const Menu = ({ open }) => {
    return (

        <StyledMenu open={open}>
            <a href="/">
                <span role="img" aria-label="about us">&#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;</span>
                About us
            </a>
            <a href="/">
                <span role="img" aria-label="price">&#x1f4b8;</span>
                Pricing
            </a>
            <a href="/">
                <span role="img" aria-label="contact">&#x1f4e9;</span>
                Contact
            </a>
            {/* <div>

            </div>
            <div >
                <img src={Hotline} alt="Hotline Logo" />
                <span>
                    <a href="/" className='menu-item'>
                        Hotline
                    </a>
                    <a href="/" className='menu-item' style={{ color: "darkblue", fontWeight: "bold" }}>
                        18008989
                    </a>
                </span>

            </div>

            <div >
                <img src={Help} alt="Help Logo" />
                <span>
                    <a href="/" className='menu-item'>
                        Trợ giúp
                    </a>
                    <a href="/" className='menu-item' style={{ fontWeight: "bold" }}>
                        hello@hrm.com
                    </a>
                </span>

            </div> */}
        </StyledMenu>

    )
}
Menu.propTypes = {
    open: bool.isRequired,
}
export default Menu;