const Koa = require("koa");
const KoaStatic = require("koa-static");

const app = new Koa();
app.use(KoaStatic(__dirname + "/"));

app.listen(3000, () => {
  console.log("server is running at http://localhost:3000");
});
