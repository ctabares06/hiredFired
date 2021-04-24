import { typeCurriculums } from "../../types"

type peopleFetchReturn = {
  data: typeCurriculums[],
  total: number,
  page: number,
  limit: number,
  offset: number
};

export async function getCurriculums(): Promise<typeCurriculums[]> {
  const response = await fetch('https://dummyapi.io/data/api/user/', {
    method: "GET",
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      "app-id": "60760c5c160cc66efeb0d533",
    }
  });

  const people : peopleFetchReturn = await response.json();

  if (response.ok) {
    return Promise.resolve(people.data);
  } else {
    const error = new Error('Error');
    return Promise.reject(error);
  }
}