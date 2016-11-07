'use strict';

/**
*******Task*******
Write a program that excepts a single parameter,
an array of integers from 0 to 30. Those numbers are days in a month.
Find a best possible monthly fare if:
daily pass: 2 dollars;
weekly pass: 7 dollars (it's really a 7-day pass; it can start on any day,
and it's valid for 7 consequtive days from the day of purchase);
monthly pass: 25 dollars.

subtask for me:
write the program without using for loops. use recursive algorithms instead
**/

const config = {
  msg: {
    passCombo: "Your combo is",
    noWeeks: "No weeks worth mentioning. You'll be better off with getting only daily passes",
    oneWeekOnly: "Your combo is 1 weekly pass, everything else you do daily",
    monthlyOption: "Oh boy, you take a bus too often. You need to go for a monthly pass"
  },
  passPrice: {
    daily: 2,
    weekly: 7,
    monthly: 25
  }
};

// number of days in a week to make it worth purchasing a weekly pass instead of daily passes
const minEfficientWeek = getMinEfficientWeek(config.passPrice.daily, config.passPrice.weekly, [], 0);

function getMinEfficientWeek (dayPass, weekPass, daysStore, daysSum) {
  if (daysSum > weekPass) {
    return;
  } else {
    daysStore.push(dayPass);
    getMinEfficientWeek(dayPass, weekPass, daysStore, daysSum + dayPass);
  }
  return daysStore.length;
};

// create all the possible combinations of weeks from intended days of commuting
function createWeeks(days, possibleWeeks, singlePossibleWeek, dayForWeekStart, currentDay) {
  if (days[dayForWeekStart] !== 0 && !days[dayForWeekStart]) {
    return;
  } else {
    if (singlePossibleWeek.length === 7) {
      possibleWeeks.push(singlePossibleWeek);

      createWeeks(days, possibleWeeks, [], dayForWeekStart + 1, days[dayForWeekStart + 1]);
    } else {
      singlePossibleWeek.push(currentDay);

      createWeeks(days, possibleWeeks, singlePossibleWeek, dayForWeekStart, currentDay + 1);
    }
  }
  return possibleWeeks;
}

// get amount of days of usage of a weekly pass, if we decided to buy it in a particular week
function getOneWeekEfficiency(days, week) {
  return days.filter(day => week.indexOf(day) !== -1);
}

// get amount of days of usage of a weekly pass for all possible weeks
function getWeeksEfficiency(days) {
  const weeks = createWeeks(days, [], [], 0, days[0]);

  return weeks.map(week => getOneWeekEfficiency(days, week));
}

// get all weeks which could make sense to buy a weekly pass for instead of daily passes
function weeksCandidates() {
  return getWeeksEfficiency(intendedDays).filter(week => week.length >= minEfficientWeek);
}

// sort all potential weeks from high to low, for we're interested in weeks with most days of usage in them
function rankWeeksCandidates() {
  if (weeksCandidates().length) {
    return weeksCandidates().sort((a,b) => b.length - a.length);
  }
}

// make sure sorted weeks candidates for weekly passes have only original days in them.
// Compare from top to bottom since we're interested in keeping the weeks with most days in them.
// And we can sacrifice the weeks with fewer days in them to save the weeks with most days when needed.
function getWeeksWinners(days) {
  const rankedCandidates = rankWeeksCandidates();
  const dayPrice = config.passPrice.daily;
  const weekPrice = config.passPrice.weekly;
  let result;

  if (!rankedCandidates) {
    result = `${config.msg.noWeeks} : ${days.length * dayPrice} dollars`;
  } else if (rankedCandidates && rankedCandidates.length === 1) {
    result = `${config.msg.oneWeekOnly} : ${(days.length - rankedCandidates[0].length) * dayPrice + weekPrice} dollars`;
  } else {
    rankedCandidates.reduce((a,b) => {
      if (!a.length) {
        a.push(b);
      } else {
        const originalDaysInWeek = b.filter(bElement => a[a.length - 1].indexOf(bElement) === -1);

        if (originalDaysInWeek.length >= minEfficientWeek) {
          a.push(originalDaysInWeek);
        }
      }

      result = a;

      return a;
    }, []);
  }
  return result;
}

function getAmountOfDaysInBuyingWeeks(weeks) {
  return weeks
    .map(week => week.length)
    .reduce((a,b) => a + b, 0);
}

function getBestFare(days) {
  const weeklyBuys = getWeeksWinners(days);
  const dayPrice = config.passPrice.daily;
  const weekPrice = config.passPrice.weekly;
  const monthPrice = config.passPrice.monthly;
  const monthlyOption = config.msg.monthlyOption;
  let finalPrice;

  if (typeof weeklyBuys === 'string') {
    finalPrice = weeklyBuys;
  } else {
    const daysInBuyingWeeks = getAmountOfDaysInBuyingWeeks(weeklyBuys);
    const prelimPrice = (days.length - daysInBuyingWeeks) * dayPrice + weeklyBuys.length * weekPrice;
    const msg = `${config.msg.passCombo} ${weeklyBuys.length} weekly and ${days.length - daysInBuyingWeeks} daily`;

    finalPrice = prelimPrice < monthPrice ? `${msg}: ${prelimPrice} dollars` : `${monthlyOption}: ${monthPrice} dollars`;
  }

  return finalPrice;
}

const intendedDays = [0,10,8,1,18,11,13]; // configurable; intended days of commuting in a particular month
const bestFare = getBestFare(intendedDays);

console.log(bestFare);
document.querySelector('.container').innerHTML = bestFare;


//why not window.addEventListener('load', callback) ?
    window.addEventListener('DOMContentLoaded', function () {
      