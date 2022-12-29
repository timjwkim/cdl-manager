import { data } from '../../../data/data.js'

export default async (req, res) => {
    const teams = data[0]["teams"];
    res.status(200).json(teams);
}