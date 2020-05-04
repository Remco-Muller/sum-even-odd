function sumOddEven(x) {
    return ((([...String(x)].reduce((a, b)=> Number(a) + Number(b))) % 2) == 0 ? true:false)
}