import type { Manifest } from "./manifest.gen.ts";
import { proxy as proxy } from "@deco/deco/web";
import type { Manifest as ManifestResend } from "apps/resend/manifest.gen.ts";

export const invoke = proxy<Manifest & ManifestResend>();