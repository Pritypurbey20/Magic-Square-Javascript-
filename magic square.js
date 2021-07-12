var m = [
        [8,3,4],
        [1,5,9],
        [6,7,2]
    ]
var i = 0
var n = 15
var list1 = []
while (i<m.length){
    var j = 0
    var s = 0
    while (j<m[i].length){
        s = s+m[i][j]
        j++
    }
    list1.push(s)
    i++
}
let sum1 = list1.reduce((v, w) => (v + w));

var a = 0
var list2 = []
while (a<m.length){
    var b = 0
    var h = 0
    while (b<m[a].length){
        h = h+m[b][b]
        b++
    }
    list2.push(h)
    a++
}
let sum2 = list2.reduce((v, w) => (v + w));


var x = m[0][0]+m[1][1]+m[2][2]
var y = m[0][2]+m[1][1]+m[2][0]

if (sum1==sum2 && x==y && y==n && x==n){
    console.log("It is a magic square")
}else{
    console.log("It is not a magic square")
}

