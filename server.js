const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;

app.use(cors());

app.use(express.json());
app.use(express.static('public'));

const jellyfish = {
    'lionsmane' : {
        'name' : 'Lion\'s Mane Jellyfish',
        'scientificName' : 'Cyanea capillata',
        'desc' : 'The lion\'s mane jellyfish is not only the largest jelly species in the world, but it also harbors a powerful sting that it uses to catch its prey. Most humans have little to fear from this ferocious jelly, but its poison is more than enough to scare away enemies, thus creating a safe space for both the jelly and other species that are lucky enough to be immune to the toxin.',
        'url' : 'https://www.animalspot.net/wp-content/uploads/2020/05/Lion%E2%80%99s-Mane-Jellyfish-Habitat.jpg',
        'url2' : 'https://www.americanoceans.org/wp-content/uploads/2021/02/lions-mane-jellyfish-1024x682.jpg',
        'video' : 'https://www.youtube.com/embed/C-Ar1canNvs',
        'location' : 'Colder oceans of the Northern Hemisphere',
        'howToIdentify' : 'A translucent brown to reddish jellyfish with a thick mane of hundreds of long hair-like tentacles; the oldest of which are coloured dark red. They have thick, frilled oral arms under the bell, most often brownish in colour.',
        'diameter' : '50 cm (In lower latitudes)',
        'fact1' : 'The largest individuals, which are found in the Arctic Ocean, measure as much as 2.4 metres (8 feet) in diameter and 36.5 metres (about 120 feet) in length—about 7 metres (about 23 feet) longer than the longest known blue whale. They typically live in the open ocean and are found drifting within 20m (65ft) of the surface.'
    },
    'moonjelly' : {
        'name' : 'Moon Jelly',
        'scientificName' : 'Aurelia aurita',
        'desc' : 'Moon Jellyfish are found in the coastal waters of the ocean and are known for their beautiful appearance. Also called \'saucer jellyfish\', it isn\'t yet fully understood by the scientists as to how long these jellyfish have been on the earth. These invertebrates are bioluminescent (glow in the dark). Moon jellies have short, delicate tentacles that hang down from the sides of the bell. They catch their plankton prey using a layer of mucus over their bells before passing the microscopic meals into their mouth parts using special tentacles.',
        'url' : 'https://critterfacts.com/wp-content/uploads/2020/06/Raising-Baby-Moon-Jellies.jpg',
        'url2' : 'https://www.montereybayaquarium.org/globalassets/mba/images/animals/invertebrates/moon-jelly-tr19-0303.jpg?format=webp&quality=70',
        'video' : 'https://www.youtube.com/embed/MWN-ktP8IB8',
        'location' : 'Coastal waters, particularly those of North America and Europe',
        'howToIdentify' : 'A round, dome-shaped jelly, translucent with four purple circular markings around the centre. You can usually see these jellyfish floating just below the surface of the water.',
        'diameter' : '25 - 40 cm (Adult)',
        'fact1' : 'Scientists believe that moon jellies and other jellies thrive in areas that are particularly affected by human activity. Overfishing, ocean warming, and pollution are all factors that reduce moon jellies\' predators and competitors and increase their prey. These results provide a more favorable environment for this species. As people continue to increase our ocean activities, the Moon Jelly may become one of the more successful species in the open ocean.'
    }, 
    'crystaljelly' : {
        'name' : 'Crystal Jelly',
        'scientificName' : 'Aequorea victoria',
        'desc' : 'Graceful and nearly transparent, this jelly has long, delicate tentacles. It can expand its mouth when feeding to swallow jellies more than half its size. When disturbed, it gives off a green-blue glow because of more than 100 tiny, light-producing organs surrounding its outer bell. This jelly is harvested for its luminescent aequorin, used in neurological and biological experiments to detect calcium.',
        'url' : 'https://www.montereybayaquarium.org/globalassets/mba/images/animals/invertebrates/crystal-jelly-rw10-464.jpg?format=webp&quality=70',
        'url2' : 'https://www.vichighmarine.ca/wp-content/uploads/2017/03/Aequorea-1030x600.jpg',
        'video' : 'https://www.youtube.com/embed/pF7ftI-_fMA',
        'location' : 'Pacific waters off the coast of North America',
        'howToIdentify' : 'They have many radial canals with more than one-hundred and fifty sticky tentacles that are laced with toxins that allow it to easily catch its varying prey. It also has gonads that follow along their radial canals. They are mostly transparent but under ultraviolet light there is a bioluminescent green ring around the bottom of their umbrella.',
        'diameter' : 'Up to 25 cm',
        'fact1' : 'Crystal jellyfish reproduce just like any other possible jellyfish as they can do so both sexually and asexually. They reproduce year-round leading to there being new young Medusae a minimum of every two days. Their polyps also tend to live in colonies, and can live up to more than 2 years.'
    },
    'friedegg' : {
        'name' : 'Fried Egg Jellyfish',
        'scientificName' : 'Cotylorhiza',
        'desc' : 'Fried Egg Jellyfish, sometimes also called Egg-Yolk Jellies, are jellyfish that sport a smooth translucent bell with an elevated yolk-yellow bell at the center. This distinctive bell is what gives this jellyfish their name, as it looks like a cracked egg floating through the water. This jellyfish spends a lot of time motionless, slowly pulsing its bell while drifting.',
        'url' : 'https://oceana.org/wp-content/uploads/sites/18/fried_egg_jellyfish_mediterranean_shutterstock_via_vojce-scaled.jpg',
        'url2' : 'https://www.ourbreathingplanet.com/wp-content/uploads/2020/01/Fried-Egg-Jellyfish.jpg',
        'video' : 'https://www.youtube.com/embed/huWE8jbyLFA',
        'location' : 'Primarily found in the Mediterranean, Adriatic, and Aegean Seas, but can sometimes swim out to the Atlantic Ocean',
        'howToIdentify' : 'The fried egg jellyfish has an average diameter of 16 inches but is usually less than 7 inches wide.Besides their smooth elevated dome that resembles a fried egg, they have appendages that are usually deep purple in color. The dome has transparent cilia all around it with varying appearances and lengths giving them a layered effect.',
        'diameter' : 'Up to 40 cm (usually under 17cm)',
        'fact1' : 'Fried egg jellyfish don\'t use their tentacles for swimming but instead use their dome to pulse as they swim though they prefer to remain motionless.'
    },
    'box' : {
        'name' : 'Box Jellyfish',
        'scientificName' : 'Chironex fleckeri',
        'desc' : 'Box jellies are highly advanced among jellyfish. They have developed the ability to move rather than just drift, jetting at up to four knots through the water. They also have eyes grouped in clusters of six on the four sides of their bell. Each cluster includes a pair of eyes with a sophisticated lens, retina, iris and cornea, although without a central nervous system, scientists aren\'t sure how they process what they see.',
        'url' : 'https://www.science.org/do/10.1126/science.aax8721/full/jelly_16x9.jpg',
        'url2' : 'https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2JveC1qZWxseS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgyOH0sInRvRm9ybWF0IjoiYXZpZiJ9fQ==',
        'video' : 'https://www.youtube.com/embed/YdXeCyfx_Ao',
        'location' : 'Coastal waters,  Northern Australia and throughout the Indo-Pacific',
        'howToIdentify' : 'They are pale blue and transparent in color and get their name from the cube-like shape of their bell. Up to 15 tentacles grow from each corner of the bell and can reach 10 feet in length. Each tentacle has about 5,000 stinging cells, which are triggered not by touch but by the presence of a chemical on the outer layer of its prey.',
        'diameter' : 'Up to 30 cm',
        'fact1' : 'The Australian Box Jellyfish\'s venom is among the most deadly in the world, containing toxins that attack the heart, nervous system, and skin cells. Of the 50 or so species of box jellyfish, also called sea wasps, only a few have venom that can be lethal to humans.'
    },
    'white-spotted' : {
        'name' : 'White-spotted Jellyfish',
        'scientificName' : 'Phyllorhiza punctata',
        'desc' : 'The White-spotted Jellyfish is an invasive species of jellyfish, also known as the floating bell, or Australian spotted jellyfish. It is native to the western Pacific from Australia to Japan, but has been introduced widely elsewhere. It feeds primarily on zooplankton. The bell of this large jellyfish may reach 50 cm in diameter. It is typically bluish-brown with many evenly distributed opaque white spots. It has eight thick transparent branching oral arms which terminate with large brown bundles of stinging cells.',
        'url' : 'https://www.calacademy.org/sites/default/files/styles/manual_crop_standard_960x540/public/uploads/1207/images?itok=byp4VX_N&c=fc8e4917f431857cbe59734aabb13533',
        'url2' : 'https://inaturalist-open-data.s3.amazonaws.com/photos/525142/large.jpg',
        'video' : 'https://www.youtube.com/embed/r_bLMrkmidQ',
        'location' : 'Coastal warm waters, primarily Australia and Phillipines but have migrated',
        'howToIdentify' : 'The White-spotted Jellyfish is easily recognised by the large, semi-transparent, rounded bell covered in regularly spaced, white dots. The trailing tentacles also end in whitened spots.',
        'diameter' : 'Up to 50 cm',
        'fact1' : 'Transported in the ballast of boats, it was accidentally introduced into the Gulf of Mexico. Considered an invasive species, it multiplied at an alarming rate, while consuming large quantities of fish eggs and larvae. '
    }, 
    'flowerhat' : {
        'name' : 'Flower Hat Jelly',
        'desc' : '',
        'url' : 'https://www.montereybayaquarium.org/globalassets/mba/images/animals/invertebrates/flower-hat-jelly.jpg?format=webp&quality=70',
        'location' : '',
        'howToIdentify' : '',
        'fact1' : ''
    }, 
    'jellyfish' : {
        'name' : '',
        'desc' : '',
        'url' : '',
        'location' : '',
        'howToIdentify' : '',
        'fact1' : 'Jellyfish are 95% water and have no brain, blood or heart.'
    }
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

