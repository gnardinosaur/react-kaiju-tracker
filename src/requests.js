// headers --> use these at your own discretion
// const headers = {'Content-Type': 'application/json', 'Accepts': 'application/json'}
// urls
const kaijusURL = 'http://localhost:4000/kaijus/'
const sightingsURL = 'http://localhost:4000/sightings'
// parse incoming data
const parseData = response => response.json()
// error handler
const catchError = error => console.log(`%c${error}`, 'color: red;')

//////////////////////////////////////////////////////

// Fetches for kaijus, will return a promise
// GET /kaijus
export const fetchKaijus = () => fetch(kaijusURL)
.then(parseData)
.catch(catchError)

// TODO: define a few more kaiju fetches
export const postKaiju = (newKaiju) => fetch(kaijusURL, {
    method: "POST",
    headers: {
        "Accepts": "application/json",
        "Content-Type": "application/json"
    },
    body: JSON.stringify(newKaiju)
})
.then(parseData)

export const editKaiju = (edits, id) => fetch(`${kaijusURL}${id}`, {
    method: "PATCH",
    headers: {
        "Accepts": "application/json",
        "Content-Type": "application/json"
    },
    body: JSON.stringify(edits)
})
.then(parseData)

export const deleteKaiju = (id) => fetch(`${kaijusURL}${id}`, {
    method: "DELETE",
    headers: {
        "Accepts": "application/json",
        "Content-Type": "application/json"
    }
})
.then(parseData)


//////////////////////////////////////////////////////

// Fetches for sightings, will return a promise
// GET /sightings
export const fetchSightings = () => fetch(sightingsURL)
.then(parseData)
.catch(catchError)

// TODO: define a few more sighting fetches
