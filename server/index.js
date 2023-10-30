require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const expressSession = require('express-session');


// для хранения даннах из куки
const FileStore = require('session-file-store')(expressSession);


const path = require('path');
const ssr = require('./src/middlewares/ssr');

const viewRouter = require('./src/routes/view.router');
const lkRouter = require('./src/routes/lk.router');

const app = express();
const PORT = process.env.PORT || 3000;

const sessionConfig = {
  name: 'Final',
  store: new FileStore(), // добавить после установки session-file-store
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 10 * 10 * 60 * 1000, // устанавливаем сколько живет кука
    httpOnly: true,
  },
}

app.use(expressSession(sessionConfig));
app.use(cors({credentials: true, origin: true}));
app.use(morgan('dev')); // Логирует запросы
app.use(express.json());  // позволяет преобразовывать json в теле запроса
app.use(express.urlencoded({ extended: true })); // позволяет передавать body в запросе
app.use(express.static(path.join(process.cwd(), 'public'))); // подключает клиентское хранилище


app.listen(PORT, () => {
  console.log(`Server starting on PORT ${PORT}`);
});

app.use('/api', viewRouter);
app.use('/lk', lkRouter);

// npx sequelize-cli model:generate --name User --attributes name:string,password:string
// npx sequelize-cli model:generate --name Project --attributes name:string,price:integer,floor:integer,size:integer,material:string
// npx sequelize-cli model:generate --name House --attributes name:string,size:integer,material:string,pointX:integer,pointY:integer
// npx sequelize-cli model:generate --name PhotoProject --attributes photo:string,projectId:integer
// npx sequelize-cli model:generate --name HouseProject --attributes photo:string,houseId:integer
// npx sequelize-cli seed:generate --name Users