import { data } from '../../../data/data.js'

export default async (req, res) => {
    const teamName = req.query.teamName;
    const teams = data[0]["teams"];
    const result = teams.filter((team) => team.teamName === teamName);
    
    if (result.length > 0) {
        res.status(200).json(result[0]);
    }
    else {
        res.status(404).json({ message: `team not found`})
    }
}