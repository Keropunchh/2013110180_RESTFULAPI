const user = {
    name: "Kritsakorn",
    nickname: "Kong, ",
    hobby: "play game",
    province:{
        province:"Bangkok",
        postcode:"10600"
    }
}
const {nickname,hobby,province:{postcode}} = user;

const showData = () => {
    let info1 = 'My nickname is'
    let info2 = 'My hobby is'
    let info3 = 'and my postcode is'
    return `${info1} ${nickname} ${info2} ${hobby}
${info3} ${postcode}
    `
}
console.log(showData())
