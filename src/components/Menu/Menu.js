import React from 'react';
import { StyledMenu } from './Menu.styled';
import Hotline from '../../icon/hotline.svg';
import Help from '../../icon/help.svg'
import { slide as SideMenu } from 'react-burger-menu';
const Menu = () => {
    return (
        <SideMenu>
            <div>

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

            </div>
        </SideMenu>
        // <StyledMenu>
        // <div>

        // </div>
        // <div >
        //     <img src={Hotline} alt="Hotline Logo" />
        //     <span>
        //         <a href="/" className='menu-item'>
        //             Hotline
        //         </a>
        //         <a href="/" className='menu-item' style={{color: "darkblue", fontWeight: "bold"}}>
        //             18008989
        //         </a>
        //     </span>

        // </div>

        // <div >
        //     <img src={Help} alt="Help Logo" />
        //     <span>
        //         <a href="/" className='menu-item'>
        //             Trợ giúp
        //         </a>
        //         <a href="/" className='menu-item' style={{fontWeight: "bold"}}>
        //             hello@hrm.com
        //         </a>
        //     </span>

        // </div>
        // </StyledMenu>

    )
}
export default Menu;