export const GenderOptions = ["Male", "Female", "Other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "Male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Aadhar Card",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Aadhar Card",
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Passport",
  "Student ID Card",
  "Voter ID Card",
];

export const Doctors = [
  {
    image: "/assets/images/dr-green.png",
    name: "Arjun Kapoor",
  },
  {
    image: "/assets/images/dr-cameron.png",
    name: "Priya Mehta",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "Rahul Deshmukh",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Karan Malhotra",
  },
  {
    image: "/assets/images/dr-powell.png",
    name: "Ananya Sharma",
  },
  {
    image: "/assets/images/dr-remirez.png",
    name: "Rohan Chawla",
  },
  {
    image: "/assets/images/dr-lee.png",
    name: "Simran Kaur",
  },
  {
    image: "/assets/images/dr-cruz.png",
    name: "Neha Singh",
  },
  {
    image: "/assets/images/dr-sharma.png",
    name: "Hardik Sharma",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};
