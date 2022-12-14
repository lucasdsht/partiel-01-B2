import React from "react";
import Image from "next/image";
import {
    Cards
} from '../index'
import {
    ProductProps
} from '../../lib'

export interface CardsLayoutProps {
    title: string;
    data: ProductProps[];
    width: number
    height: number
    image: string
    alt: string
}

export const CardsLayout: React.FC<CardsLayoutProps> = ({
    data,
    title,
    image,
    alt,
    width,
    height,
}) => {

    return (
        <section>
            <div>
                <div>
                    <Image
                        src={image}
                        alt={alt}
                        width={width}
                        height={height}
                    />
                </div>
                <h2 className="font-accent text-primary ">{title}</h2>
            </div>
            <div>
                {
                    data
                        ?
                        data.map((item, key) => {
                            return (
                                <Cards
                                    accent={false}
                                    title={item.name}
                                    image={item.src}
                                    alt={item.alt}
                                    width={item.width}
                                    height={item.height}
                                    productUrlName={item.urlName}
                                    key={key}
                                />
                            )
                        })
                        :
                        null
                }
            </div>
        </section>
    )
}