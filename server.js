const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;

app.use(cors());

app.use(express.json())
app.listen(express.static('public'))

const jellyfish = {
    'lionsmane' : {
        'name' : 'Lion\'s Mane Jellyfish',
        'desc' : 'The lion\'s mane jellyfish is not only the largest jelly species in the world, but it also harbors a powerful sting that it uses to catch its prey. Most humans have little to fear from this ferocious jelly, but its poison is more than enough to scare away enemies, thus creating a safe space for both the jelly and other species that are lucky enough to be immune to the toxin.',
        'url' : 'https://www.animalspot.net/wp-content/uploads/2020/05/Lion%E2%80%99s-Mane-Jellyfish-Habitat.jpg',
        'location' : 'Colder oceans of the Northern Hemisphere',
        'howToIdentify' : 'A translucent brown to reddish jellyfish with a thick mane of hundreds of long hair-like tentacles; the oldest of which are coloured dark red. They have thick, frilled oral arms under the bell, most often brownish in colour.',
        'fact1' : 'The largest individuals, which are found in the Arctic Ocean, measure as much as 2.4 metres (8 feet) in diameter and 36.5 metres (about 120 feet) in length—about 7 metres (about 23 feet) longer than the longest known blue whale. They typically live in the open ocean and are found drifting within 20m (65ft) of the surface.'
    },

}

app.get('/', (req, res) =>  {
    res.sendFile(__dirname + '/index.html');
})

app.get('/api/:jellyType', (req, res) => {
    const jellyfishType = req.params.jellyType.toLowerCase();

    if (jellyfish[jellyfishType]) {
        res.json((jellyfish[jellyfishType]));
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is listening on ${PORT}.`)
})

