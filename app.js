const ageToVote = 18

const user = {
  name: 'Sherlock Holmes',
  address: {
    street: '221B Baker Street',
    city: 'London'
  }
}

const cases = [
  { title: 'The Hound of the Baskervilles', releaseYear: 1901 },
  { title: 'The Adventure of the Empty House', releaseYear: 1903 },
  { title: 'The Adventure of the Norwood Builder', releaseYear: 1903 },
  { title: 'The Adventure of the Dancing Men', releaseYear: 1903 },
  { title: 'The Adventure of the Solitary Cyclist', releaseYear: 1904 }
]

// YOUR JS CODE
let currentYear = 2022
let jsReleaseYear = 1995
let currentAge = currentYear - jsReleaseYear
let i = 0

console.log(currentAge)

if(currentAge >= ageToVote){console.log("JavaScript is old enough to vote")}
  else{console.log("JavaScript is not old enough to vote")}

console.log("Starting")
for(let i = 0; i <= 100; i++){
  if(i % 10 == 0){
      console.log(i)
  }
    else if(i == 51){
      console.log("Halfway")
  }
    
    else {}
}
console.log("Finished")

console.log(user["name"],"lives on",user["address"]["street"],",",user["address"]["city"])

for (const value of cases){
  if(value.releaseYear == "1903"){
    console.log(value.title)
    console.log(value.releaseYear)
  }
}