namespace Primes {

    export function find(n: number): number[] {
        let result: number[] = [];
        let m: number = 0;
        while (m < n - 3) {
            result.push(m = getPrime(m));
        }
        return result;
    }

    export function getPrime(n: number): number {
        var i: number = 0, root: number = 1;
        if (n > 2) {
            while (i <= root) {
                i = 3;
                n += 2;
                root = Math.floor(Math.sqrt(n));
                while (i <= root && n % i) {
                    i += 2;
                }
            }
            return n;
        }
        return n === 2 ? 3 : 2;
    }

    export function getList(n: number): number[] {
        var m: number, result: number[] = [];
        for (let i: number = 0; i < n; i++) {
            result.push(m = getPrime(m));
        }
        return result;
    }

    export function getFactors(n: number): {} {

        let result: number[] = [];
        let m: number = 2;

        while (m * m <= n) {
            while (n % m === 0) {
                result.push(m);
                n = Math.floor(n / m);
            }
            m++;
        }
        if (n > 1) {
            result.push(n)
        }
        let timesN: {} = {};
        result.forEach((i) => { timesN[i] = (timesN[i] || 0) + 1; });
        return timesN;
    }

}

console.log(Primes.find(10));
console.log(Primes.getList(10));
console.log(Primes.getFactors(1000));