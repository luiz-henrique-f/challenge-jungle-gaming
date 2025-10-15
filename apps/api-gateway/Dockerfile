FROM node:20-alpine AS base
WORKDIR /app

# Copia apenas o package.json do gateway
COPY package*.json ./

# Instala dependências
RUN npm ci

# Copia o restante do código
COPY . .

# Porta padrão do gateway
EXPOSE 3001

# Comando padrão de dev
CMD ["npm", "run", "start:dev"]
