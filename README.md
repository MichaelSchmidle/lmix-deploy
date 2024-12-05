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
   ```
   Edit `.env` and configure at least these required variables:
   - `POSTGRES_PASSWORD`: Database password
   - `JWT_SECRET`: Secret for JWT token generation
   - `ANON_KEY`: Public API key for client access
   - `SERVICE_ROLE_KEY`: Admin API key for service access

3. Start the stack:
   ```bash
   docker compose --env-file .env -f supabase/docker/docker-compose.yml -f docker-compose.yml up -d

   ```

4. Create your user:
   Open [Supabase Studio](http://localhost:7883/project/default/auth/users) and create your user via the corresponding action in the "Add user" dropdown. Make sure to check "Auto Confirm User."

5. Access LMiX:
   Open the [LMiX web interface](http://localhost:5649), sign in with your newly created user, and follow the instructions to get started.

## Configuration ⚙️

### Network Configuration

By default, the services use the following ports:
- `5649`: LMiX Web Interface
- `5664` and `56647`: Supabase API
- `7678`: PostgreSQL Database
- `7883`: Supabase Studio

You can change these ports in your `.env` file if they conflict with other services.

### Environment Variables

The configuration is split into required and optional variables:

#### Required Configuration
These must be set in your `.env` file:
- `POSTGRES_PASSWORD`: Database password
- `JWT_SECRET`: Secret for JWT token generation
- `ANON_KEY`: Public API key for client access
- `SERVICE_ROLE_KEY`: Admin API key for service access

#### Optional Configuration
The `default.env` file contains sensible defaults for all other settings. Override them in your `.env` file only if needed.

## Services 🛜

The deployment includes these core services:
- **LMiX**: The main application
- **Supabase**: The database, authentication, storage, and more

## Updates 🔁

To update your deployment:

1. Pull the latest changes:
   ```bash
   git pull
   ```

2. Update the stack:
   ```bash
   docker compose pull
   docker compose up -d
   ```

## Troubleshooting 🔍

### Common Issues

1. **Port Conflicts**:
   If you see errors about ports being in use, adjust the port numbers in your `.env` file.

2. **Database Connection Issues**:
   - Ensure PostgreSQL is healthy: `docker compose ps db`
   - Check logs: `docker compose logs db`

3. **Authentication Problems**:
   - Verify your JWT configuration in `.env`
   - Check auth service logs: `docker compose logs auth`

### Logs

View service logs:
```bash
# All services
docker compose logs

# Specific service
docker compose logs [service]

# Follow logs
docker compose logs -f [service]
```

## Support 🛟

For issues and feature requests, please use the [GitHub issue tracker](https://github.com/MichaelSchmidle/lmix/issues).

## License 📜

This deployment configuration is licensed under the [MIT License](LICENSE).

---

*LMiX: Where every conversation is a new story waiting to unfold.*
