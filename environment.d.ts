declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DB_PATH: string;
      NODE_ENV: "development" | "production";
      PORT: number;
    }
  }
}

export {};
