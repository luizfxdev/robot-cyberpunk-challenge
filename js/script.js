// Elementos do DOM
const numberInput = document.getElementById('number-input');
const analyzeBtn = document.getElementById('analyze-btn');
const returnBtn = document.getElementById('return-btn');
const resultSection = document.getElementById('result-section');
const resultContent = document.getElementById('result-content');
const databaseStats = document.getElementById('database-stats');
const playAudioBtn = document.getElementById('play-audio');
const pauseAudioBtn = document.getElementById('pause-audio');
const bgAudio = document.getElementById('bg-audio');

// Banco de dados simulado (será carregado do servidor)
let numbersDatabase = [];
let databaseLoaded = false;

// Carregar dados do servidor
async function loadDatabase() {
  try {
    const response = await fetch('/api/numbers');
    const data = await response.json();
    numbersDatabase = data.numbers;
    databaseLoaded = true;
    console.log('Banco de dados carregado com sucesso!');
  } catch (error) {
    console.error('Erro ao carregar banco de dados:', error);
    // Simular dados para demonstração
    generateMockData();
  }
}

// Gerar dados simulados para demonstração
function generateMockData() {
  numbersDatabase = [];
  for (let i = 0; i < 1000000; i++) {
    numbersDatabase.push(Math.floor(Math.random() * 1000));
  }
  databaseLoaded = true;
  console.log('Dados simulados gerados!');
}

// Verificar se um número é primo
function isPrime(num) {
  if (num < 2) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

// Verificar se é ímpar ou par
function isOddOrEven(num) {
  return num % 2 === 0 ? 'Par' : 'Ímpar';
}

// Contar ocorrências no banco de dados
function countOccurrences(num) {
  return numbersDatabase.filter(n => n === num).length;
}

// Calcular soma dos dígitos
function sumDigits(num) {
  return num
    .toString()
    .split('')
    .reduce((sum, digit) => sum + parseInt(digit), 0);
}

// Verificar se pertence à sequência de Fibonacci
function isFibonacci(num) {
  let a = 0,
    b = 1;
  if (num === 0 || num === 1) return true;

  while (b < num) {
    let temp = b;
    b = a + b;
    a = temp;
  }
  return b === num;
}

// Verificar se é quadrado perfeito
function isPerfectSquare(num) {
  const sqrt = Math.sqrt(num);
  return sqrt === Math.floor(sqrt);
}

// Verificar se é palíndromo
function isPalindrome(num) {
  const str = num.toString();
  return str === str.split('').reverse().join('');
}

// Converter para binário
function toBinary(num) {
  return num.toString(2);
}

// Encontrar divisores
function findDivisors(num) {
  const divisors = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) divisors.push(i);
  }
  return divisors;
}

// Análise completa do número
function analyzeNumber(num) {
  const analysis = {
    number: num,
    isPrime: isPrime(num),
    oddEven: isOddOrEven(num),
    occurrences: countOccurrences(num),
    digitSum: sumDigits(num),
    isFibonacci: isFibonacci(num),
    isPerfectSquare: isPerfectSquare(num),
    isPalindrome: isPalindrome(num),
    binary: toBinary(num),
    divisors: findDivisors(num)
  };
  return analysis;
}

// Estatísticas do banco de dados
function getDatabaseStats() {
  const uniqueNumbers = [...new Set(numbersDatabase)].length;
  const primeCount = numbersDatabase.filter(n => isPrime(n)).length;
  const average = numbersDatabase.reduce((sum, n) => sum + n, 0) / numbersDatabase.length;

  // Encontrar número mais frequente
  const frequency = {};
  let maxFreq = 0;
  let mostFrequent = [];

  numbersDatabase.forEach(num => {
    frequency[num] = (frequency[num] || 0) + 1;
    if (frequency[num] > maxFreq) {
      maxFreq = frequency[num];
      mostFrequent = [num];
    } else if (frequency[num] === maxFreq && !mostFrequent.includes(num)) {
      mostFrequent.push(num);
    }
  });

  return {
    totalFiles: 3, // 100_random_numbers, 10000_random_numbers, 1M_random_numbers
    totalNumbers: numbersDatabase.length,
    uniqueNumbers: uniqueNumbers,
    primeCount: primeCount,
    average: average.toFixed(2),
    mostFrequent: mostFrequent,
    maxFrequency: maxFreq
  };
}

// Exibir resultado da análise
function displayAnalysis(analysis) {
  resultContent.innerHTML = `
        <div class="result-item">
            <strong>1. É PRIMO?</strong>
            <span style="color: ${analysis.isPrime ? '#00ff85' : '#ffff'}">
                ${analysis.isPrime ? 'SIM' : 'NÃO'} - 
                ${
                  analysis.isPrime
                    ? `${analysis.number} é um número primo (divisível apenas por 1 e ${analysis.number})`
                    : `${analysis.number} não é primo. Divisores: ${analysis.divisors.join(', ')}`
                }
            </span>
        </div>
        
        <div class="result-item">
            <strong>2. PARIDADE:</strong>
            <span>${analysis.oddEven} - 
                ${
                  analysis.oddEven === 'Par'
                    ? `${analysis.number} é divisível por 2`
                    : `${analysis.number} deixa resto 1 quando dividido por 2`
                }
            </span>
        </div>
        
        <div class="result-item">
            <strong>3. OCORRÊNCIAS NO BANCO:</strong>
            <span style="color: #00ff85; font-size: 24px;">
                ${analysis.occurrences.toLocaleString()} vezes
            </span>
            <br>
            <small style="color: rgba(255,255,255,0.7)">
                Representa ${((analysis.occurrences / numbersDatabase.length) * 100).toFixed(4)}% do banco de dados
            </small>
        </div>
        
        <div class="result-item">
            <strong>4. SOMA DOS DÍGITOS:</strong>
            <span>${analysis.digitSum}</span>
            <br>
            <small style="color: rgba(255,255,255,0.7)">
                Cálculo: ${analysis.number.toString().split('').join(' + ')} = ${analysis.digitSum}
                ${analysis.isFibonacci ? ' | ✨ Este número pertence à sequência de Fibonacci!' : ''}
            </small>
        </div>
        
        <div class="result-item">
            <strong>5. PROPRIEDADES ESPECIAIS:</strong>
            <span>
                ${
                  analysis.isPerfectSquare
                    ? `✅ É um quadrado perfeito (√${analysis.number} = ${Math.sqrt(analysis.number)})`
                    : '❌ Não é quadrado perfeito'
                }
                <br>
                ${analysis.isPalindrome ? '✅ É um palíndromo!' : '❌ Não é palíndromo'}
                <br>
                Representação binária: <code style="color: #00ff85">${analysis.binary}</code>
            </span>
        </div>
        
        <div class="result-highlight">
            <div style="color: #ff69b4; font-size: 14px; margin-bottom: 10px;">NÚMERO ANALISADO</div>
            <div class="number">${analysis.number}</div>
            <div style="color: rgba(255,255,255,0.8); margin-top: 10px; font-size: 14px;">
                ${analysis.isPrime ? '⭐ NÚMERO PRIMO' : '⚡ NÚMERO COMPOSTO'} | 
                ${analysis.oddEven.toUpperCase()}
            </div>
        </div>
    `;

  // Exibir estatísticas do banco
  const stats = getDatabaseStats();
  databaseStats.innerHTML = `
        <h3>📊 ESTATÍSTICAS DO BANCO DE DADOS</h3>
        
        <div class="stat-item">
            <span class="stat-label">Total de Arquivos:</span>
            <span class="stat-value">${stats.totalFiles}</span>
        </div>
        
        <div class="stat-item">
            <span class="stat-label">Total de Números:</span>
            <span class="stat-value">${stats.totalNumbers.toLocaleString()}</span>
        </div>
        
        <div class="stat-item">
            <span class="stat-label">Números Distintos:</span>
            <span class="stat-value">${stats.uniqueNumbers.toLocaleString()}</span>
        </div>
        
        <div class="stat-item">
            <span class="stat-label">Números Primos:</span>
            <span class="stat-value">${stats.primeCount.toLocaleString()}</span>
        </div>
        
        <div class="stat-item">
            <span class="stat-label">Média dos Números:</span>
            <span class="stat-value">${stats.average}</span>
        </div>
        
        <div class="stat-item">
            <span class="stat-label">Número Mais Frequente:</span>
            <span class="stat-value">
                ${
                  stats.mostFrequent.length > 1
                    ? `Empate: ${stats.mostFrequent.slice(0, 5).join(', ')}${
                        stats.mostFrequent.length > 5 ? '...' : ''
                      }`
                    : stats.mostFrequent[0]
                }
                (${stats.maxFrequency}x)
            </span>
        </div>
    `;

  resultSection.classList.add('show');
}

// Event Listeners
analyzeBtn.addEventListener('click', () => {
  const num = parseInt(numberInput.value);

  if (!num || num < 1 || num > 999) {
    alert('Por favor, insira um número válido entre 1 e 999!');
    return;
  }

  if (!databaseLoaded) {
    alert('Aguarde o carregamento do banco de dados...');
    loadDatabase();
    return;
  }

  const analysis = analyzeNumber(num);
  displayAnalysis(analysis);
});

returnBtn.addEventListener('click', () => {
  numberInput.value = '';
  resultSection.classList.remove('show');
  resultContent.innerHTML = '';
  databaseStats.innerHTML = '';
});

// Enter key para analisar
numberInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    analyzeBtn.click();
  }
});

// Controles de áudio
playAudioBtn.addEventListener('click', () => {
  bgAudio.play();
});

pauseAudioBtn.addEventListener('click', () => {
  bgAudio.pause();
});

// Carregar banco de dados ao iniciar
window.addEventListener('load', () => {
  loadDatabase();
});
