# LMiX Deployment 🚀

> Docker Compose deployment configuration for [LMiX](https://github.com/MichaelSchmidle/lmix)

## Overview 🌟

LMiX is not just another AI chat interface - it's a platform for orchestrating rich productions between multiple AI assistants, each with their own role, perspective, and knowledge state. Think of it as a theater where you're the director, but your actors can evolve beyond their initial roles and even break the fourth wall.

## Quick Start 🏃

1. Clone this repository:
  ```bash
  git clone https://github.com/MichaelSchmidle/lmix-deploy
  cd lmix-deploy
  ```
2. Copy and configure environment variables:
  ```bash
  cp default.env .env
  nano .env
  ```
3. Start the stack:
  ```bash
  docker compose up -d
  ```
4. Access LMiX through your preferred method:
  ```bash
  # Privacy (no DNS)
  open http://localhost:5649

  # Privacy + flexibility (local DNS with reverse proxy)
  open http://lmix.localhost # (or https, depending on your reverse proxy setup)

  # Convenience (public DNS with reverse proxy)
  open http://lmix.ai # (or https, depending on your reverse proxy setup)
  ```

## Stack Components 🔧

- LMiX Application: The main web interface
- Supabase: Backend services including:
  - PostgreSQL database
  - Authentication
  - Storage
  - Studio

## Configuration ⚙️

### Network Access

Choose from three deployment modes based on your privacy requirements:

1. **Direct Port Access** (Maximum Privacy)
   - No DNS resolution needed
   - Web UI: http://localhost:5649
   - API: http://localhost:5642
   - Studio: http://localhost:5643

2. **Local Domains** (Privacy + Convenience)
   - Requires local DNS entries
   - Web UI: http://lmix.localhost
   - API: http://lmix-api.localhost
   - Studio: http://studio.lmix.localhost

3. **Public Domains** (Maximum Convenience)
   - Uses public DNS resolution
   - Web UI: https://lmix.ai
   - API: https://api.lmix.ai
   - Studio: https://studio.lmix.ai

### Environment Variables

Copy `default.env` to `.env` and configure:

```bash
# Supabase Configuration (required)
SUPABASE_POSTGRES_PASSWORD=your-secure-password
SUPABASE_JWT_SECRET=your-jwt-secret
SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-key

# Network Configuration
# Ports (memorable defaults: 5649=LMIX, 5642=LMIA, 5647=LMIS)
LMIX_PORT=5649                      # Web UI port
SUPABASE_API_PORT=5642              # API port
SUPABASE_STUDIO_PORT=5647           # Studio port

# Domains (for reverse proxy setups)
LMIX_DOMAIN=lmix.localhost          # Web UI domain
LMIX_API_DOMAIN=lmix-api.localhost  # API domain
```

## Database Management 🗃️

Database migrations are managed through the Supabase CLI, which is integrated into the LMiX application container. When the container starts:

1. It automatically connects to the local Supabase instance
2. Checks for pending migrations
3. Applies any new migrations in order
4. Reports migration status

This ensures that your database schema is always in sync with the LMiX application version you're running.

## Updates 🔄

To update your deployment:

```bash
# Pull latest changes
git pull

# Restart the stack with your chosen network configuration
docker compose down
docker compose pull
docker compose up -d
```

The LMiX container will automatically handle any necessary database migrations during startup.

## Data Persistence 💾

Data is persisted in Docker volumes:
- `lmix-db-data`: PostgreSQL database
- Survives container restarts
- Requires manual backup management

## Troubleshooting 🔍

View container logs:
```bash
# All containers
docker compose logs

# Specific containers
docker compose logs lmix              # Web UI
docker compose logs supabase-db       # Database
docker compose logs supabase-api      # Auth/API
```

## License 📄

This deployment configuration is licensed under the [MIT License](LICENSE).

---

*LMiX: Where every conversation is a new story waiting to unfold.*
