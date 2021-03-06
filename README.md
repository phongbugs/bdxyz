# bdxyz

## Knowledge

- Use require function to read a json data normally
  - Rename json file to from ```.json``` to ```.js```
  - Add this text at first line of file ```module.exports =```
  
  ```js
  module.exports = 
  [{"id":"02000001","name":"PHẠM HOÀNG HƯƠNG ÁI","date":"04/11/2002","toan":6.6,"nguvan":6.25,"lichsu":5.75,"diali":7,"gdcd":7.25,"khxh":6.67,"tienganh":5.2}]
  ```

- Remove a element by condition with array object
  - Filter then map

  ```js

  let students = require('./' + srcFile)
      .filter((student) => student.name)
      .map((student) => {
        delete student._id;
        return student;
      });
  ```

- Convert ```json``` to ```csv```

  ```js
  id,name,date,gdcd,nguvan,lichsu,diali,toan,vatli,hoahoc,sinhhoc,tienganh,tiengnga,tiengduc,tiengphap,tiengtrung,tiengnhat,khxh,khtn
  02000001,PHẠM HOÀNG HƯƠNG ÁI,04/11/2002,7.25,6.25,5.75,7,6.6,-1,-1,-1,5.2,-1,-1,-1,-1,-1,6.67,-1,
  02000002,ĐẶNG HUỲNH VĨNH AN,13/12/2002,8.5,7.75,7,7.25,8.2,-1,-1,-1,7,-1,-1,-1,-1,-1,7.58,-1,
  ```

- Use named parameter and callback function params together
  
  - ```toJson = ({ srcFile, destFile }, callback)```
  - ```callback(destFile)``` (callback function with param)

  ```js
  toJson = ({ srcFile, destFile }, callback) => {
      let students = require('./' + srcFile)
        .filter((student) => student.name)
        .map((student) => {
          delete student._id;
          return student;
        });
      fs.writeFile(
        './' + destFile,
        'module.exports =' + JSON.stringify(students, null, 1),
        'utf8',
        (err) =>
          err
            ? log(err)
            : callback
            ? callback(destFile)
            : log('saved ' + destFile)
      );
    }
  ```

## CMD Sequelize

- Init sequelize

  ```js
    sequelize-cli init
  ```

- Create model student

```csharp
sequelize-cli model:generate --name Student --attributes _id:integer,id:string,name:string,date:string,toan:float,vatli:float,nguvan:float,sinhhoc:float,tienganh:float,tiengnga:float,lichsu:float,nguvan:float,tiengduc:float,tiengphap:float,tiengtrung:float,hoahoc:float,tiengnhat:float,diali:float,gdcd:float,khxh:float,khtn:float
```

- Migrate to db

```bat
sequelize-cli db:migrate
```

- Create seed event

```bat
sequelize-cli seed:generate --name seed-student
```

- Run seed
  - ```sequelize db:seed --seed 20201208153253-seed-student.js```
  - ```sequelize-cli db:seed:all```

- Export student from mongodb

```js
cd "C:\Program Files\MongoDB\Server\3.4\bin"
mongoexport --db mark --collection students --out students.json
```

- for loop

  ```Showing rows 0 - 24 (74348 total, Query took 0.0420 seconds.) [nguvan: ... - ...]```

  ```Showing rows 74000 - 74347 (74348 total, Query took 0.0550 seconds.) [_id: 74001... - 74500...]```

- recursive
