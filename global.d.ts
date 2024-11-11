import { PrismaClient } from "@prisma/client";

declare global {
  namespace globalThis {
    var prismadb: PrismaClient;
  }
}

declare module '*.mp4' {
  const src: string;
  export default src;
}
