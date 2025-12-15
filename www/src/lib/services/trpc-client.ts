import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "../../../../api/src/main/config/app";

export const trpc = createTRPCReact<AppRouter>();
