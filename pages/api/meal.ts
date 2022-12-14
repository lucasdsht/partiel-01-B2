import {
    NextApiRequest,
    NextApiResponse
} from 'next'
import {
    PrismaClient
} from '@prisma/client'

const prisma = new PrismaClient();

export default async function getAllCustomers(req: NextApiRequest, res: NextApiResponse) {    
    if (req.method !== 'GET') {
        res.status(405).json({
            message: 'Method not allowed'
        })
    }

    res.json(
        [
            {
            "name": "krabby Patty",
            "description": "lorem ipsum dolor sit amet",
            "price": 8,
            "src": "/assets/img/products/krabby-patty.jpg",
            "alt": "string",
            "width": 360,
            "height": 360,
            "urlName": "krabby-patty",
            "categorie": "handFood"
            },
            {
            "name": "Krusty burger",
            "description": "lorem ipsum dolor sit amet",
            "price": 8,
            "src": "/assets/img/products/krusty-burger.jpg",
            "alt": "string",
            "width": 360,
            "height": 360,
            "urlName": "krusty-burger",
            "categorie": "handFood"
            },
            {
            "name": "Sandwich parfait",
            "description": "lorem ipsum dolor sit amet",
            "price": 8,
            "src": "/assets/img/products/sandwich-parfait.jpg",
            "alt": "string",
            "width": 360,
            "height": 360,
            "urlName": "sandwich-parfait",
            "categorie": "handFood"
            },
            {
            "name": "pizzangelo",
            "description": "lorem ipsum dolor sit amet",
            "price": 8,
            "src": "/assets/img/products/pizzangelo.jpg",
            "alt": "string",
            "width": 360,
            "height": 360,
            "urlName": "pizzangelo",
            "categorie": "pizza"
            },
            {
            "name": "Frites",
            "description": "lorem ipsum dolor sit amet",
            "price": 2,
            "src": "/assets/img/products/frites.jpg",
            "alt": "string",
            "width": 360,
            "height": 360,
            "urlName": "frites",
            "categorie": "snacks"
            },
            {
            "name": "Scooby Snacks",
            "description": "lorem ipsum dolor sit amet",
            "price": 5,
            "src": "/assets/img/products/scooby-snacks.jpg",
            "alt": "string",
            "width": 360,
            "height": 360,
            "urlName": "scooby-snacks",
            "categorie": "snacks"
            },
            {
            "name": "homer donut",
            "description": "lorem ipsum dolor sit amet",
            "price": 3,
            "src": "/assets/img/products/homer-donuts.jpg",
            "alt": "image produit homer donut",
            "width": 360,
            "height": 360,
            "urlName": "homer-donut",
            "categorie": "dessert"
            }
        ]
    )
}