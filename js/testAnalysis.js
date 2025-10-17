// Script de teste para verificar as funções de análise

console.log('🧪 Iniciando testes do sistema Robô-Cyberpunk...\n');

// Função: Verificar se é primo
function isPrime(num) {
  if (num < 2) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

// Função: Verificar paridade
function isOddOrEven(num) {
  return num % 2 === 0 ? 'Par' : 'Ímpar';
}

// Função: Soma dos dígitos
function sumDigits(num) {
  return num
    .toString()
    .split('')
    .reduce((sum, digit) => sum + parseInt(digit), 0);
}

// Função: Verificar Fibonacci
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

// Função: Verificar quadrado perfeito
function isPerfectSquare(num) {
  const sqrt = Math.sqrt(num);
  return sqrt === Math.floor(sqrt);
}

// Função: Verificar palíndromo
function isPalindrome(num) {
  const str = num.toString();
  return str === str.split('').reverse().join('');
}

// Testes
const testNumbers = [2, 7, 13, 17, 21, 89, 144, 121, 999, 100, 101];

console.log('📊 RESULTADOS DOS TESTES:\n');
console.log('═'.repeat(80));

testNumbers.forEach(num => {
  console.log(`\n🔢 NÚMERO: ${num}`);
  console.log('─'.repeat(80));
  console.log(`   Primo: ${isPrime(num) ? '✅ SIM' : '❌ NÃO'}`);
  console.log(`   Paridade: ${isOddOrEven(num)}`);
  console.log(`   Soma dos dígitos: ${sumDigits(num)}`);
  console.log(`   Fibonacci: ${isFibonacci(num) ? '✅ SIM' : '❌ NÃO'}`);
  console.log(`   Quadrado perfeito: ${isPerfectSquare(num) ? '✅ SIM' : '❌ NÃO'}`);
  console.log(`   Palíndromo: ${isPalindrome(num) ? '✅ SIM' : '❌ NÃO'}`);
  console.log(`   Binário: ${num.toString(2)}`);
});

console.log('\n═'.repeat(80));
console.log('\n✅ Todos os testes foram executados com sucesso!\n');

// Teste de performance
console.log('⚡ TESTE DE PERFORMANCE:\n');
console.log('Gerando 1 milhão de números aleatórios...');

const startTime = Date.now();
const numbers = [];
for (let i = 0; i < 1000000; i++) {
  numbers.push(Math.floor(Math.random() * 1000));
}
const generateTime = Date.now() - startTime;

console.log(`✅ Geração concluída em ${generateTime}ms`);

// Encontrar número mais frequente
const freqStart = Date.now();
const frequency = {};
let maxFreq = 0;
let mostFrequent = [];

numbers.forEach(num => {
  frequency[num] = (frequency[num] || 0) + 1;
  if (frequency[num] > maxFreq) {
    maxFreq = frequency[num];
    mostFrequent = [num];
  } else if (frequency[num] === maxFreq && !mostFrequent.includes(num)) {
    mostFrequent.push(num);
  }
});

const freqTime = Date.now() - freqStart;

console.log(`✅ Análise de frequência concluída em ${freqTime}ms`);
console.log(`\n📈 RESULTADO:`);
console.log(`   Número(s) mais frequente(s): ${mostFrequent.join(', ')}`);
console.log(`   Frequência: ${maxFreq} vezes`);
console.log(`   Percentual: ${((maxFreq / numbers.length) * 100).toFixed(4)}%`);

console.log('\n🎉 Teste de performance concluído!\n');
