// 1

let user = {};
user.name = "John"
user.surname = "Smith";
user.name = "Pete";
delete user.name;

// 2 да , возможно. ведь в такой объект нельзя лишь добовлять новые значения и удалять ,а менять значения можно

// 3

let salaries = {

  John: 100,

  Ann: 160,

  Pete: 130

}

let sum = salaries.John + salaries.Ann + salaries.Pete;
