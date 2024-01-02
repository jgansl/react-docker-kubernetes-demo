import { Hono } from "hono";
// import { basicAuth } from "hono/basic-auth";
import { serveStatic } from 'hono/cloudflare-workers'
// import { createFactory, createMiddleware } from 'hono/factory'

const app = new Hono();

// 404
app.notFound((c) => {
   return c.text('Custom 404 Message', 404)
})

app.get("/", (c) => {
  return c.text("Hello Cloudflare Workers Hono!");
});

app.get('/static/*', serveStatic({ root: './' }))
app.get('/favicon.ico', serveStatic({ path: './favicon.ico' }))

// type Env = {
//    Variables: {
//      foo: string
//    }
// }
// const factory = createFactory<Env>()
// const messageMiddleware = createMiddleware(async (c, next) => {
//    await next()
//    c.res.headers.set('X-Message', 'Good morning!')
//  })

// app.get("/api/hello", (c) => {
//   return c.json({
//     ok: true,
//     message: "Hello Hono!",
//   });
// });

// /** Posts
//  *
//  */
// app.get("/posts/:id", (c) => {
//   const page = c.req.query("page");
//   const id = c.req.param("id");
//   c.header("X-Message", "Hi!");
//   return c.text(`You want see ${page} of ${id}`);
// });
// app.post("/posts", (c) => c.text("Created!", 201));
// app.delete("/posts/:id", (c) => c.text(`${c.req.param("id")} is deleted!`));

// /** HTML
//  *
//  */
// const View = () => {
//   return (
//     <html>
//       <body>
//         <h1>Hello Hono!</h1>
//       </body>
//     </html>
//   );
// };

// app.get("/page", (c) => {
//   return c.html(<View />);
// });

// // Raw Response
// app.get("/", (c) => {
//   return new Response("Good morning!");
// });

// // Middleware
// app.use(
//   "/admin/*",
//   basicAuth({
//     username: "admin",
//     password: "secret",
//   })
// );

// app.get("/admin", (c) => {
//   return c.text("Your are authorized!");
// });


/** Test
 * 
 */
// describe('Test the application', () => {
//    it('Should return 200 response', async () => {
//      const res = await app.request('http://localhost/')
//      expect(res.status).toBe(200)
//    })
// })


// // Service Worker
// app.fire()

// Module Worker
export default app;
