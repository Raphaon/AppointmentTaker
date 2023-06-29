export class Appointment {
  AppointmentID: number; // Identifiant du rendez-vous
  PatientID: number; // Identifiant du patient associé au rendez-vous
  DoctorID: number; // Identifiant du médecin associé au rendez-vous
  ProcedureID: number; // Identifiant de l'acte associé au rendez-vous
  Date: Date; // Date du rendez-vous
  Time: string; // Heure du rendez-vous
}
