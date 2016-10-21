namespace Primes {

    export function find(l: number): number[] {
        let result: number[] = [];
        let value = 0;

        while(value < l-3){
            result.push(value = getPrime(value));
        }

        // l.forEach((e, x) => {
        //     // if (isPrime(e)) {
        //     //     result.push(e);
        //     // }
        //     result.push(value = getPrime(value));
        // });
        return result;
    }

    // export function isPrime(n: number): boolean {
    //     if (n % 1 || n < 2)
    //         return false;
    //     for (let i: number = 2; i <= Math.sqrt(n); i++) {
    //         if (n % i === 0) {
    //             return false;
    //         }
    //     }
    //     return true;
    // }

    //awesome regex! https://iluxonchik.github.io/regular-expression-check-if-number-is-prime/
    // export function isPrimeNumber(n: number): boolean {
    //     var re = /^.?$|^(..+?)\1+$/;
    //     return !re.test('1'.repeat(n));
    // }

    // export function* generatePrimes(): Iterable<number> {
    //     let n: number = 0;
    //     while (true) {
    //         if (isPrime(n)) {
    //             yield n;
    //         }
    //         n++;
    //     }
    // }

    // export function get(n: number): number[] {
    //     console.log("First ", n, " primes :");
    //     let result: number[] = [];
    //     let prime: any = generatePrimes();
    //     let i: number = 0;
    //     while (i < n) {
    //         result.push(prime.next().value);
    //         i++;
    //     }
    //     return result;

    // }

    // export function findPrimes(l: number[]): number[] {
    //     return [];
    // };


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
    };
    export function getPrimes(n: number): number[] {
        var value: number, result: number[] = [];
        for (let i: number = 0; i < n; i++) {
            result.push(value = getPrime(value));
        }
        return result;
    }
    
}

console.log(Primes.find(100));
console.log(Primes.getPrimes(100));


