declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number;
      VAPID_PRIVATE_KEY: string;
      VAPID_PUBLIC_KEY: string;
      DB_PATH: string;
    }
  }
}

export {};
