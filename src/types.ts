export type typeCurriculums = {
  email: string,
  lastName: string,
  firstName: string,
  id: string,
  picture: string,
  stats? : typeStats
}

export type typeCurriculumStatus = "curriculums" | "hired" | "fired";

export type typeStats = {
  score : number,
  pros : string[],
  cons : string[],
  salary : number,
}