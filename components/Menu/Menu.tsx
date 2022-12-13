import React from "react";
import Link from "next/link";
import Image from "next/image";

export interface MenuProps {
    loggedIn: boolean;
}

export const Menu: React.FC<MenuProps> = ({
    loggedIn
}) => {
    const onButtonClick = () => {
        const menu = document.querySelector('#dropdown')
        if (!menu) {
            return null
        }
        menu.classList.toggle("hidden")
    }

    return (
        <div className="relative">
            <button 
                onClick={onButtonClick}
            >
                <Image 
                        src="/assets/img/fast-toon-account.svg" 
                        alt="Icon compte fast toon"
                        width={41}
                        height={44}
                />
            </button>
            {
                loggedIn == true ? (
                    <ul className="hidden absolute top- bg-gray-50 p-3" id="dropdown">
                        <li className="w-max">
                            <Link href="/account">Mon compte</Link>
                        </li>
                        <li className="w-max">
                            <Link href="/logout">Se déconnecter</Link>
                        </li>
                    </ul>
                ) : (
                    <ul className="hidden absolute" id="dropdown">
                    <li>
                        <Link href="/login">Se connecter</Link>
                    </li>
                </ul>
                )
            }
        </div>
    )
}