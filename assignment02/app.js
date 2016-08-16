var userResp = prompt('Enter a value:');
console.log(userResp);
while (userResp == null || userResp.replace(/\s+/g, '') == '') {
  userResp = prompt('Enter another value:');
};
alert(userResp);
