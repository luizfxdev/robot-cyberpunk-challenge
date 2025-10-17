# 📁 Estrutura do Projeto Robô-Cyberpunk

## 🗂️ Organização de Arquivos e Pastas

```
robot-cyberpunk-challenge/
│
├── assets/                         # 🎨 Arquivos de mídia
│   ├── background.mp4              # ⚠️ Vídeo de fundo (VOCÊ ADICIONA)
│   └── theme.mp3                   # ⚠️ Música tema (VOCÊ ADICIONA)
│
├── data/                           # 📊 Arquivos de dados (gerados automaticamente)
│   ├── 100_random_numbers.txt      # 🤖 Gerado por loadData.js
│   ├── 10000_random_numbers.txt    # 🤖 Gerado por loadData.js
│   └── 1M_random_numbers.txt       # 🤖 Gerado por loadData.js
│
├── js/                             # 💻 Scripts JavaScript
│   ├── server.js                   # ✅ Servidor Express/Node.js
│   ├── script.js                   # ✅ Lógica frontend da aplicação
│   ├── loadData.js                 # ✅ Gera arquivos de dados
│   └── testAnalysis.js             # ✅ Testes e validações
│
├── node_modules/                   # 📦 Dependências (gerado por npm install)
│   └── ...                         # 🤖 Não versionar (no .gitignore)
│
├── index.html                      # ✅ Interface principal (RAIZ)
├── styles.css                      # ✅ Estilos CSS (RAIZ)
├── package.json                    # ✅ Configuração NPM
├── package-lock.json               # 🤖 Lockfile do NPM (gerado automaticamente)
├── .gitignore                      # ✅ Arquivos ignorados pelo Git
├── README.md                       # 📖 Documentação principal
├── QUICK_START.md                  # ⚡ Guia rápido de instalação
└── ARQUIVOS.md                     # 📄 Lista de arquivos
```

## 🎯 Localização dos Arquivos

### 📍 RAIZ DO PROJETO

- **index.html** - Interface HTML principal do sistema
- **styles.css** - Todos os estilos, animações e responsividade
- **package.json** - Configurações, scripts e dependências
- **.gitignore** - Arquivos a serem ignorados pelo Git

### 📁 PASTA: `/assets`

- **background.mp4** - Vídeo de fundo (3840x2160, gradiente animado)
- **theme.mp3** - Música tema cyberpunk

**⚠️ Você deve adicionar estes arquivos manualmente!**

### 📁 PASTA: `/js`

- **server.js** - Servidor Express, rotas da API, gerencia dados
- **script.js** - Lógica do frontend, análise de números, eventos
- **loadData.js** - Gera os 3 arquivos de números aleatórios
- **testAnalysis.js** - Executa testes das funções e valida sistema

### 📁 PASTA: `/data` (criada automaticamente)

- **100_random_numbers.txt** - 100 números aleatórios
- **10000_random_numbers.txt** - 10.000 números aleatórios
- **1M_random_numbers.txt** - 1.000.000 números aleatórios

**🤖 Gerada automaticamente pelo comando:** `npm run load-data`

### 📁 PASTA: `/node_modules` (criada automaticamente)

- Todas as dependências instaladas pelo NPM

**🤖 Gerada automaticamente pelo comando:** `npm install`

## 🔗 Dependências entre Arquivos

```
index.html
    ├──[link]──→ styles.css
    ├──[script]──→ js/script.js
    ├──[video]──→ assets/background.mp4
    └──[audio]──→ assets/theme.mp3

js/script.js
    └──[fetch API]──→ js/server.js

js/server.js
    ├──[serve]──→ index.html (raiz)
    ├──[serve]──→ styles.css (raiz)
    ├──[serve]──→ assets/* (estáticos)
    ├──[read]──→ data/100_random_numbers.txt
    ├──[read]──→ data/10000_random_numbers.txt
    └──[read]──→ data/1M_random_numbers.txt

js/loadData.js
    ├──[create]──→ data/ (pasta)
    ├──[write]──→ data/100_random_numbers.txt
    ├──[write]──→ data/10000_random_numbers.txt
    └──[write]──→ data/1M_random_numbers.txt

js/testAnalysis.js
    └──[verify]──→ data/*.txt (verifica existência)
```

## 🚀 Comandos e Scripts

### Comandos NPM Disponíveis

| Comando             | Localização          | Descrição                        |
| ------------------- | -------------------- | -------------------------------- |
| `npm start`         | `js/server.js`       | Inicia o servidor na porta 3000  |
| `npm run dev`       | `js/server.js`       | Inicia com nodemon (auto-reload) |
| `npm run load-data` | `js/loadData.js`     | Gera arquivos de dados           |
| `npm test`          | `js/testAnalysis.js` | Executa testes do sistema        |

### Onde cada script executa:

```bash
# Este comando executa: node js/server.js
npm start

# Este comando executa: nodemon js/server.js
npm run dev

# Este comando executa: node js/loadData.js
npm run load-data

# Este comando executa: node js/testAnalysis.js
npm test
```

## 📦 Dependências do Projeto

### Produção (dependencies)

```json
{
  "express": "^4.18.2", // Servidor web
  "cors": "^2.8.5", // CORS para API
  "dotenv": "^16.3.1", // Variáveis de ambiente
  "fs": "^0.0.1-security", // File system
  "path": "^0.12.7" // Manipulação de paths
}
```

### Desenvolvimento (devDependencies)

```json
{
  "nodemon": "^3.0.1" // Auto-reload do servidor
}
```

## 🎨 Assets Recomendados

### background.mp4

- **Resolução**: 3840x2160 (4K) ou 1920x1080 (Full HD)
- **Formato**: MP4 (H.264)
- **Duração**: 10-30 segundos (loop automático)
- **Efeito**: Gradiente animado
- **Cores**: Verde (#00ff85), Rosa (#ff1493), Roxo, Laranja, Vermelho
- **Tamanho**: ~5-20 MB

### theme.mp3

- **Formato**: MP3
- **Bitrate**: 128kbps ou superior
- **Duração**: 2-5 minutos (loop automático)
- **Estilo**: Synthwave, Cyberpunk, Eletrônica
- **Tamanho**: ~3-8 MB

## ✅ Checklist de Criação

### Passo 1: Criar Pastas

```bash
mkdir robot-cyberpunk-challenge
cd robot-cyberpunk-challenge
mkdir assets js
```

### Passo 2: Arquivos na Raiz

- [ ] `index.html`
- [ ] `styles.css`
- [ ] `package.json`
- [ ] `.gitignore`

### Passo 3: Arquivos na Pasta js/

- [ ] `js/server.js`
- [ ] `js/script.js`
- [ ] `js/loadData.js`
- [ ] `js/testAnalysis.js`

### Passo 4: Assets

- [ ] `assets/background.mp4` (VOCÊ ADICIONA)
- [ ] `assets/theme.mp3` (VOCÊ ADICIONA)

### Passo 5: Instalação

```bash
npm install          # Instala dependências
npm run load-data    # Gera arquivos de dados
npm start            # Inicia o servidor
```

## 🌐 URLs e Portas

- **Servidor**: `http://localhost:3000`
- **API**: `http://localhost:3000/api/*`
  - `/api/numbers` - Retorna todos os números
  - `/api/stats` - Retorna estatísticas do banco
  - `/api/analyze/:number` - Analisa número específico

## 📊 Tamanho dos Arquivos

| Arquivo/Pasta                 | Tamanho Aproximado  |
| ----------------------------- | ------------------- |
| index.html                    | ~5 KB               |
| styles.css                    | ~15 KB              |
| js/server.js                  | ~8 KB               |
| js/script.js                  | ~12 KB              |
| js/loadData.js                | ~3 KB               |
| js/testAnalysis.js            | ~5 KB               |
| data/100_random_numbers.txt   | ~0.3 KB             |
| data/10000_random_numbers.txt | ~40 KB              |
| data/1M_random_numbers.txt    | ~4 MB               |
| node_modules/                 | ~50-100 MB          |
| assets/background.mp4         | ~5-20 MB (variável) |
| assets/theme.mp3              | ~3-8 MB (variável)  |

**Total do projeto**: ~65-135 MB (incluindo node_modules)

---

**Estrutura organizada e pronta para uso! 📂✨**
