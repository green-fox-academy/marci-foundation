const fakeArray = {
  //{} üres object ami keyeket rak

  0: "első elem"
};

console.log(fakeArray[0]);

const name = "Bob";
const phoneNumber = "+36209182164";

const telephoneBook = {
  Bob: "36209182164", // Bob és Jane: kulcsok (keys)
  Jane: "36209764010",
  Carol: "40"
};

console.log(telephoneBook["Bob"]);
console.log(telephoneBook["Jane"]);
console.log(telephoneBook.Bob);
console.log(telephoneBook[name]); // const name-t helyettesíti bele és nem az objectben lévő kulcsot

const studentDatabase = {
  Bob: {
    age: 20,
    phoneNumber: "23213123"
  }
};

for (const key in studentDatabase) {
  //   sum = sum + studentDatabase[key];
}

console.log(studentDatabase.Bob.age, phoneNumber);
console.log(Object.keys(studentDatabase), telephoneBook);

telephoneBook.Bob = "50"; // megváltoztatja Bob kulcsot 50-re a telephoneBook-ban
delete telephoneBook.Carol;
console.log(telephoneBook);
console.log("Bob" in telephoneBook);

export {};
