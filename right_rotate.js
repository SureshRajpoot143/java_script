//arr=[1,2,3,4]==<[4,1,2,3]
//right rotate by one place


let arr = [1, 2, 3, 4];
const rightRotateByOne = (array) => {
    if (array.length === 0) return array;
    let last = array.pop();
    array.unshift(last);
    return array;
};
console.log(rightRotateByOne(arr));
