FROM node:22-alpine AS builder

WORKDIR /app

# Copy workspace root
COPY package.json package-lock.json turbo.json ./
COPY packages/db ./packages/db
COPY packages/types ./packages/types
COPY packages/tokens ./packages/tokens
COPY packages/checkfront ./packages/checkfront
COPY packages/gokyte ./packages/gokyte
COPY apps/api ./apps/api

# Install all deps
RUN npm ci

# Generate Prisma client
RUN cd packages/db && npx prisma generate

# Build the API
RUN cd apps/api && npm run build

# ─── Production image ─────────────────────────────────────────
FROM node:22-alpine AS runner

WORKDIR /app

COPY --from=builder /app/packages/db ./packages/db
COPY --from=builder /app/apps/api/dist ./dist
COPY --from=builder /app/apps/api/node_modules ./node_modules
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /app/node_modules/@prisma ./node_modules/@prisma

ENV NODE_ENV=production
EXPOSE 4000

CMD ["node", "dist/main"]
