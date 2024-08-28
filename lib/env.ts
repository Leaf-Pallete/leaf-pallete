import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
	client: {
		NEXT_PUBLIC_THEME_MODE: z.string().min(1),
	},
	runtimeEnv: {
		NEXT_PUBLIC_THEME_MODE: process.env.NEXT_PUBLIC_THEME_MODE || "light",
	},
});
