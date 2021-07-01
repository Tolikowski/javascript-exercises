const removeFromArray = function(arr,...args) {

let newArray = arr;
let target = args;

for (let i = 0; i < args.length; i++){
    if (newArray.includes(args[i])){
        newArray.splice(newArray.indexOf(args[i]),1)
    }
}

return newArray;

};

module.exports = removeFromArray;
