let btn=document.querySelector('#new-quote');
let quote=document.querySelector('.quote');
let person=document.querySelector('.person');

const data=[
    {
        quote:"Patience is not the ability to wait, but the ability to keep a good attitude while waiting.",
        person:"JOYCE MEYER"
    },
    {
        quote:"Nature does not hurry, yet everything is accomplished.",
        person:"Lao Tzu"
    },
    {
        quote:"Slow down and enjoy life. It's not only the scenery you miss by going too fast, you also miss the sense of where you are going and why.",
        person:"Eddie Cantor"
    },
    {
        quote:"Do not be in a hurry; do everything quietly and in a calm spirit. Do not lose your inner peace for anything whatsoever, even if your whole world seems upset.",
        person:"Saint Francis de Sales"
    },
    {
        quote:"Rivers know this: There is no hurry. We shall get there someday.",
        person:"A.A. Milne"
    },
    {
        quote:"The quieter you become, the more you can hear.",
        person:"Rumi"
    }
];

let prev=-1;

btn.addEventListener("click",()=>{
    btn.innerText="New Quote"
    // New random number
    let number= Math.floor(Math.random()*data.length);
    
    // To always get another quote. 
    if(number==prev){
        number=Math.floor(Math.random()*data.length);
    }
    else{
        prev=number;
    }
    quote.innerText=data[number].quote;
    person.innerText=data[number].person;
});
