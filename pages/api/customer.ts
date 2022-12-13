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

    res.json({
        firstname: "",
        lastname: "",
        email: "",
    })
}