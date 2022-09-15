// code your solution here

function superbowlWin(argument){
let data = argument.find((el) => {
    if (el.result == "W"){
        return el.year
    }

})

if (data){
    return data.year
}
else {
    return undefined
}
}

