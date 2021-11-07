const [{ Server: h1 }, x] = [require('http'), require('express')];
const bodyParser = require('body-parser');
const { nextTick } = require('process');


const ApiRouter = require('./routes/api');

const Router = x.Router();
const PORT = 4321;

const hu = { 'Content-Type': 'text/html; charset=utf-8' };
const app = x();


app.set("view engine", "ejs");

Router
  .route('/')
  .get(r => r.res.end('Привет мир!'));
app
  .use((r, rs, n) => rs.status(200).set(hu) && n())
  .use(x.static('.'))
  .use(bodyParser.urlencoded({ extended: true}))
  .use('/', Router)
  .use('/api', ApiRouter(x))
  .use((e, r, rs, n) => rs.status(500).set(hu).send(`Ошибка: ${e}`))


//   .use((r, rs, n) => rs.status(200).set(hu) && n())
//   .use(x.static('.'))
//   .use(bodyParser.urlencoded({ extended: true}))
//   .use('/', Router)
  //.use('/api', ApiRouter1(x))
 
  
//   .use(({ res: r }) => r.status(404).set(hu).send('Пока нет!'))
//   .use((e, r, rs, n) => rs.status(500).set(hu).send(`Ошибка: ${e}`))
  /* .set('view engine', 'pug') */
  .set('x-powered-by', false);
module.exports = h1(app)
  .listen(process.env.PORT || PORT);