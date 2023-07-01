const characters = document.getElementById("char-list")

fetch("https://api.disneyapi.dev/character?page=3")
    .then(response => response.json())
    .then(charData => {
            const charArr = charData.data
            console.log(charArr)

            let html = ""

            for (let charInfo of charArr) {
                html += `
                    <h1>${charInfo.name}</h1>
                    <img class="char-img" src="${charInfo.imageUrl}">
                `
            }

            characters.innerHTML = html

       
        
    })
    