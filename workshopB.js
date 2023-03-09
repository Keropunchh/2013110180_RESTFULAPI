const users = [
  {
    nickname: "Kong",
    hobby: "play game",
    province: {
      province: "Bangkok",
      postcode: "10600\"",
    },
  },
  {
    nickname: "Kik",
    hobby: "read manga",
    province: {
      province: "Bangkok",
      postcode: "10600\"",
    },
  },
  {
    nickname: "Kui",
    hobby: "watch movie",
    province: {
      province: "Bangkok",
      postcode: "10600\"",
    },
  },
];


for (const u of users) {
  const showData = () => {
    let info1 = "\"My nickname is";
    let info2 = "My hobby is";
    let info3 = "and my postcode is";
    return `${info1} ${u.nickname} ${info2} ${u.hobby}
${info3} ${u.province.postcode}
    `;
  };
  console.log(showData());
}
