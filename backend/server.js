const express = require('express');
const cors = require('cors');
const db = require('./db');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rota de teste
app.get('/', (req, res) => {
  res.send('API do site de advocacia está rodando.');
});

// Rota para formulário de contato
app.post('/api/contato', async (req, res) => {
  try {
    const { nome, email, telefone, mensagem } = req.body;
    
    if (!nome || !email || !mensagem) {
      return res.status(400).json({ error: 'Os campos nome, email e mensagem são obrigatórios.' });
    }

    const result = await db.query(
      'INSERT INTO contatos (nome, email, telefone, mensagem) VALUES ($1, $2, $3, $4) RETURNING *',
      [nome, email, telefone, mensagem]
    );

    res.status(201).json({
      message: 'Contato registrado com sucesso!',
      data: result.rows[0]
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Erro no servidor ao processar o contato.' });
  }
});

app.listen(PORT, async () => {
  try {
    console.log(`Servidor rodando na porta ${PORT}`);
    
    // Criar a tabela no banco de dados automaticamente caso ela não exista
    await db.query(`
      CREATE TABLE IF NOT EXISTS contatos (
          id SERIAL PRIMARY KEY,
          nome VARCHAR(100) NOT NULL,
          email VARCHAR(100) NOT NULL,
          telefone VARCHAR(20),
          mensagem TEXT NOT NULL,
          data_envio TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('Tabela "contatos" verificada/criada com sucesso no banco de dados.');
  } catch (error) {
    console.error('Erro ao verificar/criar a tabela no banco de dados:', error.message);
  }
});
