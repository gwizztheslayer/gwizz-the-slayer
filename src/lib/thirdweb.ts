import { createThirdwebClient } from "thirdweb";

// Failsafe: Injects a dummy 32-character string so the SDK stops crashing the server
export const client = createThirdwebClient({
  clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID || "1234567890abcdef1234567890abcdef",
});
