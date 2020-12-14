const gcd = (a: number, b: number) => {
    while (a % b !== 0) {
        [a,b] = [b, a % b]
    }

    return b
}

const lcm = (a: number, b: number) => {
    return Math.floor(a * b / gcd(a,b)) 
}

export const betweenTwoSetsMath = (first: number[], second: number[]) => {
    const min_gcd =  second.reduce(gcd)
    const max_lcm = first.reduce(lcm)
    

    let count = 0

    for (let current = max_lcm; current < min_gcd + 1; current += max_lcm) {
        if (min_gcd % current === 0) {
            count+= 1
        }
    }

    return count
}