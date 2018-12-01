


function Check(n) {
    var nArr = String(n).split("");

    for (var i = 1; i <= 5; i++) {
        var nToPowerArr = nArr.map(number => {
            return Math.pow(Number(number), i)
        })

        var sumArrNumber = nToPowerArr.reduce((a, b) => {
            return a + b;
        })
        if (sumArrNumber === n) {
            return `n=${n} et K=${i}`
        }
    }
    return `n=${n} ne vérifie pas la propriété`;
}

console.log(Check(1634))