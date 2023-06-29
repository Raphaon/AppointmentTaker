-- Table Patients
CREATE TABLE Patients (
  PatientID INT PRIMARY KEY,
  FirstName VARCHAR(255),
  LastName VARCHAR(255),
  DateOfBirth DATE,
  Address VARCHAR(255),
  PhoneNumber VARCHAR(20),
  Email VARCHAR(255)
);

-- Table Doctors
CREATE TABLE Doctors (
  DoctorID INT PRIMARY KEY,
  FirstName VARCHAR(255),
  LastName VARCHAR(255),
  PhoneNumber VARCHAR(20),
  Email VARCHAR(255)
);

-- Table Specialties
CREATE TABLE Specialties (
  SpecialtyID INT PRIMARY KEY,
  Name VARCHAR(255)
);

-- Table Services
CREATE TABLE Services (
  ServiceID INT PRIMARY KEY,
  Name VARCHAR(255)
);

-- Table Procedures
CREATE TABLE Procedures (
  ProcedureID INT PRIMARY KEY,
  Name VARCHAR(255),
  Description TEXT,
  Price DECIMAL(10, 2)
);

-- Table Doctors_Specialties (junction table)
CREATE TABLE Doctors_Specialties (
  DoctorID INT,
  SpecialtyID INT,
  PRIMARY KEY (DoctorID, SpecialtyID),
  FOREIGN KEY (DoctorID) REFERENCES Doctors(DoctorID),
  FOREIGN KEY (SpecialtyID) REFERENCES Specialties(SpecialtyID)
);

-- Table Appointments
CREATE TABLE Appointments (
  AppointmentID INT PRIMARY KEY,
  PatientID INT,
  DoctorID INT,
  ProcedureID INT,
  Date DATE,
  Time TIME,
  FOREIGN KEY (PatientID) REFERENCES Patients(PatientID),
  FOREIGN KEY (DoctorID) REFERENCES Doctors(DoctorID),
  FOREIGN KEY (ProcedureID) REFERENCES Procedures(ProcedureID)
);

-- Table Schedule
CREATE TABLE Schedule (
  ScheduleID INT PRIMARY KEY,
  DoctorID INT,
  Date DATE,
  StartTime TIME,
  EndTime TIME,
  FOREIGN KEY (DoctorID) REFERENCES Doctors(DoctorID)
);
