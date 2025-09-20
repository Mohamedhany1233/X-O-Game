let turn = 'x'
let title= document.querySelector('.title-name')
let squares =[]
let btn = document.getElementById('btn')
let x_winners_span = document.querySelector('.title .win .x-wins')
let o_winners_span = document.querySelector('.title .win .o-wins')
let x_wins = 0;
let o_wins = 0;
// console.log(title);


//set wins in local storage

if (localStorage.getItem('x-wins')) {
    x_wins = JSON.parse(localStorage.getItem('x-wins'))
    x_winners_span.innerHTML = JSON.parse(localStorage.getItem('x-wins'))
}

if (localStorage.getItem('o-wins')) {
    o_wins = JSON.parse(localStorage.getItem('o-wins'))
    o_winners_span.innerHTML = JSON.parse(localStorage.getItem('o-wins'))
}

function theEnd(num1,num2,num3){
    title.innerHTML = `${squares[num1].toUpperCase()} is winner`
    WriteTurn = () => {}
    //handle winner
    whoIsWin(squares[num1])

    //paint background color items
    document.getElementById('item'+num1).style.backgroundColor='#000'
    document.getElementById('item'+num2).style.backgroundColor='#000'
    document.getElementById('item'+num3).style.backgroundColor='#000'
    //Interval and Timeout
    setInterval(function(){title.innerHTML+='.'},1000)
    setTimeout(function(){location.reload()},2000)
}

function fair(){
    title.innerHTML = `${squares[num1].toUpperCase()} is winner`
    setInterval(function(){title.innerHTML+='.'},1000)
    setTimeout(function(){location.reload()},1000)
}

function winner(){
    for(let i=1; i<10; i++){
      squares[i]= document.getElementById('item' + i).innerHTML
    }
    //console.log(squares);
    if(squares[1]==squares[2]&&squares[2] == squares[3] && squares[1]!=''){
        theEnd(1,2,3)
        console.log(squares)
}
    else if(squares[4]==squares[5] &&squares[5]== squares[6]&& squares[4]!=''){
        theEnd(4,5,6)
    }
    else if(squares[7]==squares[8] &&squares[8]== squares[9]&& squares[7]!=''){
        theEnd(7,8,9)
    }
    else if(squares[1]==squares[5] &&squares[5]== squares[9]&& squares[1]!=''){
        theEnd(1,5,9)
    }
    else if(squares[3]==squares[5] &&squares[5]== squares[7]&& squares[3]!=''){
        theEnd(3,5,7)
    }
    else if(squares[1]==squares[4] &&squares[4] == squares[7]&& squares[1]!=''){
        theEnd(1,4,7)
    }
    else if(squares[2]==squares[5] && squares[5] == squares[8]&& squares[5]!=''){
        theEnd(2,5,8)
    }
    else if(squares[3]==squares[6] &&squares[6] == squares[9]&& squares[3]!=''){
        theEnd(3,6,9)
    }
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

function whoIsWin(winner) {
    if (winner == 'x') {
        x_wins++
        localStorage.setItem('x-wins' , JSON.stringify(x_wins))
        x_winners_span.innerHTML = x_wins
    } 
    if (winner == 'o') {
        o_wins++;
        localStorage.setItem('o-wins' , JSON.stringify(o_wins))
        o_winners_span.innerHTML = o_wins
        console.log('thats o')
    }
}


btn.onclick = function(){
    location.reload()
    localStorage.clear()
}
