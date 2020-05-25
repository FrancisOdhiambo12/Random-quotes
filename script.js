let btn = document.getElementById("btn"); 
let output = document.getElementById("output");
let quotes = [
    '“The purpose of our lives is to be happy.” — Dalai Lama',

     '“Life is what happens when you’re busy making other plans.” — John Lennon',
    
     '“Get busy living or get busy dying.” — Stephen King',
    
     '“You only live once, but if you do it right, once is enough.” — Mae West',
    
     '“Many of life’s failures are people who did not realize how close they were to success when they gave up.”– Thomas A. Edison',
     '"If you want to live a happy life, tie it to a goal, not to people or things.”– Albert Einstein',

     '“Never let the fear of striking out keep you from playing the game.”– Babe Ruth',
     
     '“Money and success don’t change people; they merely amplify what is already there.” — Will Smith',
     
     '“Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.” – Steve Jobs',
     '“The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.”– Henry Ford',
];

btn.addEventListener("click", async () => {
        const response = await fetch('https://api.quotable.io/random')
        const data = await response.json()
        console.log(`${data.content} —${data.author}`)
    output.innerHTML = `${data.content} —${data.author}`
})
