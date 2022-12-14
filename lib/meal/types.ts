export interface ProductProps {
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