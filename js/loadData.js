const fs = require('fs');
const path = require('path');

// Criar diretório data se não existir
const dataDir = path.join(__dirname, '..', 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
  console.log('📁 Diretório data criado!');
}

// Função para gerar números aleatórios
function generateRandomNumbers(count, min = 0, max = 999) {
  const numbers = [];
  for (let i = 0; i < count; i++) {
    numbers.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return numbers;
}

// Função para salvar números em arquivo
function saveNumbersToFile(numbers, filename) {
  const filePath = path.join(dataDir, filename);
  const content = numbers.join('\n');
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✅ Arquivo ${filename} criado com ${numbers.length} números`);
}

// Gerar e salvar arquivos
console.log('🎲 Gerando números aleatórios...\n');

// 100 números aleatórios
const small = generateRandomNumbers(100);
saveNumbersToFile(small, '100_random_numbers.txt');

// 10000 números aleatórios
const medium = generateRandomNumbers(10000);
saveNumbersToFile(medium, '10000_random_numbers.txt');

// 1 milhão de números aleatórios
console.log('⏳ Gerando 1 milhão de números (pode demorar um pouco)...');
const large = generateRandomNumbers(1000000);
saveNumbersToFile(large, '1M_random_numbers.txt');

console.log('\n🎉 Todos os arquivos foram gerados com sucesso!');
console.log(`📊 Total de números gerados: ${small.length + medium.length + large.length}`);
console.log('\n💡 Execute "npm start" para iniciar o servidor.');
