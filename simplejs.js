let newArray = ["a", "b", "c"]
let newObject = {
    name: "samuel",
    class: "fe300",
    job: "mentor"
}

newArray.push("d")
newArray.push("e")
// newArray[0] = "z"

newObject.nationality = "indonesia"
newObject.job = "software engineer"

delete newObject.class
newObject.kelas = "fe300"

const twodimension = []
for (let i = 0; i < newArray.length; i++) {
    let tmp = []
    tmp.push(newArray[i])
    tmp.push(i+1)
    twodimension.push(tmp)
}

// console.log(newArray);
// console.log(newObject);
console.log(twodimension);