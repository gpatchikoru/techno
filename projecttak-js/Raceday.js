let raceNumber = Math.floor(Math.random() * 1000);
let regEarly = false;
let runnerAge = 18;
if(runnerAge>17 && regEarly){
  raceNumber+=1000;
}
if(runnerAge>17 && regEarly){
  console.log(`You can race at 9:30 a.m and your race number is: ${raceNumber}`);
}else if(runnerAge>17 && !regEarly){
  console.log(`You can race at 11:30 a.m and your race number is: ${raceNumber}`);
}else if(runnerAge<18){
  console.log(`You can race at 12:30 p.m and your race number is: ${raceNumber}`);
}else{
  console.log('See the registration desk to participate on racing.');
}
© 2020 GitHub, Inc.