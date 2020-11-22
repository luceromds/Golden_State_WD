let validUserNames = (arr) => {
   let valid = arr.filter(user => user.length < 10);
   return valid
}