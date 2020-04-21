// import fish from './data/fish.json';
// import bugs from './data/bugs.json';

const fish = `1 	Bitterling 	River 	Smallest 	900 	All day 	November-March (Northern) / May-September (Southern)
2 	Pale Chub 	River 	Smallest 	160 	9 a.m. - 4 p.m. 	Year-round (Northern and Southern)
3 	Crucian Carp 	River 	Small 	160 	All day 	Year-round (Northern and Southern)
4 	Dace 	River 	Medium 	240 	4 p.m. - 9 a.m. 	Year-round (Northern and Southern)
5 	Carp 	Pond 	Large 	300 	All day 	Year-round (Northern and Southern)
6 	Koi 	Pond 	Large 	4,000 	4 p.m. - 9 a.m. 	Year-round (Northern and Southern)
7 	Goldfish 	Pond 	Smallest 	1,300 	All day 	Year-round (Northern and Southern)
8 	Pop-eyed Goldfish 	Pond 	Smallest 	1,300 	9 a.m. - 4 p.m. 	Year-round (Northern and Southern)
9 	Ranchu Goldfish 	Pond 	Small 	4,500 	9 a.m. - 4 p.m. 	Year-round (Northern and Southern)
10 	Killifish 	Pond 	Smallest 	300 	All day 	April-August (Northern) / October-February (Southern)`;

// Critter #,	Fish,	Location,	Shadow Size,	Value,	Time,	Month (Hemisphere)

const formatData = (string) => {
  /*
  Replace every tab character with a comma, so it can be split into an array later.
  Create an array where each element is delineated by where a new line character appears
  */ 
  const dataToArray = string.replace(/ \t/g, ',').split("\n");

  // remove the tab spaces from each string in the array
  // const dataWithoutTabs = dataToArray.map(string => string.replace(/ \t/g, ','));
  
  // create an array of elements where each element is delineated by a comma
  const stringToArray = dataToArray.map(datum => datum.split(","));
}

formatData(fish);
export default formatData;