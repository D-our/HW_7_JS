
const cv ={
    name: 'Alex',
    age: 33,
    address: {
        country: 'UA',
        city: 'Kiev',
    }
}

let objClone = clone(cv);
console.log(objClone);


function clone(obj) {
    let newObj = {};
        for(let key in obj) {
            if((typeof obj[key]) == 'object' && (obj[key]!== null)) {
                newObj[key] = clone({}, obj[key]);
            } else {
                newObj[key] = obj[key];
            }
        }
        return newObj;
    };
