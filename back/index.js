const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const usuarioModel = require('./src/module/usuario/usuario.model');
const app = express();
app.use(express.json());

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

    const token =  jwt.sign({ id: usuarioExistente._id}, 'dnc')
    return res.status(200).json({ message: 'Login bem-sucedido', usuario: usuarioExistente });
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao se conectar' });
  }
});

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

    const senhaCriptografada = bcrypt.hashSync(senha, 10);
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

app.get('/usuarios', async (req, res) => {
  try {
    const usuarios = await usuarioModel.find();
    return res.status(200).json(usuarios);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao buscar usuários' });
  }
});

app.get('/noticias', (req, res) => {
  return res.status(200).json([]);
});

app.post('/noticias', (req, res) => {
  return res.status(201).json([]);
});

app.listen(8080, () => {
  console.log('Servidor está aberto na porta 8080');
});
