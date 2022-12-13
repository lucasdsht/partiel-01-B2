import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
    return (
        <footer className="flex gap-14 py-14 pl-16 bg-darkGray text-white">
            <div>
                <Link href="/">
                    <Image 
                        src="/assets/img/logo-fast_toon_bichromie.svg" 
                        alt="logo Fast Toon noir et blanc"
                        width={106}
                        height={87}
                    />
                </Link>
            </div>
            <nav className="flex items-start gap-48 ">
                <ul>
                    <li>
                        <Link href="/products">La carte</Link>
                    </li>
                    <li>
                        <Link href="/about">A propos</Link>
                    </li>
                    <li>
                        <Link href="/account">Mon compte</Link>
                    </li>
                    <li>
                        <Link href="/cart">Panier</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link href="">Instagram</Link>
                    </li>
                    <li>
                        <Link href="">Facebook</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link href="">Télécharger l’application (google play)</Link>
                    </li>
                    <li>
                        <Link href="">Télécharger l’application (Apple store)</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link href="">Mentions légales</Link>
                    </li>
                    <li>
                        <Link href="">Cookies</Link>
                    </li>
                    <li>
                        <Link href="">Conditions de ventes</Link>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer