const express = require('express');
const cors = require('cors')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const usuarioModel = require('./src/module/usuario/usuario.model');
const noticiaModel = require('./src/module/noticia/noticia.model');
const app = express();

app.use(express.json());
app.use(cors())

// Middleware de tratamento de erros
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: 'Algo deu errado!' });
});

// Rota de login
app.post('/login', async (req, res) => {
  const { email, senha } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'O email é obrigatório' });
  }

  if (typeof email !== 'string') {
    return res.status(400).json({ message: 'O email deve ser uma string' });
  }

  if (!senha) {
    return res.status(400).json({ message: 'A senha é obrigatória' });
  }

  if (typeof senha !== 'string') {
    return res.status(400).json({ message: 'A senha deve ser uma string' });
  }

  try {
    const usuarioExistente = await usuarioModel.findOne({ email });

    if (!usuarioExistente) {
      return res.status(400).json({ message: 'Usuário não existe' });
    }

    const senhaValida = await bcrypt.compare(senha, usuarioExistente.senha);

    if (!senhaValida) {
      return res.status(400).json({ message: 'Senha incorreta' });
    }

    const token = jwt.sign({ id: usuarioExistente._id }, 'dnc');
    return res.status(200).json({ message: 'Login bem-sucedido', usuario: usuarioExistente, token });
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao se conectar' });
  }
});

// Rota de criação de usuário
app.post('/usuarios', async (req, res) => {
  const { email, senha, nome } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'O email é obrigatório' });
  }

  if (typeof email !== 'string') {
    return res.status(400).json({ message: 'O email deve ser uma string' });
  }

  if (!senha) {
    return res.status(400).json({ message: 'A senha é obrigatória' });
  }

  if (typeof senha !== 'string') {
    return res.status(400).json({ message: 'A senha deve ser uma string' });
  }

  try {
    const usuarioExistente = await usuarioModel.findOne({ email });

    if (usuarioExistente) {
      return res.status(400).json({ message: 'Usuário já existe' });
    }

    const senhaCriptografada = await bcrypt.hash(senha, 10);
    const usuario = await usuarioModel.create({
      nome,
      email,
      senha: senhaCriptografada,
    });

    return res.status(201).json(usuario);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao criar o usuário' });
  }
});

// Rota para buscar usuários
app.get('/usuarios', async (_, res) => {
  try {
    const usuarios = await usuarioModel.find();
    return res.status(200).json(usuarios);
  } catch (error) {
    return res.status
    return res.status(500).json({ message: 'Erro ao buscar usuários' });
  }
});

// Rota para buscar notícias
app.get('/noticias', async (req, res) => {
    let filtroCategoria = {}
    if(req.query.categoria){
      filtroCategoria = { categoria:req.query.categoria }
    }
  try {
    const noticias = await noticiaModel.find(filtroCategoria);
    return res.status(200).json(noticias);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao buscar notícias' });
  }
});

// Rota para criar notícias
app.post('/noticias', async (req, res) => {
  const { titulo, img, texto, categoria } = req.body;

  if (!titulo) {
    return res.status(400).json({ message: 'Título é obrigatório' });
  }
  if (!img) {
    return res.status(400).json({ message: 'Imagem é obrigatória' });
  }
  if (!texto) {
    return res.status(400).json({ message: 'Texto é obrigatório' });
  }
  if (!categoria) {
    return res.status(400).json({ message: 'Categoria é obrigatória' });
  }

  try {
    const noticia = await noticiaModel.create({
      titulo,
      img,
      texto,
      categoria,
    });
    return res.status(201).json(noticia);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao criar notícia' });
  }
});

// Inicializa o servidor
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servidor está aberto na porta ${PORT}`);
});