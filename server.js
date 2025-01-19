const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const mockDatabase = [
    { id: "12345", name: "PlayerName123", rank: "Mythic", server: "SEA" },
    { id: "67890", name: "PlayerTwo", rank: "Legend", server: "NA" },
    { id: "54321", name: "PlayerThree", rank: "Epic", server: "EU" }
];

app.get('/search', (req, res) => {
    const playerID = req.query.id;
    const player = mockDatabase.find(p => p.id === playerID);

    if (player) {
        res.json(player);
    } else {
        res.status(404).json({ error: "Player not found." });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
