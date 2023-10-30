## Протокол HTTP 
Очень прост и состоит из двух частей:

- Заголовков запроса/ответа;
- Тела запроса/ответа.

# Express
Express представляет собой популярный веб-фреймворк, написанный на JavaScript и работающий внутри среды исполнения node.js.

1. ### Initialize

- `npm init -y`
- `npm i express`
- `npx create-gitignore node`
- `npx eslint --init`
- `npm i -D nodemon morgan`

- add to scripts in package.json
  ```
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js -ext js,jsx",
  },
  ```
Базовый скрит для запуска сервера на локальной машине

```js
const express = require('express');
const morgan = require('morgan');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true })); // позволяет передавать body в запросе
app.use(express.json());  // позволяет преобразовывать json в теле запроса
app.use(express.static(path.join(process.cwd(), 'public'))); // подключает клиентское хранилище

app.use(morgan('dev')); // Логирует запросы

app.listen(PORT, () => {
  console.log(`Server starting on PORT ${PORT}`);
});
```
Теперь мы можем зайти в наше веб-приложение. Мы можем использовать хост `127.0.0.1`, или `localhost:3000`

`morgan` - для логирование запросов между клиентом и сервером 
## HTTP methods: GET / POST

GET — метод для чтения данных с сайта. Например, для доступа к указанной странице. Он говорит серверу, что клиент хочет прочитать указанный документ.

```js

app.get('/', function (req, res) {
  res.send('Hello World!');
});

```
POST — метод для отправки данных на сайт. Чаще всего с помощью метода POST передаются формы. Данный с формы находятся в теле запроса `body`
Для POST запроса, необходимо указать Content-Type: application/json

```js

app.post('/form', function (req, res) {
  const {title, text} = req.dody;
});

```

Свойства объекта request

```js
req.query // Объект в котором храниться то, что мы подадим после ? знака -> localhost:3000/post?limit=10&offset=2
req.body // Данные которые мы передаем в body запроса (корректно использовать только для GET )
req.params // Параметризированный запрос по пути 'post/:id' -> localhost:3000/post/2. В req.params будет { id: 2 }
```


Методы объекта response

```js
res.end() // завершает эндпоинт со статусом 200 
res.send('Hello world!') // позволяет отправить text/html
res.status()  // не завершает выполнение эндпоинта, устанавливает статус
res.sendStatus(401) // завершает выполнение с нужным статусом
res.json({ text1: "Hello", text2: "world" }) //  позволяет отправить json
res.redirect('/register'); // позволяет перенаправить на другую url/uri
```



2. ### Install React(ssr) Babel

- `npm i @babel/core @babel/preset-env @babel/preset-react @babel/register react react-dom`

- create .babelrc

  ```
  {
    "presets": [
      "@babel/preset-env",
      "@babel/preset-react"
    ]
  }
  ```

3. ### DB init sequelize

- `npm i sequelize sequelize-cli pg pg-hstore`

- create file .sequelizerc

  ```
  const path = require('path');
  module.exports = {
    'config': path.resolve('db', 'config', 'database.json'),
    'models-path': path.resolve('db', 'models'),
    'seeders-path': path.resolve('db', 'seeders'),
    'migrations-path': path.resolve('db', 'migrations'),
  };
  ```

- `npx sequelize init`
- `npx sequelize db:create`
- `npx sequelize model:generate` - generate all models
- don't forget references
- `npx sequelize db:migrate`


4. ### dotenv
- npm i dotenv
- create file .env
```
PORT=3000
DATABASE=postgres://martian:1234@localhost:5432/p2w1d4
  ```
- create file .env_example
```
PORT=
DATABASE=postgres://user:password@localhost:5432/db
  ```


5. ### Cookie, Session

## Настройки

- `npm i express-session`
- `npm i session-file-store`

Создать конфиг:
```js
const sessionConfig = {
  store: new FileStore(), // добавить после установки session-file-store
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 10 * 60 * 1000, // устанавливаем сколько живет кука
    httpOnly: true,
  },
}
```

Добавляет middleware `use()`

```js
// index.js

const expressSession = require('express-session');
// для хранения даннах из куки
const FileStore = require('session-file-store')(expressSession);

// ...

app.use(expressSession(sessionConfig));
```

Добавить в скрипте `dev` добавить игнорирование для отслеживания nodemon 

```js
"dev": "nodemon src/index.js --ext js,jsx --ignore sessions",
```

## Использование

### Добавление сессии

Сессия создается автоматически для любого, кто обратился к серверу. Но если нужно добавить какую-то информацию, то можно сделать так:
```js
  req.session.fild = {};
```

### Чтение из сессии

```js
  const data = req.session?.fild;
```

### Удаление сессии

```js
  req.session.destroy((error) => {
    if (error) {
      console.log(error);
    }
    else {
      res.clearCookie('connect.sid');
    }
    res.redirect('/');
  });
```

## Пароль
- `npm i bcrypt`





### Tips

- Local variables. There are two types of local variables, first is global and will be in `app.locals` and request variables `res.  locals`. However, if you need to enter the global variables in your request, you can use `res.app.locals`

1. Данные мы можем сохранить в глобальный объект нашего сервиса в `app.locals`


<!-- https://jsonplaceholder.typicode.com/posts -->