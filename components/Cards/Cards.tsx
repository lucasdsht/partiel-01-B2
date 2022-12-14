import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface CardsProps {
    title ?: string;
    image : string
    alt : string
    accent : boolean
    productUrlName : string
    width : number
    height : number
}

export const Cards: React.FC<CardsProps> = ({
    title,
    image,
    alt,
    accent,
    productUrlName,
    width,
    height,
}) => {
    return (
        <Link
            href={`/products/${productUrlName}`}
            className='w-fit'
        >
            <div className="transition ease-linear delay-200 rounded-3xl mb-4 w-fit overflow-hidden shadow-lg shadow-black/40 origin-center hover:scale-110">
                <Image
                    src={image}
                    alt={alt}
                    width={width}
                    height={height}
                />
            </div>
            {
                accent ?(
                    <h3 className="font-accent text-primary text-2xl w-fit">En savoir plus</h3>
                ) 
                :(
                    <p className="text-center">{title}</p>
                )
            }
            
        </Link>
    )
}