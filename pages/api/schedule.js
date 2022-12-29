import { data } from '../../data/data.js'

export default async (req, res) => {
    res.status(200).json(data[0]["schedule"]);
}