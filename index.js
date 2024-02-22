
const conect = require('express');
const bodyParser = require('body-parser');

const app = conect();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(conect.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/submit', (req, res) => {
  const email = req.body.email;
//recebe o email, pode ser conectado ao banco
  if (email) {
    const styledResponse = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css">
        <title>Sucesso</title>
      </head>
      <body class="bg-gray-100 text-center p-20">
        <div class="text-green-600 text-2xl font-bold mb-4">E-mail recebido com sucesso!</div>
        <a href="http://localhost:3000" class="text-blue-500 px-4 py-2 bg-blue-200 rounded-md">Voltar</a>
      </body>
      </html>
    `;

    console.log(`E-mail recebido: ${email}`);
    res.send(styledResponse);
  } else {  //em caso de erro
    const errorResponse = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css">
        <title>Erro</title>
      </head>
      <body class="bg-gray-100 text-center p-20">
        <div class="text-red-600 text-2xl font-bold mb-4">Erro: E-mail não recebido!</div>
        <a href="http://localhost:3000" class="text-blue-500 px-4 py-2 bg-blue-200 rounded-md">Voltar</a>
      </body>
      </html>
    `;

    console.log('Erro: E-mail não recebido!');
    res.send(errorResponse);
  }
});


app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
