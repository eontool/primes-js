var Primes;
(function (Primes) {
    function find(n) {
        let result = [];
        let m = 0;
        while (m < n - 3) {
            result.push(m = getPrime(m));
        }
        return result;
    }
    Primes.find = find;
    function getPrime(n) {
        var i = 0, root = 1;
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
    Primes.getPrime = getPrime;
    function getList(n) {
        var m, result = [];
        for (let i = 0; i < n; i++) {
            result.push(m = getPrime(m));
        }
        return result;
    }
    Primes.getList = getList;
    function getFactors(n) {
        let result = [];
        let m = 2;
        while (m * m <= n) {
            while (n % m === 0) {
                result.push(m);
                n = Math.floor(n / m);
            }
            m++;
        }
        if (n > 1) {
            result.push(n);
        }
        let timesN = {};
        result.forEach((i) => { timesN[i] = (timesN[i] || 0) + 1; });
        return timesN;
    }
    Primes.getFactors = getFactors;
})(Primes || (Primes = {}));
console.log(Primes.find(10));
console.log(Primes.getList(10));
console.log(Primes.getFactors(1000));
