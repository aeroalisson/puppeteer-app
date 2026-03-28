FROM node:20-slim

# 🔥 impede qualquer download do puppeteer
ENV PUPPETEER_SKIP_DOWNLOAD=true
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium

# instala chromium + libs básicas
RUN apt-get update && apt-get install -y \
  chromium \
  libnss3 \
  libatk-bridge2.0-0 \
  libatk1.0-0 \
  libcups2 \
  libdrm2 \
  libxkbcommon0 \
  libxcomposite1 \
  libxdamage1 \
  libxrandr2 \
  libgbm1 \
  libasound2 \
  libgtk-3-0 \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# copia só package.json primeiro
COPY package*.json ./

# 🔥 ESSA LINHA RESOLVE SEU ERRO
RUN npm install --omit=dev --no-audit --no-fund --ignore-scripts

# copia resto dos arquivos
COPY . .

CMD ["node", "test.js"]
