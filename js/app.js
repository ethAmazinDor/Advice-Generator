document.querySelector('button').addEventListener('click', getAdvice)
const adviceText = document.querySelector('h4')
const adviceNum = document.getElementById('adviceNum')


document.getElementById('search').addEventListener('click', getSearch)
const adviceMsg = document.querySelector('.adviceMessage')


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
    //const answers = document.querySelector('h5')
    const myList = document.getElementById('myList')
    myList.innerHTML = ''


    url = `https://api.adviceslip.com/advice/search/${search}`

    fetch(url)
        .then(res => res.json())
        .then((data) => data.slips)
        .then(data => {
            console.log(data)

            // adviceMsg.innerText = data.advice

            //loops through the array and displays the advice object in a list item
            data.forEach(slip => {


                let newListItem = document.createElement('li')
                newListItem.textContent = slip.advice
                myList.appendChild(newListItem)
                //  console.log(`${advice}: ${slip[advice]}`)


            })

        })
        .then(err => {
            console.log(err)
        })

}