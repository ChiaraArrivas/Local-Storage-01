const user = {
  id: 1,
  name: "John",
  age: 25,
};

localStorage.setItem("user", JSON.stringify(user));


/* Dal terimanle mi dice: ReferenceError: localStorage is not defined.
Dal browser funziona */