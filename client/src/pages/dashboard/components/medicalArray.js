 export let array = [];

export function updateArray(newData) {
    array = [...array, newData];
    console.log(array);
}

export function getArray(){
    return array
}