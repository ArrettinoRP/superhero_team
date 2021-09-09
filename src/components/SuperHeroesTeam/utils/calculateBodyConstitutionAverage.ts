import {BodyConstitution} from '../SuperHeroesTeamContainer';

export const calculateBodyConstitutionAverage = (
  bodyConstitutionArray: BodyConstitution[],
) => {
  const newBodyConstitution: BodyConstitution = {weight: 0, height: 0};
  const arrayLength = bodyConstitutionArray.length;
  if (arrayLength !== 0) {
    for (let key in bodyConstitutionArray) {
      newBodyConstitution.height = bodyConstitutionArray[key].height;
      newBodyConstitution.weight = bodyConstitutionArray[key].weight;
    }
    newBodyConstitution.height = Math.trunc(
      newBodyConstitution.height / arrayLength,
    );
    newBodyConstitution.weight = Math.trunc(
      newBodyConstitution.weight / arrayLength,
    );
  }
  return newBodyConstitution;
};
