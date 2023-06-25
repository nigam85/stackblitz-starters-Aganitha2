const students = [
  { name: "Alice", chemistryMarks: 80, biologyMarks: 90, dob: "01-02-2000" },
  { name: "Bob", chemistryMarks: 70, biologyMarks: 80, dob: "15-05-2001" },
  { name: "Charlie", chemistryMarks: 80, biologyMarks: 90, dob: "20-03-2000" },
];

students.sort((a, b) => {
  // First priority: Total marks
  if (a.chemistryMarks + a.biologyMarks > b.chemistryMarks + b.biologyMarks) {
    return -1;
  } else if (a.chemistryMarks + a.biologyMarks < b.chemistryMarks + b.biologyMarks) {
    return 1;
  }

  // Second priority: Biology marks
  if (a.biologyMarks > b.biologyMarks) {
    return -1;
  } else if (a.biologyMarks < b.biologyMarks) {
    return 1;
  }

  // Third priority: Date of birth (converted to Date objects for comparison)
  const dobA = new Date(a.dob.split("-").reverse().join("-"));
  const dobB = new Date(b.dob.split("-").reverse().join("-"));
  if (dobA < dobB) {
    return -1;
  } else if (dobA > dobB) {
    return 1;
  }

  // If all criteria are the same, maintain the original order
  return 0;
});

console.log(students);
