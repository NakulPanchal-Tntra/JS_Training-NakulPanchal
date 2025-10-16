# Logic of code

### 1.Data.
i have made the array of object to present data Name and score.
```javascript
const students = [
  { name: "Nakul", score: 85 },
  { name: "Nazil", score: 92 },
  { name: "Parth", score: 58 },
  ...
]
```

---

### 2.Get average score function.
Initialise the totalscore variable. perform the add on operation by for loop. get the total and divide by length of array.

---

### 3.Get the Highest score.
initialize highestScore and topStudent[] variable. perform a for loop and compare score from the starting index also compare if the multiple student has the highest score. also on match assign the name to the topStudent and push to the array.

---

### 4.Get the lowest score.
initialize Lowest and bottomStudent[] variable. perform a for loop and compare score from the starting index also compare if the multiple student has the lowest score. also on match assign the name to the bottomStudent and push to the array.

---

### 5.Grade distribution
create an object of A,B,..,F. perform a for loop to iterate each score. increment the value of A,B,C,..,F by switch case method by giving parameters.

---

### 6.Retake students function
create an empty array. perform a loop to compare each score if they are above 60 or not. if yes than not retake or else push to retake student array.

---

### 7. Log command
create log command for each functions.

---