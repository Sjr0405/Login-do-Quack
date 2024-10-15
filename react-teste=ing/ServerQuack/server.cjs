const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors'); // Importar o pacote cors

const app = express();
const port = 5180;

// Usar o middleware cors para permitir requisições de qualquer origem
app.use(cors());

app.use(express.json());

// Servir arquivos estáticos (JSON)
app.use('/public/data', express.static(path.join(__dirname, 'public', 'data')));

// Rota para salvar progresso do usuário
app.post('/data/saveUserProgress', (req, res) => {
  const { userId, progress } = req.body;
  const userProgressPath = path.join(__dirname, 'public', 'data', 'userProgress.json');
  console.log('Recebendo progresso do usuário:', req.body); // Log para depuração

  // Verificar se o diretório existe, caso contrário, criar
  const dir = path.dirname(userProgressPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFile(userProgressPath, JSON.stringify({ userId, progress }, null, 2), (err) => {
    if (err) {
      console.error('Error saving user progress:', err);
      return res.status(500).json({ message: 'Erro ao salvar progresso do usuário' });
    }
    res.setHeader('Content-Encoding', 'identity'); // Garantir que a codificação de conteúdo está correta
    res.json({ message: 'Progresso salvo com sucesso!' });
  });
});

// Middleware para tratamento de erros
app.use((err, req, res, next) => {
  console.error('Erro no servidor:', err);
  res.status(500).json({ message: 'Erro interno do servidor' });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});