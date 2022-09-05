const names = ["mike", "ryan", "tim", "sam", "bill", "tiffany", "billy"];

const doesNameExist = function (array, targetName) {
  targetName = targetName.toLowerCase();
  for (let i = 0; i < array.length; i++) {
    if (array.includes(targetName)) {
      return targetName;
    } else {
      return "Not included!";
    }
  }
};

console.log(doesNameExist(names, "mike"));
