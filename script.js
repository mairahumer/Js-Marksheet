
  let total = 100;
  
  
  let name1 = "Myra",
  marks1 = 92,
  grade1;
  if (marks1 >= 90) grade1 = "A+";
  else if (marks1 >= 80) grade1 = "B";
  else if (marks1 >= 60) grade1 = "C";
  else if (marks1 >= 40) grade1 = "D";
  else grade1 = "F";


  let name2 = "Marium",
   marks2 = 78, 
   grade2;
  if (marks2 >= 90) grade2 = "A";
  else if (marks2 >= 80) grade2 = "B";
  else if (marks2 >= 60) grade2 = "C";
  else if (marks2 >= 40) grade2 = "D";
  else grade2 = "F";

  let name3 = "Mirha",
   marks3 = 85,
    grade3;
  if (marks3 >= 90) grade3 = "B";
  else if (marks3 >= 80) grade3 = "B";
  else if (marks3 >= 60) grade3 = "C";
  else if (marks3 >= 40) grade3 = "D";
  else grade3 = "F";


  let name4 = "Sara", 
  marks4 = 59,
   grade4;
  if (marks4 >= 90) grade4 = "C";
  else if (marks4 >= 80) grade4 = "B";
  else if (marks4 >= 60) grade4 = "C";
  else if (marks4 >= 40) grade4 = "D";
  else grade4 = "F";


  let name5 = "Maida",
   marks5 = 47,
    grade5;
  if (marks5 >= 90) grade5 = "D";
  else if (marks5 >= 80) grade5 = "B";
  else if (marks5 >= 60) grade5 = "C";
  else if (marks5 >= 40) grade5 = "D";
  else grade5 = "F";


  let name6 = "Zara",
   marks6 = 33, 
   grade6;
  if (marks6 >= 90) grade6 = "F";
  else if (marks6 >= 80) grade6 = "B";
  else if (marks6 >= 60) grade6 = "C";
  else if (marks6 >= 40) grade6 = "D";
  else grade6 = "F";

  let name7 = "Inara",
   marks7 = 15,
    grade7;
  if (marks7 >= 90) grade7 = "F";
  else if (marks7 >= 80) grade7 = "B";
  else if (marks7 >= 60) grade7 = "C";
  else if (marks7 >= 40) grade7 = "D";
  else grade7 = "F";


  document.write(`
    <table border="1" cellpadding="5" cellspacing="0">
      <tr>
        <th>Name</th>
        <th>Obtained Marks</th>
        <th>Total Marks</th>
        <th>Grade</th>
      </tr>
      <tr><td>${name1}</td><td>${marks1}</td><td>${total}</td><td>${grade1}</td></tr>
      <tr><td>${name2}</td><td>${marks2}</td><td>${total}</td><td>${grade2}</td></tr>
      <tr><td>${name3}</td><td>${marks3}</td><td>${total}</td><td>${grade3}</td></tr>
      <tr><td>${name4}</td><td>${marks4}</td><td>${total}</td><td>${grade4}</td></tr>
      <tr><td>${name5}</td><td>${marks5}</td><td>${total}</td><td>${grade5}</td></tr>
      <tr><td>${name6}</td><td>${marks6}</td><td>${total}</td><td>${grade6}</td></tr>
      <tr><td>${name7}</td><td>${marks7}</td><td>${total}</td><td>${grade7}</td></tr>
    </table>
  `);
