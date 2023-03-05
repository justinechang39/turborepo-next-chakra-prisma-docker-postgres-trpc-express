import { inferAsyncReturnType, initTRPC } from '@trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express';
import express from 'express'; // created for each request
import cors from 'cors';

const createContext = ({ req, res }: trpcExpress.CreateExpressContextOptions) => ({
  lol: 'haha'
}); // no context
type Context = inferAsyncReturnType<typeof createContext>;
import { z } from 'zod';
export const t = initTRPC.context<Context>().create();
console.log('server starting');

export const appRouter = t.router({
  testEndpoint: t.procedure.query(() => {
    return 'lol';
  }),
  createUser: t.procedure.input(z.object({ name: z.string().min(5) })).mutation(async (req) => {
    console.log(req.input);

    return 'done!';
  }),
  getUserHaha: t.procedure.input(z.object({ getreq: z.string().optional() })).query((req) => {
    console.log(req.input);

    return 'haha';
  })
});
// export type definition of API
export type AppRouter = typeof appRouter;

const app = express();

const corsOptions: cors.CorsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext
  })
);

app.listen(4001);
