document.querySelector('button').addEventListener('click', getAdvice)
const adviceText = document.querySelector('h4')
const adviceNum = document.getElementById('adviceNum')


document.getElementById('search').addEventListener('click', getSearch)
const adviceMsg = document.querySelector('h5')


function getAdvice() {
    url = 'https://api.adviceslip.com/advice'

    fetch(url)
        .then(res => res.json())
        .then((data) => data.slip)
        .then(data => {
            console.log(data)
            adviceNum.innerText = data.id
            adviceText.innerText = data.advice

        })
        .then(err => {
            console.log(err)
        })
}

function getSearch() {
    const search = document.querySelector('input').value

    url = `https://api.adviceslip.com/advice/search/${search}`

    fetch(url)
        .then(res => res.json())
        .then((data) => data.slips)
        .then(data => {
            console.log(data)
            adviceMsg.innerText = data.advice


        })
        .then(err => {
            console.log(err)
        })

}