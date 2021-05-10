import { typeStats, typeCurriculums } from "../../types";

const pros = [
  'responsable',
  'respectful',
  'funny',
  'eloquent',
  'invite beers',
];

const cons = [
   'lol player',
   'disrespectful',
   'voyeur',
   'hater',
   'flat earth'
];

const randomIntegerNumberRange = (max: number) : number => {
   return Math.floor(Math.random() * (0 - max) + max);
}

const createRandomArray = (array: string[]) : string[] => {
   const times = randomIntegerNumberRange(array.length);
   const newArray = [];

   for (let index = 0; index <= times; index++) {
      newArray.push(array[randomIntegerNumberRange(array.length)]);
   }

   return newArray;
}

export const setRandomStats = (curriculum : typeCurriculums) : typeCurriculums => {
   const stats: typeStats = {
      salary : Math.random()*100000,
      score : Math.random()*10,
      pros : [...new Set(createRandomArray(pros))],
      cons : [...new Set(createRandomArray(cons))]
   }

   return {
      ...curriculum,
      stats,
   }
}