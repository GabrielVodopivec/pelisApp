const packageJSON = require('./package.json');

const myJSON = Object.entries(
    packageJSON.dependencies
).map(([key, value]) => ({name: key, version: value}));

// console.log(myJSON);
let newObj = {
    9: {
        isFav: true,
        name: 'nada',
        colina: 'monte loca',
        auto: 'rojo'
    }

}
function objCreator(id, isFav, name) {

    if (newObj[id].isFav) {
        newObj = {
            ...newObj,
            [id]: {
                ...newObj[id],
                isFav: isFav
            }
        }
    }

    console.log(newObj)
}

objCreator(9, false)

console.log(Array.from({...newObj}));
