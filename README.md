# LMiX Deployment 🚀

> Docker Compose deployment configuration for [LMiX](https://github.com/MichaelSchmidle/lmix)

## Overview 🌟

LMiX is not just another AI chat interface - it's a platform for orchestrating rich interactions between multiple AI assistants, each with their own role, perspective, and knowledge state. Think of it as a theater where you're the director, but your actors can evolve beyond their initial roles and even break the fourth wall.

## Quick Start 🏃

1. Clone this repository:
  ```bash
  git clone https://github.com/MichaelSchmidle/lmix-deploy
  cd lmix-deploy
  ```
2. Copy and configure environment variables, for example:
  ```bash
  cp default.env .env
  nano .env
  ```
3. Start the stack:
  ```bash
  docker compose up -d
  ```
4. Access the applications:
- LMiX: http://localhost:3000 (configurable via LMIX_PORT environment variable)
- Supabase Studio: http://localhost:54323 (configurable via SUPABASE_STUDIO_PORT environment variable)

## Stack Components 🔧

- LMiX Application: The main web interface
- Supabase: Backend services including:
  - PostgreSQL database
  - Authentication
  - Storage

## Configuration ⚙️

### Environment Variables

Copy `default.env` to `.env` and configure:

```bash
# Supabase Configuration (required)
SUPABASE_POSTGRES_PASSWORD=your-secure-password
SUPABASE_JWT_SECRET=your-jwt-secret
SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-key

# Port Configuration (optional)
LMIX_PORT=3000                  # LMiX web interface port
SUPABASE_API_PORT=54321         # Supabase API port
SUPABASE_STUDIO_PORT=54323      # Supabase Studio port
```

### Port Configuration

All service ports can be configured through environment variables:
- LMIX_PORT (default: 3000)
- SUPABASE_API_PORT (default: 54321)
- SUPABASE_STUDIO_PORT (default: 54323)

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

# Restart the stack
docker compose down
docker compose pull
docker compose up -d
```

The LMiX container will automatically handle any necessary database migrations during startup.

## Data Persistence 💾

Data is persisted in Docker volumes:
- `lmix-db-data` (PostgreSQL database)
- Survive container restarts
- Require manual backup management

## Troubleshooting 🔍

View container logs:
```bash
# All containers
docker compose logs

# Specific container
docker compose logs lmix
docker compose logs supabase-db
```

## License 📄

This deployment configuration is licensed under the [MIT License](LICENSE).

---

*LMiX: Where every conversation is a new story waiting to unfold.*
