import { Application } from 'https://deno.land/x/oak/mod.ts';
import router from './routes/products.routes.ts';

const app = new Application();
const PORT = 3001;
app.use(router.routes());
app.use(router.allowedMethods());

console.log('Server running on port', PORT);
await app.listen({ port: PORT });
