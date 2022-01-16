import React from "react";

const ArrayFunction = () => {
  // Array Functions
  const friends = ["April", "Rose", "Nida", "Silvia"];
  const newLength = friends.push("Smith");
  console.log(friends);
  console.log(newLength);

  // display element first
  friends.unshift("John");
  console.log(friends);

  //remove last elements
  friends.pop();
  const popped = friends.pop(); //doesnt remove length
  console.log(popped);
  console.log(friends);

  //remove last element
  friends.shift();
  console.log(friends);

  console.log(friends.indexOf("Rose"));
  console.log(friends.includes("Rose"));
  console.log(friends.includes("Bob"));
};

export default ArrayFunction;
