const school = {
    name: "XYZ School",
    establishYear: 1990,
    departments: {
      math: { teachers: 5, students: 150 },
      science: { teachers: 4, students: 120 },
      history: { teachers: 3, students: 100 },
      english: { teachers: 4, students: 130 },
    },
    courses: ["math", "science", "history", "english"],
    students: [
      {
        name: "Alice",
        className: "Grade 5",
        scores: { math: 95, science: 88, history: 85, english: 92 },
      },
      {
        name: "Bob",
        className: "Grade 4",
        scores: { math: 80, science: 78, history: 92, english: 85 },
      },
      {
        name: "Charlie",
        className: "Grade 5",
        scores: { math: 88, science: 90, history: 78, english: 88 },
      },
      {
        name: "Diana",
        className: "Grade 4",
        scores: { math: 92, science: 85, history: 88, english: 90 },
      },
    ],
  }



  function countCalculation(school) {
     
    let {  departments: {
        math: { teachers: mathTeachersCount },
        history: { teachers: historyTeachersCount },
      },
      departments: {
        math: { students: mathStudentsCount },
        history: { students: historyStudentsCount },
      },
    } = school;
  
    return {
      mathTeachersCount,
      historyTeachersCount,
      mathStudentsCount,
      historyStudentsCount,
    };
  
}
  let counts = countCalculation(school)
  console.log(counts)


  function findTopStudent(school, courseName) {
    let topStudent = null;
    let maxScore = -1;
  
    
    for (let student of school.students) {
      let { scores, name } = student; 
      let score = scores[courseName]; 
  
      if (score > maxScore) {
        
        topStudent = { name, scores };
        maxScore = score;
      }
    }
  
    
    return topStudent;
  }
  
  
  const topMathStudent = findTopStudent(school, "math")
  console.log(topMathStudent) 


  function addNewDept(school, newDepartment) {
    let updatedDepartments = {
      ...school.departments,
      ...newDepartment
    };
  
    return {
      ...school,
      departments: updatedDepartments
    };
  }
  
  let newDepartment = {
    art: { teachers: 2, students: 50 }
  };
  
  let updatedSchool = addNewDept(school, newDepartment);
  console.log(updatedSchool);
  

  function highestStudentCountDepartment(school) {
    let highestStudentCount = -1;
    let highestStudentDept = '';
  
    let departments = school.departments;
  
    for (let deptName in departments) {
      let deptInfo = departments[deptName];
      if (deptInfo.students > highestStudentCount) {
        highestStudentCount = deptInfo.students;
        highestStudentDept = deptName;
      }
    }
  
    return highestStudentDept;
  }
  
  
  let highestDept = highestStudentCountDepartment(school);
  console.log(highestDept);
  
  
  
