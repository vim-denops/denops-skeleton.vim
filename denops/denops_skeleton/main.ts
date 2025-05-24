import type { Entrypoint } from "jsr:@denops/std@7.5.0";

export const main: Entrypoint = (denops) => {
  denops.dispatcher = {
    hello: async () => {
      await denops.cmd("echo 'Hello, Denops!'");
    },
  };
};
