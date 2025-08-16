let turn = 'x'
let title= document.querySelector('.title-name')
let squares =[]
let edit;
let btn = document.getElementById('btn')
// console.log(title);


function theEnd(num1,num2,num3){
        title.innerHTML = `${squares[num1].toUpperCase()} is winner`
        console.log('hello');
        document.getElementById('item'+num1).style.backgroundColor='#000'
        document.getElementById('item'+num2).style.backgroundColor='#000'
        document.getElementById('item'+num3).style.backgroundColor='#000'
        setInterval(function(){title.innerHTML+='.'},1000)
        setTimeout(function(){location.reload()},1000)
}

function fair(){
    title.innerHTML = `${squares[num1].toUpperCase()} is winner`
    console.log('hello');
    setInterval(function(){title.innerHTML+='.'},1000)
    setTimeout(function(){location.reload()},1000)
}

function winner(){
    for(let i=1; i<10; i++){
      squares[i]= document.getElementById('item' + i).innerHTML
    }
    //console.log(squares);
    if(squares[1]==squares[2]&&squares[2] == squares[3] && squares[1]!='')[
        theEnd(1,2,3)
    ]
    else if(squares[4]==squares[5] &&squares[5]== squares[6]&& squares[4]!='')[
        theEnd(4,5,6)
    ]
    else if(squares[7]==squares[8] &&squares[8]== squares[9]&& squares[7]!='')[
        theEnd(7,8,9)
    ]
    else if(squares[1]==squares[5] &&squares[5]== squares[9]&& squares[1]!='')[
        theEnd(1,5,9)
    ]
    else if(squares[3]==squares[5] &&squares[5]== squares[7]&& squares[3]!='')[
        theEnd(3,5,7)
    ]
    else if(squares[1]==squares[4] &&squares[4] == squares[7]&& squares[1]!='')[
        theEnd(1,4,7)
    ]
    else if(squares[2]==squares[5] && squares[5] == squares[8]&& squares[5]!='')[
        theEnd(2,5,8)
    ]
    else if(squares[3]==squares[6] &&squares[6] == squares[9]&& squares[3]!='')[
        theEnd(3,6,9)
    ]
    //fair
   let full = true
    for(let i=1; i<10; i++){
        if(squares[i] === '') {
            full = false
            break
        }
    }
    if(full) {
        title.innerHTML = "It's a Draw!"
        setTimeout(() => location.reload(), 2000)
    }
}

function WriteTurn(id){
    let item = document.getElementById(id)

    if(turn === 'x' && item.innerHTML===''){
        item.innerHTML = 'x'      
        turn ='o'                 
        title.innerHTML=`Turn ${turn.toUpperCase()}`
    }
    else if(turn === 'o' && item.innerHTML===''){
        item.innerHTML = 'o'
        turn = 'x'
        title.innerHTML=`Turn ${turn.toUpperCase()}`
    }
  
    winner();
}
btn.onclick = function(){
    location.reload()
}