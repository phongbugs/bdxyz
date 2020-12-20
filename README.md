# bdxyz

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
mongoexport --db mark --collection students --out students.json
```

- for loop

  ```Showing rows 0 - 24 (74348 total, Query took 0.0420 seconds.) [nguvan: ... - ...]```

  ```Showing rows 74000 - 74347 (74348 total, Query took 0.0550 seconds.) [_id: 74001... - 74500...]```

- recursive
