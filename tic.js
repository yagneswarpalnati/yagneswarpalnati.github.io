let l=[0,1,2,3,4,5,6,7,8];

document.querySelector(".container").addEventListener("click",e=>{
    var p=document.querySelector(".bottom")
    p.innerHTML=`<h3>Computer's Talk:Please select above !!!</h3><br>
    First player selection!!!!`
})




function humanstart()
{
    var p=document.querySelector(".bottom")
    p.textContent ="Computer:"+"That's you're turn Buddy"
    //let l=[0,1,2,3,4,5,6,7,8];
    var h2=document.querySelector(".gameInfo")
    h2.innerHTML="<h1>You as a First player</h1>"
let box=document.querySelectorAll(".box")
document.querySelector(".container").addEventListener("click",e=>{
    var id=e.target.id
    console.log(id)
    if(box[id].textContent==="X")
    {
        console.log("You have already placed");
    }
    else if(box[id].textContent==="O")
    {
        console.log("You can't replace Computer move")
    }
    else{
        l[id]=-1
        box[id].innerHTML="X"
        console.log(l)
        checkWin()
        computerMove()
    }

    //computer()
})

function computerMove()
{
    var l1=[]
    for(var i=0;i<l.length;i++)
    {
        if(l[i]===-1)
        {
            continue
        }
        l1.push(l[i])
    }
    console.log("the array generated is "+l1)
    if(l1.length>1)
    {
        var id=Math.floor(Math.random()*l1.length)
        console.log(id)
        var s=l1[id]
        l[s]=-1
        console.log("the orginal array is "+l)
        console.log("the number generated is "+s)
        box[s].innerHTML="O"
        console.log("The number placed at "+s)
        p.textContent="Computer:"+"I wanna go with "+s
        checkWin()

    }
    
}

function checkWin()
{
    var b=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    for (let i = 0; i < b.length; i++) {
        const [x, y, z] = b[i];
        if (box[x].innerHTML!=" " && box[x].innerHTML === box[y].innerHTML && box[x].innerHTML === box[z].innerHTML) {
            if(box[x].innerHTML==="X")
            {
                p.innerHTML=`Computer:Keep it up Buddy!<br>
                You Won the game<br>
                `     
            }
            else if(box[x].innerHTML==="O")
            {
                p.innerHTML=`Computer:Good Efforts Buddy!<br>
                Computer Won `
                break
            }
        }
        }

}


}

function computerstart(){
    var p=document.querySelector(".bottom")
    p.textContent ="Computer:"+"That's My turn Buddy"
    //let l=[0,1,2,3,4,5,6,7,8];
    let box=document.querySelectorAll(".box")
    var h2=document.querySelector(".gameInfo")
    h2.innerHTML="<h1>Computer as a First player</h1>"
    computerMove()
document.querySelector(".container").addEventListener("click",e=>{
    var id=e.target.id
    if(box[id].textContent==="X")
    {
        p.innerHTML=`You can't place again there`
    }
    else if(box[id].textContent==="O")
    {
        p.innerHTML="You can't replace Computer move"
    }
    else{
        l[id]=-1
        box[id].innerHTML="X"
        checkWin()
        checkWin()
        computerMove()
        checkWin()
        var l1=[]
        for(var i=0;i<l.length;i++)
        {
            if(l[i]===-1)
            {
                continue
            }
            l1.push(l[i])
        }
        if(l1.length===0)
        {
            checkWin()
            p.innerHTML="<h2>Computer</h2>"+"TIE Buddy"
        }
    }

    //computer()
})

function computerMove()
{
    var l1=[]
    for(var i=0;i<l.length;i++)
    {
        if(l[i]===-1)
        {
            continue
        }
        l1.push(l[i])
    }
    console.log("the array generated is "+l1)
    var id=Math.floor(Math.random()*l1.length)
    console.log(id)
    var s=l1[id]
    l[s]=-1
    console.log("the orginal array is "+l)
    console.log("the number generated is "+s)
    box[s].innerHTML="O"
    console.log("The number placed at "+s)
    p.innerHTML="<h2>Computer:</h2>"+"I wanna go with "+s
    checkWin()

    
}

function checkWin()
{
    var b=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    for (let i = 0; i < b.length; i++) {
        const [x, y, z] = b[i];
        if (box[x].innerHTML!=" " && box[x].innerHTML === box[y].innerHTML && box[x].innerHTML === box[z].innerHTML) {
            if(box[x].innerHTML==="O")
            {
                p.innerHTML=`Computer:Good Efforts Buddy!<br>
                Computer Won `
                
                
            }
            if(box[x].innerHTML==="X")
            {
                p.innerHTML=`Computer:Keep it up Buddy!<br>
                You Won the game<br>
                ` 
                
            }
        }
        }

}

}

function Freset()
{
    let boxes=document.querySelectorAll(".box")
    Array.from(boxes).forEach(Element=>{
    Element.innerHTML=""
    })
    l=[0,1,2,3,4,5,6,7,8];
    var p=document.querySelector(".bottom")
    p.innerHTML=`<h2>Computer's Talk</h2><br>You as a First player`
}

