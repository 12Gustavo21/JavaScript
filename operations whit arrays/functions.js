export function sum(array) {
    let cont = 0
    for (let i = 0; i < array.length; i++) {
        let number = array[i];
        cont += number
    }
    return cont
}

export function product(array) {
    let cont = 1
    for (let i = 0; i < array.length; i++) {
        const number = array[i];
        cont *= number
    }
    return cont
}

export function sumOdds(array) {
    let cont = 0
    for (let i = 0; i < array.length; i++) {
        const number = array[i];
        if (number % 2 != 0) {
            cont += number
        }
    }
    return cont
}