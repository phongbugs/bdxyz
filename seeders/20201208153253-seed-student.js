'use strict';
/**
 * @param {*} totalCount
 * @param {*} qpr : quantity id per range
 * @param {*} timeOutEachId
  { startId: 0, endId: 1000, timeOutEachId: 0.5 },   
  { startId: 1000, endId: 2000, timeOutEachId: 0.5 },   
  { startId: 2000, endId: 3000, timeOutEachId: 0.5 },
 */
function genRangeId(totalCount, qpr, timeOutEachId) {
  let ranges = [],
    rangeCount = Math.floor(totalCount / qpr);
  for (let i = 0; i < rangeCount; i++) {
    let startId = i * qpr,
      endId = (i + 1) * qpr,
      range = { startId: startId, endId: endId, timeOutEachId: timeOutEachId };
    ranges.push(range);
  }
  // push final range
  ranges.push({
    startId: rangeCount * qpr,
    endId: totalCount,
    timeOutEachId: timeOutEachId,
  });
  return ranges;
}
function sleep(second) {
  return new Promise((r) => setTimeout(r, second));
}

// async function insert(queryInterface, students, range) {
//   await sleep(range.timeOutEachId).then(async () => {
//     await queryInterface.bulkInsert(
//       'students',
//       students.slice(range.startId, range.endId),
//       {}
//     );
//     console.log(range);
//   });
// }
async function insertOneRange(queryInterface, students, range) {
  
  return await queryInterface.bulkInsert(
    'students',
    students.slice(range.startId, range.endId),
    {}
  );
}
async function insertRecursive(
  startIndexRange,
  ranges,
  queryInterface,
  students
) {
  let range = ranges[startIndexRange];
  console.log(range)
  await sleep(range.timeOutEachId);
  await insertOneRange(queryInterface, students, range).then(async () => {
    if (++startIndexRange < ranges.length)
      await insertRecursive(startIndexRange, ranges, queryInterface, students);
    else console.log('Done');
  });
}
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    let students = require('./students').map((student) => {
      delete student._id;
      return student;
    });
    let ranges = genRangeId(students.length, 1000, 1000);
    //console.log(ranges);
    //console.log(students.slice(0, 10))
    // for (let i = 0; i < ranges.length; i++) {
    //   let range = ranges[i];
    //   // await queryInterface.bulkInsert(
    //   //   'students',
    //   //   students.slice(range.startId, range.endId),
    //   //   {}
    //   // );
    //   // await delay(range.timeOutEachId)
    //   // console.log(range)

    // }
    await insertRecursive(0, ranges, queryInterface, students);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
