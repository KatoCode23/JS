function Infield (catcher, firstBase, secondBase, shortStop, thirdBase ){
  this.catcher = catcher;
  this.firstBase = firstBase;
  this.secondBase = secondBase;
  this.shortStop = shortStop;
  this.thirdBase = thirdBase;
}

Infield.prototype.takeYourInfieldPositions = function () {
  console.log(this.catcher + ' Go catch!, ' + this.firstBase + ' Go to first,  ' + this.secondBase + ' Go to second, ' + this.shortStop + ' Go to short, ' + this.thirdBase + ' Go to third.');
};

var infieldPositions = new Infield('Brett', 'Brian', 'Gabe', 'Sergio', 'Hector');
infieldPositions.takeYourInfieldPositions();

function Outfield (center, left, right){
  this.center = center;
  this.left = left;
  this.right = right;
}

Outfield.prototype.takeYourOutfieldPositions = function () {
  console.log(this.center + ' Go to center field, ' + this.left + ' Go to left field,  ' + this.right + ' Go to right field!');
};

var outfieldPositions = new Outfield('Kalen', 'Jimmy', 'Jesse');
outfieldPositions.takeYourOutfieldPositions();

function whoIsPitching(pitcher) {
  this.pitcher = pitcher;
}

whoIsPitching.prototype.pitchersName = function () {
  console.log(this.pitcher + ' is on the mound tonight.')
}

var startingPitcher = new whoIsPitching('Derek');
startingPitcher.pitchersName();

function LineUp(leadOff, secondBatter, thirdBatter, cleanUp, fifthBatter, sixthBatter, seventhBatter, eighthBatter, ninthBatter){
this.leadOff = leadOff;
this.secondBatter = secondBatter;
this.thirdBatter = thirdBatter;
this.cleanUp = cleanUp;
this.fifthBatter = fifthBatter;
this.sixthBatter = sixthBatter;
this.seventhBatter = seventhBatter
this.eighthBatter = eighthBatter;
this.ninthBatter = ninthBatter;
}

LineUp.prototype.battingOrder = function () {
  console.log(this.leadOff + ' You lead off, ' + this.secondBatter + ' you are batting second, ' + this.thirdBatter + ' hit in the 3 spot, ' + this.cleanUp + ' clean up spot, ' + this.fifthBatter + ' you are my RBI guy, ' + this.sixthBatter + ' get on base for me, ' + this.seventhBatter + ' swing at strikes, ' + this.eighthBatter + ' batting eighth, you ready to go? ' + this.ninthBatter + ', lets go!!!');
};

var startingLineUp = new LineUp('EP', 'George', 'Mitch', 'Brian', 'JohnnyV', 'Nick', 'Aiden', 'Kevin', 'Dad');
startingLineUp.battingOrder();

function FirstPitch(type, speed){
  this.type = type;
  this.speed = speed;
}

FirstPitch.prototype.whatKindOfPitch = function () {
  console.log('Derek has thrown the first pitch, Its a ' + this.type + ' thrown at ' + this.speed + 'mph! Wow!');
}

var startToTheGame = new FirstPitch('Fastball', 95);
startToTheGame.whatKindOfPitch();

function battersCount(balls, strikes) {
  this.strikes = strikes;
  this.balls = balls;

  if(strikes >= 3 ){
    console.log('Strike 3! You are OUT!')
  }
  else if(balls >= 4){
    console.log('Ball 4. Take your base');
  }
  else{
    console.log('Get ready for the next pitch');
  }
}

battersCount(2,2);
battersCount(2,3);
battersCount(4,2);

var basehit = {
    name: 'Single',
    base: '1st',
    commentary: function() {
        console.log(this.name + ' is hit and whomever has reached ' + this.base + ' base.');
    }
};

basehit.commentary();
var double = Object.create(basehit, {
    name: {value: 'Double'},
    base: {value: '2nd'}
});

double.commentary();

var triple = Object.create(basehit, {
  name: {value: 'Triple'},
  base: {value: '3rd'}
});

triple.commentary();

var homerun = {
  name: 'Home Run!!!',
  base: 'Home Plate',
  run: 1,
  dialogue: function () {
    console.log(this.name + ' hit by whomever, touch ' + this.base + '!' );
  }
}
homerun.dialogue();

var twoRunHomeRun = Object.create(homerun, {
  name: {value: 'Two Run Blast'},
  base: {value: 'Home Plate Twice'},
  run: {value: 2}
});

twoRunHomeRun.dialogue();

var threeRunHomeRun = Object.create(homerun, {
  name: {value: 'Three Run Blast'},
  base: {value: 'Home Plate Three Times'},
  run: {value: 3}
});

threeRunHomeRun.dialogue();

var grandSlam = Object.create(homerun, {
  name: {value: 'Grand Slam!!!'},
  base: {value: 'Home Plate 4 Times!!!!'},
  run: {value: 4}
});

grandSlam.dialogue();

function score(home){
  this.home = home;
  grandSlam.dialogue();
  home += 4;
  console.log(home);
}
score(2);
