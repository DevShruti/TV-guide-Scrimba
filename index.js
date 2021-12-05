/* 
    TV Guide
    
    Write an async function called findShow(query)
        performs a fetch call to:
        https://api.tvmaze.com/singlesearch/shows?q=${query}&embed=seasons
        and returns the resulting show object
        
    Build a layout to display the show
        - Title
        - Summary
        - Seasons listed as individual divs
*/
async function findShow(query){
    let response = await fetch(`https://api.tvmaze.com/singlesearch/shows?q=${query}&embed=seasons`)
    let data = await response.json()
    return data
}

findShow('friends').then(show =>{
    console.log(show)
    document.body.innerHTML = `<div class = "the-show">
    <div class = "show-title">${show.name}</div>
    <div class = "show-summary">${show.summary}</div>
     ${show._embedded.seasons.map(season =>{
         return `<div class ="show-season"> Season ${season.number}</div>`}).join('')
         
         }
         
    </div>
    `
})