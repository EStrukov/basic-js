const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam( members ) {
  for (let i = 0; i < members.length; i++) {
    if (members[i] == "null" || members[i] == "true" || members[i] == "false" || members[i] == "undefined") {

      delete members[i]
    } else if (typeof (members[i]) !== "string") {
// delete members[i] 

members[i].splice([i], 1);
}  else {
  members[i] = members[i].replace(/\s+/g, '');
 members[i] = members[i].slice(0, 1).toUpperCase();
}
}
if (members.length == 0) {
  return false;
} else {
 return members.sort().join('')
 
}

//----------------------ДОДЕЛАТЬ!!!!!!!!!!!!!

}
module.exports = {
  createDreamTeam
};
