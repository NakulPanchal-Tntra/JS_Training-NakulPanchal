// Sample data: array of student objects with name and score
const students = [
  { name: "Nakul", score: 85 },
  { name: "Nazil", score: 92 },
  { name: "Parth", score: 58 },
  { name: "Het", score: 74 },
  { name: "Rachit", score: 20 },
  { name: "Shrey", score: 31 },
  { name: "Devansh", score: 88 },
  { name: "Pranav", score: 53 },
  { name: "Jay", score: 67 },
  { name: "Varun", score: 45 },
  { name: "Dhruv", score: 39 },
  { name: "Aman", score: 76 },
  { name: "Amin", score: 82 },
  { name: "Mitesh", score: 92 },
  { name: "Shivam", score: 20 },
];

// functions to get the average of all students' scores
function getAverageScore(students) {
  let totalScore = 0;
  for (let i = 0; i < students.length; i++) {
    totalScore += students[i].score;
  }
  const averageScore = totalScore / students.length;
  return averageScore.toFixed(3);
}

//functions to get the highest scores with students name also give all students who have same highest score
function getHighestScore(students) {
    let highestScore = students[0].score;
    let topStudent = [students[0].name];
    for (let i = 1; i < students.length; i++) {
      if (students[i].score > highestScore) {
        highestScore = students[i].score;
        topStudent = [students[i].name];
      } else if (students[i].score === highestScore) {
        topStudent.push(students[i].name);
      }
    }
    return { name: topStudent.join(", "), score: highestScore };
}

//functions to get the lowest score with student name
function getLowestScore(students) {
  let lowestScore = students[0].score;
  let bottomStudent = [students[0].name];
  for (let i = 1; i < students.length; i++) {
    if (students[i].score < lowestScore) {
      lowestScore = students[i].score;
      bottomStudent = [students[i].name];
    }else if (students[i].score === lowestScore) {
      bottomStudent.push(students[i].name);
    }
  }
  return { name: bottomStudent.join(", "), score: lowestScore };
}

// function to get grade distribution
function getGradeDistribution(students) {
  let gradeDistribution = { A: 0, B: 0, C: 0, D: 0, F: 0 };
  for (let i = 0; i < students.length; i++) {
    const score = students[i].score;
    switch (true) {
      case score >= 90:
        gradeDistribution.A++;
        break;
      case score >= 80:
        gradeDistribution.B++;
        break;
      case score >= 70:
        gradeDistribution.C++;
        break;
      case score >= 60:
        gradeDistribution.D++;
        break;
      default:
        gradeDistribution.F++;
    }
  }
  return gradeDistribution;
}

// Function to display which students has to reappear
function getRetakeStudents(students) {
  let retakeStudents = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i].score < 60) {
      retakeStudents.push(students[i].name);
    }
  }
  return retakeStudents;
}

// Displaying the results
console.log(`Average Score: ${getAverageScore(students)}`);
console.log(
  `Highest Score: ${getHighestScore(students).name} (${
    getHighestScore(students).score
  })`
);
console.log(
  `Lowest Score: ${getLowestScore(students).name} (${
    getLowestScore(students).score
  })`
);
console.log(`Grade Distribution:`, getGradeDistribution(students));
console.log(`Students needing retake:`, getRetakeStudents(students));
