const name = 'samuel'
const age = 18
function getName(name) {
    let a = 0
    for (let i = 0; i < 10000000000; i++) {
        a+=i
    }
    return 'my name is ' + name
}
function getAge(age) {
    const newAge = age + 8
    return 'my age in 2030 is ' + newAge
}
function getBiodata(name, age) {
    let a = 0
    for (let i = 0; i < 10000; i++) {
        a+=i
    }
    return {
        name,
        age,
    }
}

const runALl = async () => {
    console.log(getName(name))
    console.log(getAge(age))
    console.log(getBiodata(name, age))
}

runALl()
