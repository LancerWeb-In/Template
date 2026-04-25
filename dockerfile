# ==| www.LancerWeb.in |============================================================================================================================
# ==| www.LancerWeb.in |============================================================================================================================
ARG BUILDKIT_INLINE_CACHE=1
FROM node:24.12.0-slim AS base
WORKDIR /app
FROM base AS deps
COPY package.json yarn.lock* .yarnrc* .yarn/ ./
RUN yarn install --frozen-lockfile
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN yarn build
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
USER nextjs
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 CMD node -e "require('http').get('http://localhost:3000', (r) => process.exit(r.statusCode === 200 ? 0 : 1))" || exit 1
CMD ["node", "server.js"]
# ==| www.LancerWeb.in |============================================================================================================================
# ==| www.LancerWeb.in |============================================================================================================================