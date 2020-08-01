var quotes=['Be yourself; everyone else is already taken',
'Two things are infinite: the universe and human stupidity; and Im not sure about the universe',
'A room without books is like a body without a soul',
    'You only live once, but if you do it right, once is enough',
    'Be the change that you wish to see in the world',
    'To live is the rarest thing in the world. Most people exist, that is all',
    'All our dreams can come true, if we have the courage to pursue them',
    'Only the paranoid survive',
    'It’s hard to beat a person who never gives up'
]
function newQuote(){
    var randomnumber=Math.floor(Math.random()*(quotes.length));
    document.getElementById('quoteDisplay').innerHTML=quotes[randomnumber];
}