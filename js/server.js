const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Servir arquivos estáticos da raiz do projeto
app.use(express.static(path.join(__dirname, '..')));
app.use('/assets', express.static(path.join(__dirname, '..', 'assets')));
app.use('/js', express.static(path.join(__dirname)));

// Database in memory
let numbersDatabase = {
  small: [], // 100_random_numbers
  medium: [], // 10000_random_numbers
  large: [] // 1M_random_numbers
};

let allNumbers = [];

// Load data from files
function loadDataFromFiles() {
  try {
    // Load 100 random numbers
    const smallData = fs.readFileSync(path.join(__dirname, '..', 'data', '100_random_numbers.txt'), 'utf8');
    numbersDatabase.small = smallData
      .split('\n')
      .filter(line => line.trim())
      .map(Number);

    // Load 10000 random numbers
    const mediumData = fs.readFileSync(path.join(__dirname, '..', 'data', '10000_random_numbers.txt'), 'utf8');
    numbersDatabase.medium = mediumData
      .split('\n')
      .filter(line => line.trim())
      .map(Number);

    // Load 1M random numbers
    const largeData = fs.readFileSync(path.join(__dirname, '..', 'data', '1M_random_numbers.txt'), 'utf8');
    numbersDatabase.large = largeData
      .split('\n')
      .filter(line => line.trim())
      .map(Number);

    // Combine all numbers
    allNumbers = [...numbersDatabase.small, ...numbersDatabase.medium, ...numbersDatabase.large];

    console.log('✅ Dados carregados com sucesso!');
    console.log(`   Small: ${numbersDatabase.small.length} números`);
    console.log(`   Medium: ${numbersDatabase.medium.length} números`);
    console.log(`   Large: ${numbersDatabase.large.length} números`);
    console.log(`   Total: ${allNumbers.length} números`);
  } catch (error) {
    console.error('❌ Erro ao carregar dados:', error.message);
    console.log('⚠️  Gerando dados aleatórios para demonstração...');
    generateMockData();
  }
}

// Generate mock data if files don't exist
function generateMockData() {
  // Generate 100 random numbers
  for (let i = 0; i < 100; i++) {
    numbersDatabase.small.push(Math.floor(Math.random() * 1000));
  }

  // Generate 10000 random numbers
  for (let i = 0; i < 10000; i++) {
    numbersDatabase.medium.push(Math.floor(Math.random() * 1000));
  }

  // Generate 1M random numbers
  for (let i = 0; i < 1000000; i++) {
    numbersDatabase.large.push(Math.floor(Math.random() * 1000));
  }

  allNumbers = [...numbersDatabase.small, ...numbersDatabase.medium, ...numbersDatabase.large];
  console.log('✅ Dados simulados gerados!');
}

// API Routes

// Get all numbers
app.get('/api/numbers', (req, res) => {
  res.json({
    success: true,
    numbers: allNumbers,
    count: allNumbers.length
  });
});

// Get database stats
app.get('/api/stats', (req, res) => {
  const uniqueNumbers = [...new Set(allNumbers)].length;

  // Count primes
  const isPrime = num => {
    if (num < 2) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const primeCount = allNumbers.filter(n => isPrime(n)).length;
  const average = allNumbers.reduce((sum, n) => sum + n, 0) / allNumbers.length;

  // Find most frequent number
  const frequency = {};
  let maxFreq = 0;
  let mostFrequent = [];

  allNumbers.forEach(num => {
    frequency[num] = (frequency[num] || 0) + 1;
    if (frequency[num] > maxFreq) {
      maxFreq = frequency[num];
      mostFrequent = [num];
    } else if (frequency[num] === maxFreq && !mostFrequent.includes(num)) {
      mostFrequent.push(num);
    }
  });

  res.json({
    success: true,
    stats: {
      totalFiles: 3,
      totalNumbers: allNumbers.length,
      uniqueNumbers: uniqueNumbers,
      primeCount: primeCount,
      average: average.toFixed(2),
      mostFrequent: mostFrequent,
      maxFrequency: maxFreq
    }
  });
});

// Analyze specific number
app.get('/api/analyze/:number', (req, res) => {
  const num = parseInt(req.params.number);

  if (isNaN(num) || num < 1 || num > 999) {
    return res.status(400).json({
      success: false,
      error: 'Número inválido. Use valores entre 1 e 999.'
    });
  }

  const occurrences = allNumbers.filter(n => n === num).length;

  res.json({
    success: true,
    number: num,
    occurrences: occurrences,
    percentage: ((occurrences / allNumbers.length) * 100).toFixed(4)
  });
});

// Serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

// Initialize server
loadDataFromFiles();

app.listen(PORT, () => {
  console.log(`\n🚀 Servidor Robô-Cyberpunk rodando na porta ${PORT}`);
  console.log(`📡 Acesse: http://localhost:${PORT}\n`);
});
