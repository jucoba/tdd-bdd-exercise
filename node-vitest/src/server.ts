import Fastify from 'fastify';

const app = Fastify({
  logger: true
});

app.get('/convert', async (request, reply) => {
  const number = Number((request.query as any).number);
  console.log(`Received ${number}`);
  let roman = "";
  if (number === 1) {
    roman = "I";
  }
  console.log(`Result ${roman}`);

  reply.send({ roman });
});

const PORT = 3000;
app.listen({ port: PORT }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server running on ${address}`);
});

export default app;
