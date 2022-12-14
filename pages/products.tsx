import Image from "next/image";
import React from "react";
import {
    Cards, CardsLayout
} from "../components";
import {
    server,
    prisma
} from '../config'

interface ProductProp {
    name: string
    description: string
    price: number
    src: string
    alt: string
    width: number
    height: number
    urlName: string
    categorie: "pizza" | "snacks" | "handFood" | "dessert"
}

export interface ProductListProps {
    data: ProductProp[]
}


export async function getServerSideProps() {
    const meals = await prisma.meal.findMany();
    console.log('Meals list >>>' ,meals)
    return {
        props: {
            data: meals
        }
    }
}


export const Products: React.FC<ProductListProps> = ({
    data
}) => {


    const handFood = data?.filter(res => res.categorie == 'handFood')
    const pizza = data?.filter(res => res.categorie == 'pizza')
    const snacks = data?.filter(res => res.categorie == 'snacks')
    const dessert = data?.filter(res => res.categorie == 'dessert')


    return (
        <>
            <h1>Notre carte</h1>

            <CardsLayout
                data={handFood}
                title="Burger et sandwich"
                image="/assets/img/icons/burger.svg"
                alt="icone burger"
                width={87}
                height={67}
            />
            <CardsLayout
                data={pizza}
                title="Pizza"
                image="/assets/img/icons/pizza.svg"
                alt="icone pizza"
                width={59}
                height={67}
            />
            <CardsLayout
                data={snacks}
                title="Snacks"
                image="/assets/img/icons/snack.svg"
                alt="icone snacks"
                width={59}
                height={67}
            />
            <CardsLayout
                data={dessert}
                title="Desserts"
                image="/assets/img/icons/dessert.svg"
                alt="icone desserts"
                width={74}
                height={67}
            />
        </>

    )
}

export default Products;