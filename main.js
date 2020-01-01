let res = {}
let baseURL = "https://api.imgflip.com/get_memes"

    axios.get(baseURL)
    .then(function(result) {
        res = result.data
     results = res.data.memes
        document.getElementById("outputinfo").innerHTML = ""
        results.forEach( element => {
     
       document.getElementById("outputinfo").innerHTML += 
        `
       <p> Name: ${element.name} </p>
       <img src=${element.url}  height="${element.height}" width="${element.width}">
       
        `
    //    }
        })
    })
   
   
    // ${element.films.map((e)  =>`<li><a href=" ${e}">${e}</a> </li>` )}  