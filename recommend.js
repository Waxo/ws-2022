import Koa from 'koa';
import Router from '@koa/router';
import {click, recommend, viewAll} from './app/recommender.js';

const app = new Koa();
const router = new Router();
router
  .get('/recommend', (ctx) => {
    ctx.body = recommend();
  })
  .get('/view-all', (ctx) => {
    ctx.body = viewAll();
  })
  .patch('/click/:id', (ctx) => {
    click(Number(ctx.params.id));
    ctx.body = `Click registered ${ctx.params.id}`;
  });

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
