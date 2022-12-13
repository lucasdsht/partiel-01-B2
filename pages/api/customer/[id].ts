import {
    NextApiRequest,
    NextApiResponse
} from 'next'

export default function getCustomerById(req: NextApiRequest, res: NextApiResponse) {
    res.json({
        byId: req.query.id,
        message: "getCustomerById",
    })
}