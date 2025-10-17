# 🤖 Robô-Cyberpunk Challenge

<div align="center">

![Version](https://img.shields.io/badge/version-1.0.0-ff1493?style=for-the-badge)
![Node](https://img.shields.io/badge/node-%3E%3D14.0.0-00ff85?style=for-the-badge&logo=node.js)
![License](https://img.shields.io/badge/license-MIT-purple?style=for-the-badge)
![Status](https://img.shields.io/badge/status-active-success?style=for-the-badge)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)

**Sistema de análise de números com design cyberpunk futurista inspirado em ficção científica**

[🚀 Demo](#-como-executar) · [📖 Documentação](#-funcionalidades) · [🐛 Reportar Bug](https://github.com/luizfxdev/robot-cyberpunk-challenge/issues) · [✨ Solicitar Feature](https://github.com/luizfxdev/robot-cyberpunk-challenge/issues)

</div>

---

## 📋 Sobre o Projeto

Este projeto implementa um sistema interativo de análise numérica com design cyberpunk, desenvolvido como solução para o **[Challenge #6: Integer Counting](https://stackoverflow.com/beta/challenges/79766578/complete-code-challenge-6-integer-counting)** do StackOverflow.

### 🎯 O Desafio Original

> **Desafio**: Dada uma lista com 1 milhão de números inteiros aleatórios de 0 a 999, encontre qual número aparece com maior frequência. Em caso de empate, listar todos os números empatados.

### 🌟 A Solução

Este projeto vai além do desafio original, implementando:
- ✅ Análise completa de propriedades matemáticas
- ✅ Interface visual cyberpunk imersiva
- ✅ API RESTful para processamento de dados
- ✅ Sistema responsivo e acessível
- ✅ Banco de dados com 1.010.100 números

---

## 🎨 Design e Assets

### 🎬 Background
- **Estilo**: Cyberpunk com gradiente animado
- **Cores**: Verde neon (#00ff85), Rosa cyberpunk (#ff1493), Roxo, Laranja, Vermelho
- **Efeito**: Transições suaves entre cores com atmosfera futurística

### 🎵 Trilha Sonora
- **Música**: "Night City" – P.T. Adamczyk
- **Referência**: Trilha sonora de Cyberpunk 2077
- **Estilo**: Synthwave/Cyberpunk eletrônico
- **Loop**: Contínuo com controles de play/pause

---

## 🎯 Funcionalidades

### Análise Individual do Número
- ✅ Verificação se o número é primo
- ✅ Identificação de paridade (par/ímpar)
- ✅ Contagem de ocorrências no banco de dados
- ✅ Cálculo da soma dos dígitos
- ✅ Verificação de pertencimento à sequência de Fibonacci
- ✅ Identificação de quadrado perfeito
- ✅ Detecção de palíndromo
- ✅ Representação binária
- ✅ Lista completa de divisores

### Estatísticas do Banco de Dados
- 📊 Total de arquivos processados (3 arquivos)
- 📊 Total de números no banco (1.010.100)
- 📊 Quantidade de números distintos
- 📊 Contagem de números primos
- 📊 Média dos números
- 📊 Número(s) mais frequente(s)

---

## 🛠️ Tecnologias Utilizadas

### Frontend
- **HTML5** - Estrutura semântica
- **CSS3** - Animações e efeitos cyberpunk
- **JavaScript (ES6+)** - Lógica de análise

### Backend
- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **File System (fs)** - Manipulação de arquivos

### Design
- **Google Fonts** - Orbitron & Rajdhani
- **SVG Animations** - Animações nos botões
- **Backdrop Filter** - Efeitos de blur

---

## 📁 Estrutura do Projeto

```
robot-cyberpunk-challenge/
├── assets/
│   ├── background.mp4      # Vídeo cyberpunk
│   └── theme.mp3           # Night City - P.T. Adamczyk
├── data/
│   ├── 100_random_numbers.txt
│   ├── 10000_random_numbers.txt
│   └── 1M_random_numbers.txt
├── js/
│   ├── server.js           # Servidor Express
│   ├── script.js           # Lógica frontend
│   ├── loadData.js         # Gerador de dados
│   └── testAnalysis.js     # Testes
├── index.html              # Interface principal (RAIZ)
├── styles.css              # Estilos CSS (RAIZ)
├── package.json
└── README.md
```

---

## 🚀 Como Executar

### Pré-requisitos

- Node.js (versão 14 ou superior)
- NPM (geralmente vem com Node.js)

### 1️⃣ Clone o Repositório
```bash
git clone https://github.com/luizfxdev/robot-cyberpunk-challenge.git
cd robot-cyberpunk-challenge
```

### 2️⃣ Instale as Dependências
```bash
npm install
```

### 3️⃣ Gere os Arquivos de Dados
```bash
npm run load-data
```

### 4️⃣ Inicie o Servidor
```bash
npm start
```

### 5️⃣ Acesse a Aplicação
Abra seu navegador e acesse: `http://localhost:3000`

---

## 📊 Desafios Técnicos Resolvidos

### 🔥 Performance com Grandes Volumes de Dados
**Desafio**: Processar 1 milhão de números de forma eficiente

**Solução**:
- Carregamento assíncrono dos dados
- Algoritmos otimizados para análise de frequência
- Cache em memória para consultas rápidas

### 🎨 Design Cyberpunk Imersivo
**Desafio**: Criar uma interface visualmente impactante

**Solução**:
- Vídeo background em 4K com gradiente animado
- Efeitos de blur e transparência
- Animações SVG nos botões
- Paleta de cores neon

### 📱 Responsividade Total
**Desafio**: Adaptar para diferentes dispositivos

**Solução**:
- Flexbox e Grid CSS
- Media queries para mobile, tablet e desktop
- Container adaptativo com scroll customizado

### 🔢 Análise Matemática Completa
**Desafio**: Implementar múltiplas verificações matemáticas

**Solução**:
- Algoritmo otimizado de verificação de primos
- Verificação eficiente de Fibonacci
- Detecção de propriedades especiais (palíndromo, quadrado perfeito)

---

## 🎮 Como Usar

1. **Digite um número** entre 1 e 999 no campo de entrada
2. **Clique em "DECIFRAR"** para analisar o número
3. **Visualize os resultados** completos na seção de análise
4. **Clique em "RETORNAR"** para fazer nova análise
5. **Use os controles** 🎵 e ⏸️ para controlar a música

---

## 📂 Arquivos Principais

- **index.html** - Interface principal (na raiz)
- **styles.css** - Todos os estilos (na raiz)
- **js/server.js** - Servidor Node.js/Express
- **js/script.js** - Lógica da aplicação frontend
- **js/loadData.js** - Gerador de arquivos de dados

---

## 📊 Banco de Dados

O sistema processa três arquivos de números aleatórios:
1. **100_random_numbers.txt**: 100 números
2. **10000_random_numbers.txt**: 10.000 números
3. **1M_random_numbers.txt**: 1.000.000 números

**Total**: 1.010.100 números no banco de dados

---

## 🎯 API Endpoints

- `GET /api/numbers` - Retorna todos os números
- `GET /api/stats` - Retorna estatísticas do banco
- `GET /api/analyze/:number` - Analisa um número específico

---

## ⚙️ Scripts Disponíveis

- `npm start` - Inicia o servidor
- `npm run dev` - Inicia com nodemon (auto-reload)
- `npm run load-data` - Gera arquivos de dados
- `npm test` - Executa testes do sistema

---

## 🌟 Destaques

- ✨ Interface futurística e imersiva
- 🚀 Análise matemática completa
- 📊 Estatísticas em tempo real
- 🎨 Animações suaves e elegantes
- 📱 100% responsivo
- 🎵 Controles de áudio integrados
- ⚡ Performance otimizada
- 🔒 API RESTful segura

---

## 📈 Referências

- **Desafio Original**: [StackOverflow Challenge #6: Integer Counting](https://stackoverflow.com/beta/challenges/79766578/complete-code-challenge-6-integer-counting)
- **Trilha Sonora**: "Night City" – P.T. Adamczyk (Cyberpunk 2077 OST)
- **Inspiração Visual**: Estética Cyberpunk 2077

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um Fork do projeto
2. Criar uma Branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a Branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👨‍💻 Autor

**Luiz FX**

- GitHub: [@luizfxdev](https://github.com/luizfxdev)
- LinkedIn: [Seu LinkedIn]([https://www.linkedin.com/in/seu-perfil](https://www.linkedin.com/in/luizfxdev))
- Portfolio: [Seu Site]([https://seu-site.com](https://luizfxdev.com.br))

---

## 🙏 Agradecimentos

- StackOverflow pela inspiração do desafio
- CD Projekt Red pela estética cyberpunk de referência
- P.T. Adamczyk pela trilha sonora épica
- Comunidade open source

---

<div align="center">

**⭐ Se este projeto foi útil, considere dar uma estrela!**

**Desenvolvido com 💜 no universo Cyberpunk**

[![GitHub](https://img.shields.io/badge/GitHub-luizfxdev-ff1493?style=for-the-badge&logo=github)](https://github.com/luizfxdev/robot-cyberpunk-challenge)

</div>

## 🎨 Design

O design foi inspirado na estética cyberpunk com:
- Cores neon (rosa #ff1493 e verde #00ff85)
- Vídeo background com gradiente animado
- Efeitos de brilho e sombra
- Animações suaves nos botões
- Tipografia futurista (Orbitron)
- Interface transparente com backdrop-filter

## 🎵 Recursos de Mídia

### Vídeo Background
- Dimensões: 3840x2160 (4K)
- Formato: MP4
- Efeito: Gradiente animado (verde, rosa, roxo, laranja, vermelho)
- Posicionamento: Tela cheia, centralizado

### Áudio
- Formato: MP3
- Controles: Play/Pause com botões flutuantes
- Loop: Ativado

## 📱 Responsividade

O sistema é totalmente responsivo com breakpoints em:
- **Desktop**: Container fixo à esquerda
- **Tablet** (768px): Container centralizado
- **Mobile** (480px): Botões empilhados verticalmente

## 🔢 Banco de Dados

O sistema processa três arquivos de números aleatórios:
1. **100_random_numbers.txt**: 100 números
2. **10000_random_numbers.txt**: 10.000 números
3. **1M_random_numbers.txt**: 1.000.000 números

**Total**: 1.010.100 números no banco de dados

## 🎯 Desafio Original

Encontrar qual número (de 0 a 999) aparece com maior frequência em uma lista de 1 milhão de números aleatórios. Em caso de empate, listar todos os números empatados.

## 📊 API Endpoints

- `GET /api/numbers` - Retorna todos os números
- `GET /api/stats` - Retorna estatísticas do banco
- `GET /api/analyze/:number` - Analisa um número específico

## ⚙️ Scripts Disponíveis

- `npm start` - Inicia o servidor
- `npm run dev` - Inicia com nodemon (auto-reload)
- `npm run load-data` - Gera arquivos de dados

## 🎮 Como Usar

1. Digite um número entre 1 e 999 no campo de entrada
2. Clique em "DECIFRAR" para analisar
3. Visualize os resultados completos na seção de análise
4. Clique em "RETORNAR" para fazer nova análise
5. Use os botões 🎵 e ⏸️ para controlar a música

## 🌟 Destaques

- ✨ Interface futurística e imersiva
- 🚀 Análise matemática completa
- 📊 Estatísticas em tempo real
- 🎨 Animações suaves e elegantes
- 📱 100% responsivo
- 🎵 Controles de áudio integrados

## 📝 Licença

MIT License - Sinta-se livre para usar e modificar!

---

**Desenvolvido com 💜 no universo Cyberpunk**
