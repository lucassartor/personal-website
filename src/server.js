const app = require('./app');

const port = 3000;

app.listen(port, () => {
    console.log(`API rodando na porta: ${port}`);
});