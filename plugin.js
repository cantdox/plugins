// ==UserPlugin==
// @name         JS Eval
// @author       You
// @description  Evaluate JavaScript code inside Vendetta/Unbound
// @version      1.0.0
// ==/UserPlugin==

import { registerCommand } from "@vendetta/commands";

let unregister;

export default {
    onLoad: () => {
        unregister = registerCommand({
            name: "eval",
            description: "Evaluate JavaScript code",
            options: [
                {
                    name: "code",
                    description: "JavaScript code to evaluate",
                    required: true,
                    type: 3, // string
                },
            ],
            execute: async (args) => {
                try {
                    const code = args.join(" ");
                    let result = eval(code);

                    // Handle async code
                    if (result instanceof Promise) {
                        result = await result;
                    }

                    // Convert non-string results
                    if (typeof result !== "string") {
                        result = JSON.stringify(result, null, 2);
                    }

                    return { content: "✅ " + result };
                } catch (err) {
                    return { content: "❌ " + err.message };
                }
            },
        });
    },
    onUnload: () => {
        unregister?.();
    },
};
