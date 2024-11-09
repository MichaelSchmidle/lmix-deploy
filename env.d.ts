// Deployment repository env.d.ts
interface ImportMetaEnv {
  // Required Supabase Configuration
  readonly SUPABASE_POSTGRES_PASSWORD: string
  readonly SUPABASE_JWT_SECRET: string
  readonly SUPABASE_ANON_KEY: string
  readonly SUPABASE_SERVICE_ROLE_KEY: string

  // Optional Port Configuration
  readonly LMIX_PORT?: string
  readonly SUPABASE_API_PORT?: string
  readonly SUPABASE_STUDIO_PORT?: string

  // Auto-configured LMiX Configuration
  readonly NUXT_PUBLIC_SUPABASE_URL: string
  readonly NUXT_PUBLIC_SUPABASE_KEY: string

  // Database Configuration
  readonly SUPABASE_DB_HOST?: string
  readonly SUPABASE_DB_PORT?: string
  readonly SUPABASE_DB_NAME?: string
  readonly SUPABASE_DB_USER?: string
  readonly SUPABASE_DB_PASSWORD: string

  // Development Configuration
  readonly NODE_ENV?: 'development' | 'production' | 'test'
}

interface ImportMeta {
  readonly env: ImportMetaEnv
} 