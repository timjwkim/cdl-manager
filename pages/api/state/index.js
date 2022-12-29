import { data } from '../../../data/data.js'

export default async (req, res) => {
    if (req.method === "GET") {
        res.status(200).json(data);
    }
    else if (req.method === "POST") {
        const state = req.body['file'];
        data.push(state);
        res.status(201).json(state);
    }
}