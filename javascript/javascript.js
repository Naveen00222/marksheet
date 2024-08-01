// Get all input fields
const inputs = document.querySelectorAll('.input1, .input2');

// Function to calculate total marks for each subject
function calculateTotalMarks() {
  const rows = document.querySelectorAll('.table2 tr');
  let grandTotal = 0;

  rows.forEach((row, index) => {
    if (index > 1) {
      const input1 = row.querySelector('.input1');
      const input2 = row.querySelector('.input2');
      const totalMarksCell = row.cells[5];

      if (input1 && input2) {
        const totalMarks = Number(input1.value) + Number(input2.value);
        totalMarksCell.textContent = totalMarks;
        grandTotal += totalMarks;
      }
    }
  });

  // Update grand total
  const grandTotalRow = document.querySelector('tr:last-child');
  grandTotalRow.cells[2].textContent = '500'; // Max marks
  grandTotalRow.cells[0].textContent = grandTotal; // Grand total

  // Calculate percentage and grade
  const percentage = (grandTotal / 500) * 100;
  const grade = getGrade(percentage);

  document.getElementById('percentage').textContent = percentage.toFixed(2) + '%';
  document.getElementById('grade').textContent = grade;
  document.getElementById('result').textContent = getResult(percentage);
}

// Function to get grade based on percentage
function getGrade(percentage) {
  if (percentage >= 90) return 'A+';
  if (percentage >= 80) return 'A';
  if (percentage >= 70) return 'B+';
  if (percentage >= 60) return 'B';
  if (percentage >= 50) return 'C';
  return 'F';
}

// Function to get result based on percentage
function getResult(percentage) {
  if (percentage >= 50) {
    return 'Pass';
  } else {
    return 'Fail';
  }
}

// Add event listener to input fields
inputs.forEach((input) => {
  input.addEventListener('input', calculateTotalMarks);
});