import Koa from 'koa';
import mongoose from 'mongoose';

mongoose.connect('mongodb://db:27017/test');

const Book = mongoose.model('Book', {name: String, author: String});

const app = new Koa();

// response
app.use(async (ctx) => {
  if (ctx.request.url.includes('/create')) {
    const osef = new Book({name: String(Math.random()), author: 'qsd2'});
    await osef.save();
    ctx.body = 'Created';
  } else if (ctx.request.url.includes('/read')) {
    ctx.body = JSON.stringify(await Book.find().exec());
  } else if (ctx.request.url.includes('/update')) {
    const x = (await Book.find().exec())[0];
    x.name = 'bob';
    await x.save();
    ctx.body = 'OK';
  } else if (ctx.request.url.includes('/delete')) {
    const x = (await Book.find().exec())[0];
    await x.delete();
    ctx.body = 'OK';
  }
});

app.listen(3000);
