class School {
  constructor(name,level,numberOfStudents) {
    this._name=name;
    this._level=level;
    this._numberOfStudents=numberOfStudents;
  }

  get name() {return this._name;}
  get level() {return this._level;}
  get numberOfStudents() {this.numberOfStudents;}

set numberOfStudents(newNumberOfStudents) {
 if (typeof newNumberOfStudents=== 'number'){this._numberOfStudents=newNumberOfStudents;}
 else {return 'Invalid input: numberOfStudents must be set to a Number.'}
  }

quickFacts() {return `${name} educates ${numberOfStudents} students at the ${level} school level.`;}

static pickSubstituteTeacher(substituteTeacher) {
  let randomNum=Math.floor(Math.random()*substituteTeacher.length);
  return substituteTeacher[randomNum];
}
}

class PrimarySchool extends School {
  constructor(name,numberOfStudents,pickUpPolicy){
    super(name,'primary',numberOfStudents);
    this._pickUpPolicy=pickUpPolicy;
  }
  get pickUpPolicy(){return this._pickUpPolicy;} 
}


class HighSchool extends School {
  constructor(name,numberOfStudents,sportsTeams){
    super(name,'high',numberOfStudents);
    this._sportsTeams=sportsTeams;
  }
  get sportsTeams(){console.log(this._sportsTeams);} 
}

const lorraineHansbury = new PrimarySchool ('Lorraine Hansbury',514,'Students must be picked up by a parent, guardian, or a family member over the age of 13.')

lorraineHansbury.quickFacts;
School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);

const alSmith = new HighSchool ('Al E. Smith',415,['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

console.log(alSmith.sportsTeams);
