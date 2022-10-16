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
function createDreamTeam(members) {
  const letters = [];

  if (members instanceof Array) {
    // add first letters to array
    members.forEach(element => {
      if(typeof element === 'string' || element instanceof String) {
        const elementWithoutSpaces = element.toString().trim();
        letters.push(elementWithoutSpaces[0].toUpperCase());
      }
    });
    //console.log(letters);

    // sort of array
    let letters2 = letters.sort();
    //console.log(letters2.join(""));
    //console.log(letters2);

    return letters2.join("");
  }
  else {
    return false;
  }

}

module.exports = {
  createDreamTeam
};

//createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max'])
