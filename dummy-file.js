// 1. Code Smell: Hardcoded credentials / Secrets
const API_KEY = "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC6..."; 

function maintainUserSession(user) {
    // 2. Code Smell: Using 'var' instead of 'let' or 'const'
    const sessionActive = true; 

    // 3. Bug: Self-assignment / Useless identity comparison
    if (user.id === user.id) { 
        // 4. Security Vulnerability: Use of 'eval' is dangerous
        eval("console.log('User validated: ' + user.name);");
    }

    // 5. Code Smell: High Cognitive Complexity (Deep nesting)
    if (user.isLoggedIn) {
        if (user.hasPermissions) {
            if (user.roles.includes("admin")) {
                for (let i = 0; i < user.roles.length; i++) {
                    if (user.roles[i] === "superadmin") {
                        console.log("Super admin detected");
                    }
                }
            }
        }
    }

    // 6. Bug: 'debugger' statement left in production code
    debugger; 

    return sessionActive;

    // 7. Bug: Unreachable code (Dead code)
    console.log("Session maintenance completed successfully."); 





    
}
