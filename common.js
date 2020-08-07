
const cv ={
    name: 'Alex',
    age: 33,
    address: {
        country: 'UA',
        city: 'Kiev',
    }
}

let objClone = clone({}, cv);
console.log(objClone);


function clone(newObj, obj) {
        for(let key in obj) {
            if((typeof obj[key]) == 'object') {
                newObj[key] = clone({}, obj[key]);
            } else {
                newObj[key] = obj[key];
            }
        }
        return newObj;
    };


