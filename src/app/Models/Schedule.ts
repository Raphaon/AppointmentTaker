export interface ISchedule {
  ScheduleID: number; // Identifiant de l'agenda
  DoctorID: number; // Identifiant du médecin associé à l'agenda
  Date: Date; // Date de l'agenda
  StartTime: string; // Heure de début de disponibilité du médecin
  EndTime: string; // Heure de fin de disponibilité du médecin
}
