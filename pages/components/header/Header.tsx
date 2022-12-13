import React from 'react';
import Link from 'next/link';
import { Menu } from '../Menu/Menu';
import Image from 'next/image';


export interface HeaderProps {
    loggedIn: boolean;
}


export const Header: React.FC<HeaderProps> = ({
    loggedIn = false,
}) => {
    return (
        <header className='flex justify-between items-center'>
            <div>
                <Link href="/">
                    <Image 
                        src="/assets/img/logo-fast_toon.svg" 
                        alt="logo Fast Toon"
                        width={80}
                        height={65}
                    />
                </Link>
            </div>
            <nav className='flex justify-between items-center gap-10'>
                <ul className='flex gap-4'>
                    <li>
                        <Link href="/about">Notre Entreprise</Link>
                    </li>
                    <li>
                        <Link href="/products">Produits</Link>
                    </li>
                </ul>
                <div className='flex items-center gap-4'>
                    <Link href="/cart">
                        <img src="" alt="cart icon" />
                    </Link>
                    <Menu loggedIn={loggedIn}/>
                </div>
            </nav>
        </header>
    )
}

export default Header;