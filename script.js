function Boo() {
    console.log('start');
    let i = 0;
    const obj = {
        next() {
            i++;
            const obj1 = {
                1: {
                    value: 1,
                    done: false,
                },
                2: {
                    value: 2,
                    done: false
                },
                3: {
                    value: 3,
                    done: false
                },
            }
            if (i === 4) {
                console.log('finish');
            };
            if (obj1[`${i}`] === undefined) {
                return ({
                    value: undefined,
                    done: true
                });
            } else {
                return (obj1[`${i}`]);
            };
        }
    };
    return obj;
};
const iterator = Boo();
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())