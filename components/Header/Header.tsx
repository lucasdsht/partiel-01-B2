import React from 'react';
import Link from 'next/link';
import { Menu } from '../index';
import Image from 'next/image';


export interface HeaderProps {
    loggedIn: boolean;
}


export const Header: React.FC<HeaderProps> = ({
    loggedIn,
}) => {
    return (
        <header className='flex justify-between items-center px-20 py-5 bg-lightGray'>
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
            <nav className='flex justify-between items-center gap-10 md:gap-52'>
                <ul className='gap-20 hidden md:flex'>
                    <li>
                        <Link href="/products">La carte</Link>
                    </li>
                    <li>
                        <Link href="/about">A propos</Link>
                    </li>
                </ul>
                <div className='flex items-center gap-8'>
                    <Menu loggedIn={loggedIn}/>
                    <Link href="/cart" className='font-accent text-xl border border-primary rounded-3xl px-5 py-2'>Panier</Link>
                </div>
                <button className='flex flex-col gap-1 md:hidden'>
                    <span className='block w-8 h-1 bg-darkGray'></span>
                    <span className='block w-8 h-1 bg-darkGray'></span>
                    <span className='block w-8 h-1 bg-darkGray'></span>
                </button>
            </nav>
        </header>
    )
}

export default Header;