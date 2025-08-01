// Variables

let newQuote = document.querySelector('.quote')
let person = document.querySelector('.person')
let btn = document.querySelector('#new-quote')

const quotes = [{
    newQuote:`“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”`,
    person:`Marilyn Monroe`
},{
    newQuote:`“So many books, so little time.”`,
    person:`Frank Zappa`
},
{
    newQuote:`“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
    person:`Albert Einstein`
},
{
    newQuote:`“A room without books is like a body without a soul.”`,
    person:`Marcus Tullius Cicero`
},
{
    newQuote:`“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”`,
    person:`Bernard M. Baruch`
},
{
    newQuote:`“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”`,
    person:`Dr. Seuss`
},
{
    newQuote:`“You only live once, but if you do it right, once is enough.”`,
    person:`Mae West`
},
{
    newQuote:`Be the change that you wish to see in the world.”`,
    person:`Mahatma Gandhi`
},
{
    newQuote:`“Don’t walk in front of me… I may not follow
    Don’t walk behind me… I may not lead
    Walk beside me… just be my friend”`,
    person:`Albert Camus`
},
{
    newQuote:`“In three words I can sum up everything I've learned about life: it goes on.”`,
    person:`Robert Frost`
},
{
    newQuote:`“If you tell the truth, you don't have to remember anything.”`,
    person:`Mark Twain`
},
];

btn.addEventListener("click",function(){
    let random=Math.floor(Math.random()*quotes.length)

    newQuote.innerText = quotes[random].newQuote;
    person.innerText = quotes[random].person;
})