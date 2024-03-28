# Stage 1: 빌드 환경
FROM node:18-alpine as builder

WORKDIR /app

# 패키지 파일 복사 및 의존성 설치
COPY package.json package-lock.json ./
RUN npm install

# 애플리케이션 파일 복사
COPY . .

# Next.js 애플리케이션 빌드
RUN npm run build

# Stage 2: 런타임 환경
FROM node:18-alpine

WORKDIR /app

# 빌드된 파일 및 의존성 복사
COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# 포트 노출 및 애플리케이션 실행
EXPOSE 3000
CMD ["npm", "start"]
