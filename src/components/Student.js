function generateUniqueId() {
  const randomNum = Math.random().toString(36).substr(2, 11);
  return randomNum;
}

//This will generate a new ID everytime. Id is not saved and henceforth not useful for creating Id for an actual app

const Student = [
  {
    id: generateUniqueId(),
    Name: "Askari",
    Subject: "Web Development",
  },
  {
    id: generateUniqueId(),
    Name: "Jenna",
    Subject: "Android App Development",
  },
  {
    id: generateUniqueId(),
    Name: "Viktor",
    Subject: "Java",
  },
  {
    id: generateUniqueId(),
    Name: "Serena",
    Subject: "Database",
  },
  {
    id: generateUniqueId(),
    Name: "Juan",
    Subject: "iOS Development",
  },
  {
    id: generateUniqueId(),
    Name: "Mark",
    Subject: "Blockchain",
  },
];

export default Student;
