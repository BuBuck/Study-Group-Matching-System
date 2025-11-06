import '../../style/section/header.css'
import React from 'react';

import { AiFillGithub } from "react-icons/ai";


function Header() {

    return (
        <header id='header' role='banner'>
            <div className="header_list"></div>






            <div className='header_sns'>
                <ul>
                    <li>
                        <a href='https://github.com/BuBuck/Study-Group-Matching-System' rel='noopener noreferrer'>
                            <AiFillGithub />
                        </a>
                    </li>
                </ul>
            </div>
        </header>

    );
}

export default Header;