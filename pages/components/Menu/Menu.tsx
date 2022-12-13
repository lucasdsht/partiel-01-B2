import React from "react";
import Link from "next/link";

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
                <div className="rounded-full w-10 h-10 bg-gray-500"></div>
            </button>
            {
                loggedIn == true ? (
                    <ul className="hidden absolute" id="dropdown">
                        <li>
                            <Link href="/account">Mon compte</Link>
                        </li>
                        <li>
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