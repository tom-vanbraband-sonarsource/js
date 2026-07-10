// Bug 1: Self-assignment (Sonar rule: no-self-assign / S1656)
// Assigning a variable to itself is always a bug.
function updateConfig(config) {
    config.timeout = config.timeout; // self-assignment, does nothing
    return config;
}

// Bug 2: Unreachable code after return (Sonar rule: S1763)
function computeTotal(a, b) {
    return a + b;
    console.log("Total computed"); // dead code, never executed
}

// Bug 3: Empty catch block swallows exceptions (Sonar rule: S108 / no-empty)
function parseJson(str) {
    try {
        return JSON.parse(str);
    } catch (e) {
        // exception silently swallowed
    }
}

// Bug 4: Use of eval() is a security vulnerability (Sonar rule: S1523 / no-eval)
function runUserInput(input) {
    return eval(input); // dangerous: arbitrary code execution
}

// Bug 5: Hardcoded password (Sonar rule: S2068)
function connectToDatabase() {
    const password = "Sup3rS3cr3tP@ssw0rd!"; // hardcoded credential
    return { host: "db.example.com", password };
}
