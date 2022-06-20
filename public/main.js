document.querySelector('.submit').addEventListener("click", function(event){
    event.preventDefault()
  });

document.querySelector('.submit').addEventListener('click', getJelly)


async function getJelly() {
    const jellyType = document.querySelector('#jellyfishType').value
    try {
        const res = await fetch(`/api/${jellyType}`) 
        const data = await res.json()
        console.log(data)

        document.querySelector('.jellyCard').style.display = 'flex'
        document.querySelector('.jellyImgContainer').style.backgroundImage = `url('${data.url}')`
        document.querySelector('.jellyImg').src = data.url
        document.querySelector('.jellyVid').src = data.video
        document.querySelector('.jellyName').innerText = data.name
        document.querySelector('.scientificName').innerText = data.scientificName
        document.querySelector('.jellyDesc').innerText = data.desc
        document.querySelector('.jellyLocation').innerText = data.location
        document.querySelector('.jellyIdentify').innerText = data.howToIdentify
        document.querySelector('.jellyDiameter').innerText = data.diameter
        document.querySelector('.jellyFact1').innerText = data.fact1
        document.querySelector('.jellyImg2').src = data.url2

        document.querySelector('.jellyImgContainer').addEventListener('mouseover', () => {
            document.querySelector('.jellyImgContainer').style.backgroundImage = `url('${data.url2}')`
        })
        document.querySelector('.jellyImgContainer').addEventListener('mouseleave', () => {
            document.querySelector('.jellyImgContainer').style.backgroundImage = `url('${data.url}')`
        })

    } catch(error) {
        console.log(error)
    }
      
}
