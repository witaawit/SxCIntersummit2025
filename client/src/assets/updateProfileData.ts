type SMAStudent = {
  name: string | null;
  email: string | null;
  birthDate: Date | null;
  domicile: string | null;
  educationStatus: string | null;
  grade: string | null;
  schoolName: string | null;
  studentID: File | null;
  whatsappNumber: string | null;
  lineID: string | null;
  insta: string | null;
};

type CollegeStudent = {
  name: string | null;
  email: string | null;
  birthDate: Date | null;
  domicile: string | null;
  educationStatus: string | null;
  grade: string | null;
  univName: string | null;
  major: string | null;
  year: string | null;
  studentID: File | null;
  whatsappNumber: File | null;
  lineID: File | null;
  insta: File | null;
};

type UpdateProfile = {
  columnName: string;
  schemaName: string;
  placeHolder: string;
  type: string;
  options?: { label: string; value: string }[];
};

export const updateSMAStudentData: UpdateProfile[] = [
  {
    columnName: "Name",
    schemaName: "name",
    placeHolder: "Enter your name...",
    type: "text",
  },
  {
    columnName: "Email",
    schemaName: "email",
    placeHolder: "Enter your email...",
    type: "email",
  },
  {
    columnName: "Birth Date",
    schemaName: "birthDate",
    placeHolder: "Select your birth date...",
    type: "date",
  },
  {
    columnName: "Domicile",
    schemaName: "domicile",
    placeHolder: "Enter your domicile...",
    type: "text",
  },
  {
    columnName: "Education Status",
    schemaName: "educationStatus",
    placeHolder: "Select your education status...",
    type: "select",
    options: [
      {
        label: "High School Student (SMA / SMK / Sederajat)",
        value: "highSchool",
      },
      { label: "Year 11 (2nd year of High School)", value: "college" },
      { label: "Year 12 (3rd year of High School)", value: "university" },
    ],
  },
  {
    columnName: "Grade",
    schemaName: "grade",
    placeHolder: "Select your grade...",
    type: "select",
    options: [
      { label: "Year 10 (1st year of High School)", value: "highSchool" },
      { label: "Year 11 (2nd year of High School)", value: "college" },
      { label: "Year 12 (3rd year of High School)", value: "university" },
    ],
  },
  {
    columnName: "School Name",
    schemaName: "schoolName",
    placeHolder: "Enter your school name...",
    type: "text",
  },
  {
    columnName: "Student ID",
    schemaName: "studentID",
    placeHolder: "Upload your student ID...",
    type: "file",
  },
  {
    columnName: "WhatsApp Number",
    schemaName: "whatsappNumber",
    placeHolder: "Enter your WhatsApp number...",
    type: "text",
  },
  {
    columnName: "Line ID",
    schemaName: "lineID",
    placeHolder: "Enter your Line ID...",
    type: "text",
  },
  {
    columnName: "Instagram",
    schemaName: "insta",
    placeHolder: "Enter your Instagram handle...",
    type: "text",
  },
];
export const updateUnivStudentData: UpdateProfile[] = [
  {
    columnName: "Name",
    schemaName: "name",
    placeHolder: "Enter your name...",
    type: "text",
  },
  {
    columnName: "Email",
    schemaName: "email",
    placeHolder: "Enter your email...",
    type: "email",
  },
  {
    columnName: "Birth Date",
    schemaName: "birthDate",
    placeHolder: "Select your birth date...",
    type: "date",
  },
  {
    columnName: "Domicile",
    schemaName: "domicile",
    placeHolder: "Enter your domicile...",
    type: "text",
  },
  {
    columnName: "Education Status",
    schemaName: "educationStatus",
    placeHolder: "Select your education status...",
    type: "select",
  },
  {
    columnName: "Grade",
    schemaName: "grade",
    placeHolder: "Select your grade...",
    type: "select",
  },
  {
    columnName: "University Name",
    schemaName: "univName",
    placeHolder: "Enter your school name...",
    type: "text",
  },
  {
    columnName: "Student ID",
    schemaName: "studentID",
    placeHolder: "Upload your student ID...",
    type: "file",
  },
  {
    columnName: "Whatsapp Number",
    schemaName: "whatsappNumber",
    placeHolder: "Enter your WhatsApp number...",
    type: "text",
  },
  {
    columnName: "Line ID",
    schemaName: "lineID",
    placeHolder: "Enter your Line ID...",
    type: "text",
  },
  {
    columnName: "Instagram",
    schemaName: "insta",
    placeHolder: "Enter your Instagram handle...",
    type: "text",
  },
];
