/**
 * Remove null name student
 * Remove _id
 * Save to student.map.js
 * Convert to students.csv
 */
const log = console.log,
  fs = require('fs'),
  toJson = ({ srcFile, destFile }) => {
    let students = require('./' + srcFile)
      .filter((student) => student.name)
      .map((student) => {
        delete student._id;
        return student;
      });
    fs.writeFile(
      './' + destFile,
      JSON.stringify(students, null, 1),
      'utf8',
      (err) => (err ? log(err) : log('saved ' + destFile))
    );
  },
  toCsv = ({ srcFile, destFile }) => {
    const header = [
      'id',
      'name',
      'date',
      'gdcd',
      'nguvan',
      'lichsu',
      'diali',
      'toan',
      'vatli',
      'hoahoc',
      'sinhhoc',
      'tienganh',
      'tiengnga',
      'tiengduc',
      'tiengphap',
      'tiengtrung',
      'tiengnhat',
      'khxh',
      'khtn',
    ];
    //
    let csv = [];
    csv.push(header.toString());
    require('./' + srcFile).forEach((s) => {
      let line = '';
      header.forEach((name) => {
        let mark = s[name];
        line += (mark ? mark : -1) + ',';
      });
      csv.push(line);
      //log(line);
    });
    fs.writeFile('./' + destFile, csv.join('\r\n'), 'utf8', (err) =>
      err ? log(err) : log(destFile)
    );
  };
toJson({ srcFile: './seeders/students.js', destFile: 'students.map.js' });
//toCsv({ srcFile: 'students.map.js', destFile: 'students.map.csv' });
