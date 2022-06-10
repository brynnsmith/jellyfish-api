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

        document.querySelector('.jellyImg').src = data.url
        document.querySelector('.jellyName').innerText = data.name
        document.querySelector('.jellyDesc').innerText = data.desc
        document.querySelector('.jellyLocation').innerText = data.location
        document.querySelector('.jellyIdentify').innerText = data.howToIdentify
        document.querySelector('.jellyFact1').innerText = data.fact1

    } catch(error) {
        console.log(error)
    }
      
}