let numbers = [5, 2, 1, 4, 11, 8, 7, 25, 37, 2, 6, 1]

let even = []
let odd = []

numbers.forEach (item => {
    if (item % 2 == 0) {
        even.push(item)
    } else {
        odd.push(item)
    }
}) 