//! #1 დავალება

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];

const returnArr = [];

let sum = 0;
let count = 0;

for (let i = 0; i <= nums.length; i++) {
  if (nums[i] < 0) sum = sum + nums[i];

  if (nums[i] > 0) count++;
}

returnArr.push(sum, count);

console.log(returnArr);

//! #2 დავალება

const nums2 = [12, 33, 23, 99, 919, 111, 9, 27, 17];

const doublNums2 = nums2.map((el) => el * 2);

console.log(doublNums2);

const newArr = doublNums2.filter((el) => el % 3 === 0);

console.log(newArr);

console.log(24 % 3);

//! #3 დავალება

const nums3 = [33, 14, 23, 45, 21, 3, 45, 23, 4];

function twoLessNumSum() {
  const sortedNums = nums3.sort((a, b) => b - a);
  console.log(sortedNums);

  const slicedNum = sortedNums.slice(-2);
  console.log(slicedNum);

  let slicedNumSum = 0;

  for (let i = 0; i < slicedNum.length; i++) {
    slicedNumSum = slicedNumSum + slicedNum[i];
  }
  console.log(slicedNumSum);
}
twoLessNumSum();

//! #4 დავალება

let arr1 = [13, 64, 15, 17, 88];
let arr2 = [23, 14, 53, 17, 80];

function ArryLargeNums(array1, array2) {
  let newArray = [];

  for (let i = 0; i < arr2.length; i++) {
    if (array1[i] > array2[i]) {
      newArray.push(array1[i]);
    } else {
      newArray.push(array2[i]);
    }
  }
  console.log(newArray);
}
ArryLargeNums(arr1, arr2);

//! #5 დავალება
const characters = [
  {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    eye_color: 'blue',
    gender: 'male',
  },
  {
    name: 'Darth Vader',
    height: '202',
    mass: '136',
    eye_color: 'yellow',
    gender: 'male',
  },
  {
    name: 'Leia Organa',
    height: '150',
    mass: '49',
    eye_color: 'brown',
    gender: 'female',
  },
  {
    name: 'Anakin Skywalker',
    height: '188',
    mass: '84',
    eye_color: 'blue',
    gender: 'male',
  },
];

const charFullNameArr = [];

const charFullName = characters.map((el) => {
  charFullNameArr.push(el.name);
});
console.log(charFullNameArr);

//

const charNameArr = [];

const charName = characters.map((el) => {
  const fullname = el.name.split(' ');
  const name = fullname[0];

  charNameArr.push(name);
});
console.log(charNameArr);

//

const totalEyeColor = characters.reduce((acc, curr) => {
  const eye_color = curr.eye_color;
  if (!acc[eye_color]) acc[eye_color] = [];

  acc[eye_color].push(curr.eye_color);

  return acc;
}, {});

console.log(totalEyeColor);
