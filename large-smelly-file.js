// Large file with intentional Sonar code smell issues

var globalCounter = 0;
var globalFlag = true;
var globalMessage = "hello";
var globalData = [];
var globalStatus = 0;
var globalResult = null;
var globalTemp = "";
var globalIndex = 0;
var globalValue = 42;
var MAGIC = 3.14159;
var ANOTHER_MAGIC = 99999;
var YET_ANOTHER = 12345;

// ---- Duplicated blocks ----

function processUserDataFirst(user) {
  var result = "";
  if (user != null) {
    if (user.name != null) {
      if (user.name.length > 0) {
        result = result + "Name: " + user.name;
        if (user.age != null) {
          if (user.age > 0) {
            if (user.age < 150) {
              result = result + " Age: " + user.age;
              if (user.email != null) {
                if (user.email.length > 0) {
                  result = result + " Email: " + user.email;
                  if (user.address != null) {
                    if (user.address.city != null) {
                      result = result + " City: " + user.address.city;
                      if (user.address.zip != null) {
                        result = result + " Zip: " + user.address.zip;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return result;
}

function processUserDataSecond(user) {
  var result = "";
  if (user != null) {
    if (user.name != null) {
      if (user.name.length > 0) {
        result = result + "Name: " + user.name;
        if (user.age != null) {
          if (user.age > 0) {
            if (user.age < 150) {
              result = result + " Age: " + user.age;
              if (user.email != null) {
                if (user.email.length > 0) {
                  result = result + " Email: " + user.email;
                  if (user.address != null) {
                    if (user.address.city != null) {
                      result = result + " City: " + user.address.city;
                      if (user.address.zip != null) {
                        result = result + " Zip: " + user.address.zip;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return result;
}

function processUserDataThird(user) {
  var result = "";
  if (user != null) {
    if (user.name != null) {
      if (user.name.length > 0) {
        result = result + "Name: " + user.name;
        if (user.age != null) {
          if (user.age > 0) {
            if (user.age < 150) {
              result = result + " Age: " + user.age;
              if (user.email != null) {
                if (user.email.length > 0) {
                  result = result + " Email: " + user.email;
                  if (user.address != null) {
                    if (user.address.city != null) {
                      result = result + " City: " + user.address.city;
                      if (user.address.zip != null) {
                        result = result + " Zip: " + user.address.zip;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return result;
}

// ---- Cognitive complexity: god function ----

function doEverything(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
  var x = 0;
  var y = 0;
  var z = 0;
  var w = 0;
  var v = 0;

  if (a > 0) {
    x = a * 2;
    if (b > 0) {
      y = b * 3;
      if (c > 0) {
        z = c * 4;
        if (d > 0) {
          w = d * 5;
          if (e > 0) {
            v = e * 6;
            if (f > 0) {
              x = x + f;
              if (g > 0) {
                y = y + g;
                if (h > 0) {
                  z = z + h;
                  if (i > 0) {
                    w = w + i;
                    if (j > 0) {
                      v = v + j;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  for (var q = 0; q < 100; q++) {
    if (q % 2 == 0) {
      x = x + q;
    } else if (q % 3 == 0) {
      y = y + q;
    } else if (q % 5 == 0) {
      z = z + q;
    } else if (q % 7 == 0) {
      w = w + q;
    } else {
      v = v + q;
    }
    for (var r = 0; r < 10; r++) {
      if (r % 2 == 0) {
        x = x - r;
      } else {
        y = y - r;
      }
    }
  }

  switch (k) {
    case 1:
      x = x * 10;
      break;
    case 2:
      y = y * 10;
      break;
    case 3:
      z = z * 10;
      break;
    case 4:
      w = w * 10;
      break;
    case 5:
      v = v * 10;
      break;
    case 6:
      x = x + y + z;
      break;
    case 7:
      w = w + v + x;
      break;
    case 8:
      y = y - z + w;
      break;
    case 9:
      z = z * v - y;
      break;
    case 10:
      v = v / (x + 1);
      break;
    default:
      x = 0; y = 0; z = 0; w = 0; v = 0;
  }

  if (l != null && l != undefined && l != "" && l != 0 && l != false) {
    if (typeof l === "string") {
      x = x + l.length;
    } else if (typeof l === "number") {
      y = y + l;
    } else if (typeof l === "boolean") {
      z = z + (l ? 1 : 0);
    } else if (Array.isArray(l)) {
      w = w + l.length;
    } else if (typeof l === "object") {
      v = v + Object.keys(l).length;
    }
  }

  if (m > 0 && n > 0) {
    if (m > n) {
      x = m - n;
    } else if (n > m) {
      y = n - m;
    } else {
      z = m + n;
    }
  } else if (m > 0 && n <= 0) {
    w = m * 2;
  } else if (m <= 0 && n > 0) {
    v = n * 2;
  } else {
    x = 99999;
  }

  try {
    if (o != null) {
      x = x / o;
    }
    if (p != null) {
      y = y / p;
    }
  } catch (err) {
    x = -1;
    y = -1;
  }

  return x + y + z + w + v;
}

// ---- Long method with magic numbers ----

function calculateEverything(input) {
  var step1 = input * 3.14159;
  var step2 = step1 + 99999;
  var step3 = step2 / 12345;
  var step4 = step3 - 42;
  var step5 = step4 * 7;
  var step6 = step5 + 100;
  var step7 = step6 / 3;
  var step8 = step7 - 17;
  var step9 = step8 * 2.71828;
  var step10 = step9 + 1000;
  var step11 = step10 / 99;
  var step12 = step11 - 55;
  var step13 = step12 * 13;
  var step14 = step13 + 777;
  var step15 = step14 / 11;
  var step16 = step15 - 33;
  var step17 = step16 * 4;
  var step18 = step17 + 256;
  var step19 = step18 / 8;
  var step20 = step19 - 64;
  var step21 = step20 * 6;
  var step22 = step21 + 512;
  var step23 = step22 / 16;
  var step24 = step23 - 128;
  var step25 = step24 * 9;
  var step26 = step25 + 1024;
  var step27 = step26 / 32;
  var step28 = step27 - 48;
  var step29 = step28 * 5;
  var step30 = step29 + 2048;
  var step31 = step30 / 64;
  var step32 = step31 - 96;
  var step33 = step32 * 15;
  var step34 = step33 + 4096;
  var step35 = step34 / 128;
  var step36 = step35 - 192;
  var step37 = step36 * 11;
  var step38 = step37 + 8192;
  var step39 = step38 / 256;
  var step40 = step39 - 384;
  var step41 = step40 * 22;
  var step42 = step41 + 16384;
  var step43 = step42 / 512;
  var step44 = step43 - 768;
  var step45 = step44 * 33;
  var step46 = step45 + 32768;
  var step47 = step46 / 1024;
  var step48 = step47 - 1536;
  var step49 = step48 * 44;
  var step50 = step49 + 65536;
  return step50;
}

// ---- Dead code ----

function neverCalledA() {
  return "I am never called A";
}

function neverCalledB() {
  return "I am never called B";
}

function neverCalledC() {
  return "I am never called C";
}

function neverCalledD() {
  return "I am never called D";
}

function neverCalledE() {
  return "I am never called E";
}

// ---- Variables declared but never used ----

function functionWithUnusedVars(x) {
  var unused1 = 10;
  var unused2 = 20;
  var unused3 = "hello";
  var unused4 = [];
  var unused5 = {};
  var unused6 = true;
  var unused7 = null;
  var unused8 = undefined;
  var unused9 = function() {};
  var unused10 = /regex/;
  return x * 2;
}

// ---- Unnecessary string concatenation in loops ----

function buildStringBadly(items) {
  var result = "";
  for (var i = 0; i < items.length; i++) {
    result = result + items[i];
    result = result + ", ";
    result = result + "\n";
  }
  return result;
}

function buildStringBadlyAgain(items) {
  var result = "";
  for (var i = 0; i < items.length; i++) {
    result = result + items[i];
    result = result + ", ";
    result = result + "\n";
  }
  return result;
}

function buildStringBadlyOnceMore(items) {
  var result = "";
  for (var i = 0; i < items.length; i++) {
    result = result + items[i];
    result = result + ", ";
    result = result + "\n";
  }
  return result;
}

// ---- Empty catch blocks ----

function riskyOperation1(data) {
  try {
    return JSON.parse(data);
  } catch (e) {
  }
}

function riskyOperation2(data) {
  try {
    return JSON.parse(data);
  } catch (e) {
  }
}

function riskyOperation3(data) {
  try {
    return JSON.parse(data);
  } catch (e) {
  }
}

// ---- Functions with too many parameters ----

function tooManyParams1(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r) {
  return a + b + c + d + e + f + g + h + i + j + k + l + m + n + o + p + q + r;
}

function tooManyParams2(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r) {
  return a * b + c * d + e * f + g * h + i * j + k * l + m * n + o * p + q * r;
}

function tooManyParams3(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r) {
  var result = 0;
  if (a > b) result += c;
  if (d > e) result += f;
  if (g > h) result += i;
  if (j > k) result += l;
  if (m > n) result += o;
  if (p > q) result += r;
  return result;
}

// ---- Switch with no default and fall-through ----

function badSwitch(val) {
  var result = 0;
  switch (val) {
    case 1:
      result = 10;
    case 2:
      result = 20;
    case 3:
      result = 30;
    case 4:
      result = 40;
    case 5:
      result = 50;
    case 6:
      result = 60;
    case 7:
      result = 70;
    case 8:
      result = 80;
    case 9:
      result = 90;
    case 10:
      result = 100;
  }
  return result;
}

// ---- Boolean expression complexity ----

function hasAccess(user, resource, action, context, env, time, location) {
  if (
    (user != null && user.role == "admin" && user.active == true && user.verified == true) ||
    (user != null && user.role == "superuser" && user.active == true) ||
    (user != null && user.role == "manager" && resource != null && resource.type == "report" && action == "read") ||
    (user != null && user.role == "editor" && resource != null && resource.type == "article" && (action == "read" || action == "write")) ||
    (user != null && user.role == "viewer" && resource != null && resource.type == "article" && action == "read" && context != null && context.public == true)
  ) {
    if (env != null && env.name == "production") {
      if (time != null && time.hour >= 6 && time.hour <= 22) {
        if (location != null && location.country == "US") {
          return true;
        } else if (location != null && location.country == "CA") {
          return true;
        } else if (location != null && location.country == "GB") {
          return user.role == "admin" || user.role == "superuser";
        } else {
          return false;
        }
      } else {
        return user.role == "admin";
      }
    } else {
      return true;
    }
  }
  return false;
}

// ---- Duplicated logic blocks (copy-paste) ----

function validateOrderA(order) {
  var errors = [];
  if (order == null) { errors.push("Order is null"); return errors; }
  if (order.id == null || order.id == "") { errors.push("Order ID missing"); }
  if (order.customerId == null || order.customerId == "") { errors.push("Customer ID missing"); }
  if (order.items == null || order.items.length == 0) { errors.push("No items in order"); }
  if (order.total == null || order.total <= 0) { errors.push("Invalid total"); }
  if (order.currency == null || order.currency == "") { errors.push("Currency missing"); }
  if (order.shippingAddress == null) { errors.push("Shipping address missing"); }
  if (order.billingAddress == null) { errors.push("Billing address missing"); }
  if (order.status == null || order.status == "") { errors.push("Status missing"); }
  if (order.createdAt == null) { errors.push("Created date missing"); }
  return errors;
}

function validateOrderB(order) {
  var errors = [];
  if (order == null) { errors.push("Order is null"); return errors; }
  if (order.id == null || order.id == "") { errors.push("Order ID missing"); }
  if (order.customerId == null || order.customerId == "") { errors.push("Customer ID missing"); }
  if (order.items == null || order.items.length == 0) { errors.push("No items in order"); }
  if (order.total == null || order.total <= 0) { errors.push("Invalid total"); }
  if (order.currency == null || order.currency == "") { errors.push("Currency missing"); }
  if (order.shippingAddress == null) { errors.push("Shipping address missing"); }
  if (order.billingAddress == null) { errors.push("Billing address missing"); }
  if (order.status == null || order.status == "") { errors.push("Status missing"); }
  if (order.createdAt == null) { errors.push("Created date missing"); }
  return errors;
}

function validateOrderC(order) {
  var errors = [];
  if (order == null) { errors.push("Order is null"); return errors; }
  if (order.id == null || order.id == "") { errors.push("Order ID missing"); }
  if (order.customerId == null || order.customerId == "") { errors.push("Customer ID missing"); }
  if (order.items == null || order.items.length == 0) { errors.push("No items in order"); }
  if (order.total == null || order.total <= 0) { errors.push("Invalid total"); }
  if (order.currency == null || order.currency == "") { errors.push("Currency missing"); }
  if (order.shippingAddress == null) { errors.push("Shipping address missing"); }
  if (order.billingAddress == null) { errors.push("Billing address missing"); }
  if (order.status == null || order.status == "") { errors.push("Status missing"); }
  if (order.createdAt == null) { errors.push("Created date missing"); }
  return errors;
}

// ---- Redundant comparisons and boolean literals ----

function checkFlags(a, b, c, d, e) {
  if (a == true) {
    if (b == false) {
      if (c == true) {
        if (d == false) {
          if (e == true) {
            return true;
          } else {
            return false;
          }
        } else {
          return false;
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}

// ---- Useless assignments ----

function uselessAssignments(x) {
  var a = 0;
  a = 1;
  a = 2;
  a = 3;
  a = x;

  var b = "";
  b = "hello";
  b = "world";
  b = "foo";
  b = String(x);

  var c = null;
  c = [];
  c = {};
  c = [1, 2, 3];
  c = { key: x };

  return a + b.length + Object.keys(c).length;
}

// ---- Long chains of else-if ----

function classifyNumber(n) {
  if (n == 1) {
    return "one";
  } else if (n == 2) {
    return "two";
  } else if (n == 3) {
    return "three";
  } else if (n == 4) {
    return "four";
  } else if (n == 5) {
    return "five";
  } else if (n == 6) {
    return "six";
  } else if (n == 7) {
    return "seven";
  } else if (n == 8) {
    return "eight";
  } else if (n == 9) {
    return "nine";
  } else if (n == 10) {
    return "ten";
  } else if (n == 11) {
    return "eleven";
  } else if (n == 12) {
    return "twelve";
  } else if (n == 13) {
    return "thirteen";
  } else if (n == 14) {
    return "fourteen";
  } else if (n == 15) {
    return "fifteen";
  } else if (n == 16) {
    return "sixteen";
  } else if (n == 17) {
    return "seventeen";
  } else if (n == 18) {
    return "eighteen";
  } else if (n == 19) {
    return "nineteen";
  } else if (n == 20) {
    return "twenty";
  } else if (n == 21) {
    return "twenty-one";
  } else if (n == 22) {
    return "twenty-two";
  } else if (n == 23) {
    return "twenty-three";
  } else if (n == 24) {
    return "twenty-four";
  } else if (n == 25) {
    return "twenty-five";
  } else if (n == 26) {
    return "twenty-six";
  } else if (n == 27) {
    return "twenty-seven";
  } else if (n == 28) {
    return "twenty-eight";
  } else if (n == 29) {
    return "twenty-nine";
  } else if (n == 30) {
    return "thirty";
  } else {
    return "unknown";
  }
}

// ---- Identical function implementations ----

function formatNameA(first, last) {
  var result = "";
  if (first != null && first.length > 0) {
    result = first;
  }
  if (last != null && last.length > 0) {
    if (result.length > 0) {
      result = result + " ";
    }
    result = result + last;
  }
  return result.trim();
}

function formatNameB(first, last) {
  var result = "";
  if (first != null && first.length > 0) {
    result = first;
  }
  if (last != null && last.length > 0) {
    if (result.length > 0) {
      result = result + " ";
    }
    result = result + last;
  }
  return result.trim();
}

function formatNameC(first, last) {
  var result = "";
  if (first != null && first.length > 0) {
    result = first;
  }
  if (last != null && last.length > 0) {
    if (result.length > 0) {
      result = result + " ";
    }
    result = result + last;
  }
  return result.trim();
}

// ---- String comparisons instead of ===  ----

function loosyComparisons(val) {
  if (val == "0") return "zero-string";
  if (val == 0) return "zero-number";
  if (val == "") return "empty-string";
  if (val == null) return "null";
  if (val == undefined) return "undefined";
  if (val == false) return "false";
  if (val == true) return "true";
  if (val == []) return "empty-array";
  if (val == {}) return "empty-object";
  return "something-else";
}

// ---- Unreachable code ----

function withUnreachableCode(x) {
  if (x > 0) {
    return x * 2;
    var unreachable1 = x * 3;
    var unreachable2 = x * 4;
    console.log("This never runs");
  } else {
    return x * -1;
    var unreachable3 = x * -2;
    console.log("This never runs either");
  }
}

// ---- Nested ternaries ----

function nestedTernaries(a, b, c, d, e) {
  return a > 0
    ? b > 0
      ? c > 0
        ? d > 0
          ? e > 0
            ? "all positive"
            : "e not positive"
          : "d not positive"
        : "c not positive"
      : "b not positive"
    : "a not positive";
}

// ---- More duplicated validation logic ----

function validateUserInput1(input) {
  if (input == null) return false;
  if (typeof input !== "string") return false;
  if (input.length === 0) return false;
  if (input.length > 255) return false;
  if (input.trim().length === 0) return false;
  if (/[<>]/.test(input)) return false;
  return true;
}

function validateUserInput2(input) {
  if (input == null) return false;
  if (typeof input !== "string") return false;
  if (input.length === 0) return false;
  if (input.length > 255) return false;
  if (input.trim().length === 0) return false;
  if (/[<>]/.test(input)) return false;
  return true;
}

function validateUserInput3(input) {
  if (input == null) return false;
  if (typeof input !== "string") return false;
  if (input.length === 0) return false;
  if (input.length > 255) return false;
  if (input.trim().length === 0) return false;
  if (/[<>]/.test(input)) return false;
  return true;
}

function validateUserInput4(input) {
  if (input == null) return false;
  if (typeof input !== "string") return false;
  if (input.length === 0) return false;
  if (input.length > 255) return false;
  if (input.trim().length === 0) return false;
  if (/[<>]/.test(input)) return false;
  return true;
}

// ---- Poor naming ----

function f1(x) { return x + 1; }
function f2(x) { return x + 2; }
function f3(x) { return x + 3; }
function f4(x) { return x * 2; }
function f5(x) { return x * 3; }
function f6(x) { return x / 2; }
function f7(x) { return x / 3; }
function f8(x) { return x - 1; }
function f9(x) { return x - 2; }
function f10(x) { return x * x; }

function proc(a, b, c, d, e) {
  var r = 0;
  var s = 0;
  var t = 0;
  for (var ii = 0; ii < a; ii++) {
    for (var jj = 0; jj < b; jj++) {
      for (var kk = 0; kk < c; kk++) {
        r = r + ii;
        s = s + jj;
        t = t + kk;
      }
    }
  }
  if (d > 0) { r = r * d; }
  if (e > 0) { s = s * e; }
  return r + s + t;
}

// ---- Modify and return the same collection inside a loop ----

function mutateWhileIterating(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr.splice(i, 1);
    }
  }
  return arr;
}

// ---- Using == instead of === throughout ----

function looseEqualityEverywhere(a, b) {
  if (a == b) return 1;
  if (a == null) return 2;
  if (b == null) return 3;
  if (a == 0) return 4;
  if (b == 0) return 5;
  if (a == "") return 6;
  if (b == "") return 7;
  if (a == false) return 8;
  if (b == false) return 9;
  if (a == true) return 10;
  return -1;
}

// ---- console.log left in production code ----

function doSomeWork(data) {
  console.log("doSomeWork called with", data);
  var result = data * 2;
  console.log("result is", result);
  if (result > 100) {
    console.log("result exceeded threshold");
    result = 100;
    console.log("capped result to", result);
  }
  console.log("returning", result);
  return result;
}

function doMoreWork(data) {
  console.log("doMoreWork called with", data);
  var result = data * 3;
  console.log("result is", result);
  if (result > 200) {
    console.log("result exceeded threshold");
    result = 200;
    console.log("capped result to", result);
  }
  console.log("returning", result);
  return result;
}

// ---- Function that does too many things ----

function initializeApplication(config) {
  // parse config
  var host = config.host || "localhost";
  var port = config.port || 3000;
  var dbHost = config.dbHost || "localhost";
  var dbPort = config.dbPort || 5432;
  var dbName = config.dbName || "mydb";
  var dbUser = config.dbUser || "admin";
  var dbPassword = config.dbPassword || "password";
  var cacheHost = config.cacheHost || "localhost";
  var cachePort = config.cachePort || 6379;
  var logLevel = config.logLevel || "info";
  var maxConnections = config.maxConnections || 10;
  var timeout = config.timeout || 30000;
  var retries = config.retries || 3;

  // validate config
  if (port < 1 || port > 65535) { throw new Error("Invalid port"); }
  if (dbPort < 1 || dbPort > 65535) { throw new Error("Invalid DB port"); }
  if (cachePort < 1 || cachePort > 65535) { throw new Error("Invalid cache port"); }
  if (maxConnections < 1 || maxConnections > 1000) { throw new Error("Invalid max connections"); }
  if (timeout < 1000 || timeout > 300000) { throw new Error("Invalid timeout"); }
  if (retries < 0 || retries > 10) { throw new Error("Invalid retries"); }

  // set up logger
  var logger = {
    level: logLevel,
    log: function(msg) { console.log("[" + logLevel + "] " + msg); },
    error: function(msg) { console.error("[ERROR] " + msg); },
    warn: function(msg) { console.warn("[WARN] " + msg); }
  };

  // connect to DB (simulated)
  var db = {
    host: dbHost,
    port: dbPort,
    name: dbName,
    user: dbUser,
    password: dbPassword,
    connected: false,
    query: function(sql) { console.log("QUERY: " + sql); return []; }
  };
  db.connected = true;
  logger.log("DB connected to " + dbHost + ":" + dbPort);

  // connect to cache (simulated)
  var cache = {
    host: cacheHost,
    port: cachePort,
    connected: false,
    get: function(key) { return null; },
    set: function(key, val) { return true; }
  };
  cache.connected = true;
  logger.log("Cache connected to " + cacheHost + ":" + cachePort);

  // start server (simulated)
  var server = {
    host: host,
    port: port,
    running: false,
    db: db,
    cache: cache,
    logger: logger
  };
  server.running = true;
  logger.log("Server started on " + host + ":" + port);

  return server;
}

// ---- Commented-out code blocks ----

function legacyProcessor(data) {
  // var oldResult = data.map(function(x) { return x * 2; });
  // var filtered = oldResult.filter(function(x) { return x > 10; });
  // if (filtered.length > 0) {
  //   return filtered.reduce(function(a, b) { return a + b; }, 0);
  // }
  // return 0;

  // New implementation
  var result = 0;
  for (var i = 0; i < data.length; i++) {
    var val = data[i] * 2;
    if (val > 10) {
      result = result + val;
    }
  }
  return result;

  // TODO: remove the above and switch back to functional style
  // var x = data.reduce(function(acc, cur) { return acc + (cur * 2 > 10 ? cur * 2 : 0); }, 0);
  // return x;
}

// ---- Always true/false conditions ----

function alwaysTrueConditions(x) {
  var arr = [1, 2, 3];
  if (arr.length >= 0) {
    console.log("array length is non-negative");
  }
  var s = "hello";
  if (s.length >= 0) {
    console.log("string length is non-negative");
  }
  if (typeof x == "string" || typeof x != "string") {
    console.log("this is always true");
  }
  return x;
}

// ---- Exports ----

module.exports = {
  processUserDataFirst,
  processUserDataSecond,
  processUserDataThird,
  doEverything,
  calculateEverything,
  functionWithUnusedVars,
  buildStringBadly,
  riskyOperation1,
  tooManyParams1,
  badSwitch,
  hasAccess,
  validateOrderA,
  checkFlags,
  uselessAssignments,
  classifyNumber,
  formatNameA,
  loosyComparisons,
  withUnreachableCode,
  nestedTernaries,
  validateUserInput1,
  f1, f2, f3, f4, f5, f6, f7, f8, f9, f10,
  proc,
  mutateWhileIterating,
  looseEqualityEverywhere,
  doSomeWork,
  doMoreWork,
  initializeApplication,
  legacyProcessor,
  alwaysTrueConditions,
  processOrderBatch1,
  processOrderBatch2,
  processOrderBatch3,
  calculateGlobalShippingTaxAndDiscountMatrix,
  reportGeneratorA,
  reportGeneratorB,
  reportGeneratorC,
  computeStatisticsA,
  computeStatisticsB,
  computeStatisticsC,
  renderWidgetA,
  renderWidgetB,
  renderWidgetC,
  handleEventA,
  handleEventB,
  handleEventC,
  transformDataA,
  transformDataB,
  transformDataC,
  syncRecordsA,
  syncRecordsB,
  syncRecordsC,
  auditLogA,
  auditLogB,
  auditLogC
};

// ---- More duplicated order batch processing ----

function processOrderBatch1(orders) {
  var results = [];
  for (var i = 0; i < orders.length; i++) {
    var order = orders[i];
    var processed = {};
    processed.id = order.id;
    processed.status = "processing";
    if (order.total > 1000) {
      processed.priority = "high";
    } else if (order.total > 500) {
      processed.priority = "medium";
    } else {
      processed.priority = "low";
    }
    if (order.customerId == null || order.customerId == "") {
      processed.error = "Missing customer ID";
      processed.status = "failed";
    }
    if (order.items == null || order.items.length == 0) {
      processed.error = "No items";
      processed.status = "failed";
    }
    if (order.shippingAddress == null) {
      processed.error = "Missing shipping address";
      processed.status = "failed";
    }
    if (processed.status != "failed") {
      processed.status = "completed";
      processed.completedAt = new Date().toISOString();
    }
    console.log("Processed order " + order.id + " with status " + processed.status);
    results.push(processed);
  }
  return results;
}

function processOrderBatch2(orders) {
  var results = [];
  for (var i = 0; i < orders.length; i++) {
    var order = orders[i];
    var processed = {};
    processed.id = order.id;
    processed.status = "processing";
    if (order.total > 1000) {
      processed.priority = "high";
    } else if (order.total > 500) {
      processed.priority = "medium";
    } else {
      processed.priority = "low";
    }
    if (order.customerId == null || order.customerId == "") {
      processed.error = "Missing customer ID";
      processed.status = "failed";
    }
    if (order.items == null || order.items.length == 0) {
      processed.error = "No items";
      processed.status = "failed";
    }
    if (order.shippingAddress == null) {
      processed.error = "Missing shipping address";
      processed.status = "failed";
    }
    if (processed.status != "failed") {
      processed.status = "completed";
      processed.completedAt = new Date().toISOString();
    }
    console.log("Processed order " + order.id + " with status " + processed.status);
    results.push(processed);
  }
  return results;
}

function processOrderBatch3(orders) {
  var results = [];
  for (var i = 0; i < orders.length; i++) {
    var order = orders[i];
    var processed = {};
    processed.id = order.id;
    processed.status = "processing";
    if (order.total > 1000) {
      processed.priority = "high";
    } else if (order.total > 500) {
      processed.priority = "medium";
    } else {
      processed.priority = "low";
    }
    if (order.customerId == null || order.customerId == "") {
      processed.error = "Missing customer ID";
      processed.status = "failed";
    }
    if (order.items == null || order.items.length == 0) {
      processed.error = "No items";
      processed.status = "failed";
    }
    if (order.shippingAddress == null) {
      processed.error = "Missing shipping address";
      processed.status = "failed";
    }
    if (processed.status != "failed") {
      processed.status = "completed";
      processed.completedAt = new Date().toISOString();
    }
    console.log("Processed order " + order.id + " with status " + processed.status);
    results.push(processed);
  }
  return results;
}

// ---- Duplicated report generators ----

function reportGeneratorA(data, title, subtitle, author, date, format, includeCharts, includeTables, includeRawData, footer) {
  var report = "";
  report = report + "=== " + title + " ===\n";
  report = report + subtitle + "\n";
  report = report + "Author: " + author + "\n";
  report = report + "Date: " + date + "\n";
  report = report + "Format: " + format + "\n";
  report = report + "\n";
  if (data == null || data.length == 0) {
    report = report + "No data available.\n";
    return report;
  }
  for (var i = 0; i < data.length; i++) {
    var row = data[i];
    if (row == null) continue;
    report = report + "Row " + (i + 1) + ": ";
    if (row.label != null) report = report + row.label + " | ";
    if (row.value != null) report = report + row.value + " | ";
    if (row.category != null) report = report + row.category + " | ";
    if (row.subcategory != null) report = report + row.subcategory + " | ";
    if (row.region != null) report = report + row.region;
    report = report + "\n";
  }
  if (includeTables == true) {
    report = report + "\n--- TABLE ---\n";
    for (var j = 0; j < data.length; j++) {
      report = report + JSON.stringify(data[j]) + "\n";
    }
  }
  if (includeCharts == true) {
    report = report + "\n--- CHARTS ---\n";
    report = report + "[chart data would go here]\n";
  }
  if (includeRawData == true) {
    report = report + "\n--- RAW DATA ---\n";
    report = report + JSON.stringify(data) + "\n";
  }
  report = report + "\n" + footer + "\n";
  console.log("Report generated: " + title);
  return report;
}

function reportGeneratorB(data, title, subtitle, author, date, format, includeCharts, includeTables, includeRawData, footer) {
  var report = "";
  report = report + "=== " + title + " ===\n";
  report = report + subtitle + "\n";
  report = report + "Author: " + author + "\n";
  report = report + "Date: " + date + "\n";
  report = report + "Format: " + format + "\n";
  report = report + "\n";
  if (data == null || data.length == 0) {
    report = report + "No data available.\n";
    return report;
  }
  for (var i = 0; i < data.length; i++) {
    var row = data[i];
    if (row == null) continue;
    report = report + "Row " + (i + 1) + ": ";
    if (row.label != null) report = report + row.label + " | ";
    if (row.value != null) report = report + row.value + " | ";
    if (row.category != null) report = report + row.category + " | ";
    if (row.subcategory != null) report = report + row.subcategory + " | ";
    if (row.region != null) report = report + row.region;
    report = report + "\n";
  }
  if (includeTables == true) {
    report = report + "\n--- TABLE ---\n";
    for (var j = 0; j < data.length; j++) {
      report = report + JSON.stringify(data[j]) + "\n";
    }
  }
  if (includeCharts == true) {
    report = report + "\n--- CHARTS ---\n";
    report = report + "[chart data would go here]\n";
  }
  if (includeRawData == true) {
    report = report + "\n--- RAW DATA ---\n";
    report = report + JSON.stringify(data) + "\n";
  }
  report = report + "\n" + footer + "\n";
  console.log("Report generated: " + title);
  return report;
}

function reportGeneratorC(data, title, subtitle, author, date, format, includeCharts, includeTables, includeRawData, footer) {
  var report = "";
  report = report + "=== " + title + " ===\n";
  report = report + subtitle + "\n";
  report = report + "Author: " + author + "\n";
  report = report + "Date: " + date + "\n";
  report = report + "Format: " + format + "\n";
  report = report + "\n";
  if (data == null || data.length == 0) {
    report = report + "No data available.\n";
    return report;
  }
  for (var i = 0; i < data.length; i++) {
    var row = data[i];
    if (row == null) continue;
    report = report + "Row " + (i + 1) + ": ";
    if (row.label != null) report = report + row.label + " | ";
    if (row.value != null) report = report + row.value + " | ";
    if (row.category != null) report = report + row.category + " | ";
    if (row.subcategory != null) report = report + row.subcategory + " | ";
    if (row.region != null) report = report + row.region;
    report = report + "\n";
  }
  if (includeTables == true) {
    report = report + "\n--- TABLE ---\n";
    for (var j = 0; j < data.length; j++) {
      report = report + JSON.stringify(data[j]) + "\n";
    }
  }
  if (includeCharts == true) {
    report = report + "\n--- CHARTS ---\n";
    report = report + "[chart data would go here]\n";
  }
  if (includeRawData == true) {
    report = report + "\n--- RAW DATA ---\n";
    report = report + JSON.stringify(data) + "\n";
  }
  report = report + "\n" + footer + "\n";
  console.log("Report generated: " + title);
  return report;
}

// ---- Duplicated statistics computation ----

function computeStatisticsA(values) {
  if (values == null || values.length == 0) return null;
  var sum = 0;
  var min = values[0];
  var max = values[0];
  for (var i = 0; i < values.length; i++) {
    sum = sum + values[i];
    if (values[i] < min) min = values[i];
    if (values[i] > max) max = values[i];
  }
  var mean = sum / values.length;
  var variance = 0;
  for (var j = 0; j < values.length; j++) {
    variance = variance + (values[j] - mean) * (values[j] - mean);
  }
  variance = variance / values.length;
  var stddev = Math.sqrt(variance);
  var sorted = values.slice().sort(function(a, b) { return a - b; });
  var median;
  if (sorted.length % 2 == 0) {
    median = (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2;
  } else {
    median = sorted[Math.floor(sorted.length / 2)];
  }
  console.log("min=" + min + " max=" + max + " mean=" + mean + " stddev=" + stddev + " median=" + median);
  return { sum: sum, min: min, max: max, mean: mean, variance: variance, stddev: stddev, median: median };
}

function computeStatisticsB(values) {
  if (values == null || values.length == 0) return null;
  var sum = 0;
  var min = values[0];
  var max = values[0];
  for (var i = 0; i < values.length; i++) {
    sum = sum + values[i];
    if (values[i] < min) min = values[i];
    if (values[i] > max) max = values[i];
  }
  var mean = sum / values.length;
  var variance = 0;
  for (var j = 0; j < values.length; j++) {
    variance = variance + (values[j] - mean) * (values[j] - mean);
  }
  variance = variance / values.length;
  var stddev = Math.sqrt(variance);
  var sorted = values.slice().sort(function(a, b) { return a - b; });
  var median;
  if (sorted.length % 2 == 0) {
    median = (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2;
  } else {
    median = sorted[Math.floor(sorted.length / 2)];
  }
  console.log("min=" + min + " max=" + max + " mean=" + mean + " stddev=" + stddev + " median=" + median);
  return { sum: sum, min: min, max: max, mean: mean, variance: variance, stddev: stddev, median: median };
}

function computeStatisticsC(values) {
  if (values == null || values.length == 0) return null;
  var sum = 0;
  var min = values[0];
  var max = values[0];
  for (var i = 0; i < values.length; i++) {
    sum = sum + values[i];
    if (values[i] < min) min = values[i];
    if (values[i] > max) max = values[i];
  }
  var mean = sum / values.length;
  var variance = 0;
  for (var j = 0; j < values.length; j++) {
    variance = variance + (values[j] - mean) * (values[j] - mean);
  }
  variance = variance / values.length;
  var stddev = Math.sqrt(variance);
  var sorted = values.slice().sort(function(a, b) { return a - b; });
  var median;
  if (sorted.length % 2 == 0) {
    median = (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2;
  } else {
    median = sorted[Math.floor(sorted.length / 2)];
  }
  console.log("min=" + min + " max=" + max + " mean=" + mean + " stddev=" + stddev + " median=" + median);
  return { sum: sum, min: min, max: max, mean: mean, variance: variance, stddev: stddev, median: median };
}

// ---- Duplicated widget renderers ----

function renderWidgetA(container, title, data, width, height, theme, showLegend, showTooltip, showGrid, animated) {
  var html = "";
  html = html + "<div class='widget' style='width:" + width + "px;height:" + height + "px'>";
  html = html + "<div class='widget-header'>" + title + "</div>";
  if (theme == "dark") {
    html = html + "<div class='widget-body dark'>";
  } else if (theme == "light") {
    html = html + "<div class='widget-body light'>";
  } else {
    html = html + "<div class='widget-body'>";
  }
  if (data == null || data.length == 0) {
    html = html + "<p>No data</p>";
  } else {
    html = html + "<ul>";
    for (var i = 0; i < data.length; i++) {
      html = html + "<li>" + data[i].label + ": " + data[i].value + "</li>";
    }
    html = html + "</ul>";
    if (showLegend == true) {
      html = html + "<div class='legend'>";
      for (var j = 0; j < data.length; j++) {
        html = html + "<span class='legend-item'>" + data[j].label + "</span>";
      }
      html = html + "</div>";
    }
    if (showGrid == true) {
      html = html + "<div class='grid'></div>";
    }
    if (showTooltip == true) {
      html = html + "<div class='tooltip'></div>";
    }
  }
  html = html + "</div></div>";
  if (animated == true) {
    console.log("Animating widget: " + title);
  }
  if (container != null) {
    container.innerHTML = html;
  }
  return html;
}

function renderWidgetB(container, title, data, width, height, theme, showLegend, showTooltip, showGrid, animated) {
  var html = "";
  html = html + "<div class='widget' style='width:" + width + "px;height:" + height + "px'>";
  html = html + "<div class='widget-header'>" + title + "</div>";
  if (theme == "dark") {
    html = html + "<div class='widget-body dark'>";
  } else if (theme == "light") {
    html = html + "<div class='widget-body light'>";
  } else {
    html = html + "<div class='widget-body'>";
  }
  if (data == null || data.length == 0) {
    html = html + "<p>No data</p>";
  } else {
    html = html + "<ul>";
    for (var i = 0; i < data.length; i++) {
      html = html + "<li>" + data[i].label + ": " + data[i].value + "</li>";
    }
    html = html + "</ul>";
    if (showLegend == true) {
      html = html + "<div class='legend'>";
      for (var j = 0; j < data.length; j++) {
        html = html + "<span class='legend-item'>" + data[j].label + "</span>";
      }
      html = html + "</div>";
    }
    if (showGrid == true) {
      html = html + "<div class='grid'></div>";
    }
    if (showTooltip == true) {
      html = html + "<div class='tooltip'></div>";
    }
  }
  html = html + "</div></div>";
  if (animated == true) {
    console.log("Animating widget: " + title);
  }
  if (container != null) {
    container.innerHTML = html;
  }
  return html;
}

function renderWidgetC(container, title, data, width, height, theme, showLegend, showTooltip, showGrid, animated) {
  var html = "";
  html = html + "<div class='widget' style='width:" + width + "px;height:" + height + "px'>";
  html = html + "<div class='widget-header'>" + title + "</div>";
  if (theme == "dark") {
    html = html + "<div class='widget-body dark'>";
  } else if (theme == "light") {
    html = html + "<div class='widget-body light'>";
  } else {
    html = html + "<div class='widget-body'>";
  }
  if (data == null || data.length == 0) {
    html = html + "<p>No data</p>";
  } else {
    html = html + "<ul>";
    for (var i = 0; i < data.length; i++) {
      html = html + "<li>" + data[i].label + ": " + data[i].value + "</li>";
    }
    html = html + "</ul>";
    if (showLegend == true) {
      html = html + "<div class='legend'>";
      for (var j = 0; j < data.length; j++) {
        html = html + "<span class='legend-item'>" + data[j].label + "</span>";
      }
      html = html + "</div>";
    }
    if (showGrid == true) {
      html = html + "<div class='grid'></div>";
    }
    if (showTooltip == true) {
      html = html + "<div class='tooltip'></div>";
    }
  }
  html = html + "</div></div>";
  if (animated == true) {
    console.log("Animating widget: " + title);
  }
  if (container != null) {
    container.innerHTML = html;
  }
  return html;
}

// ---- Duplicated event handlers ----

function handleEventA(event, context, user, permissions, config, logger) {
  console.log("handleEventA: " + event.type);
  if (event == null) return;
  if (event.type == null || event.type == "") return;
  if (user == null) { logger.error("No user"); return; }
  if (permissions == null) { logger.error("No permissions"); return; }
  if (!permissions.includes(event.type)) { logger.warn("Permission denied for " + event.type); return; }
  var payload = event.payload;
  if (payload == null) { logger.warn("Empty payload"); return; }
  if (event.type == "click") {
    if (payload.target == null) return;
    if (payload.target.id == "submit") {
      context.submitCount = (context.submitCount || 0) + 1;
      logger.log("Submit clicked by " + user.id);
    } else if (payload.target.id == "cancel") {
      context.cancelCount = (context.cancelCount || 0) + 1;
      logger.log("Cancel clicked by " + user.id);
    } else {
      context.otherClickCount = (context.otherClickCount || 0) + 1;
    }
  } else if (event.type == "keydown") {
    if (payload.key == "Enter") {
      context.enterCount = (context.enterCount || 0) + 1;
    } else if (payload.key == "Escape") {
      context.escapeCount = (context.escapeCount || 0) + 1;
    }
  } else if (event.type == "change") {
    context.changeCount = (context.changeCount || 0) + 1;
    logger.log("Change event on " + (payload.target ? payload.target.name : "unknown"));
  } else {
    logger.warn("Unhandled event type: " + event.type);
  }
  if (config.trackEvents == true) {
    console.log("TRACK: " + JSON.stringify({ type: event.type, userId: user.id, ts: new Date().toISOString() }));
  }
}

function handleEventB(event, context, user, permissions, config, logger) {
  console.log("handleEventB: " + event.type);
  if (event == null) return;
  if (event.type == null || event.type == "") return;
  if (user == null) { logger.error("No user"); return; }
  if (permissions == null) { logger.error("No permissions"); return; }
  if (!permissions.includes(event.type)) { logger.warn("Permission denied for " + event.type); return; }
  var payload = event.payload;
  if (payload == null) { logger.warn("Empty payload"); return; }
  if (event.type == "click") {
    if (payload.target == null) return;
    if (payload.target.id == "submit") {
      context.submitCount = (context.submitCount || 0) + 1;
      logger.log("Submit clicked by " + user.id);
    } else if (payload.target.id == "cancel") {
      context.cancelCount = (context.cancelCount || 0) + 1;
      logger.log("Cancel clicked by " + user.id);
    } else {
      context.otherClickCount = (context.otherClickCount || 0) + 1;
    }
  } else if (event.type == "keydown") {
    if (payload.key == "Enter") {
      context.enterCount = (context.enterCount || 0) + 1;
    } else if (payload.key == "Escape") {
      context.escapeCount = (context.escapeCount || 0) + 1;
    }
  } else if (event.type == "change") {
    context.changeCount = (context.changeCount || 0) + 1;
    logger.log("Change event on " + (payload.target ? payload.target.name : "unknown"));
  } else {
    logger.warn("Unhandled event type: " + event.type);
  }
  if (config.trackEvents == true) {
    console.log("TRACK: " + JSON.stringify({ type: event.type, userId: user.id, ts: new Date().toISOString() }));
  }
}

function handleEventC(event, context, user, permissions, config, logger) {
  console.log("handleEventC: " + event.type);
  if (event == null) return;
  if (event.type == null || event.type == "") return;
  if (user == null) { logger.error("No user"); return; }
  if (permissions == null) { logger.error("No permissions"); return; }
  if (!permissions.includes(event.type)) { logger.warn("Permission denied for " + event.type); return; }
  var payload = event.payload;
  if (payload == null) { logger.warn("Empty payload"); return; }
  if (event.type == "click") {
    if (payload.target == null) return;
    if (payload.target.id == "submit") {
      context.submitCount = (context.submitCount || 0) + 1;
      logger.log("Submit clicked by " + user.id);
    } else if (payload.target.id == "cancel") {
      context.cancelCount = (context.cancelCount || 0) + 1;
      logger.log("Cancel clicked by " + user.id);
    } else {
      context.otherClickCount = (context.otherClickCount || 0) + 1;
    }
  } else if (event.type == "keydown") {
    if (payload.key == "Enter") {
      context.enterCount = (context.enterCount || 0) + 1;
    } else if (payload.key == "Escape") {
      context.escapeCount = (context.escapeCount || 0) + 1;
    }
  } else if (event.type == "change") {
    context.changeCount = (context.changeCount || 0) + 1;
    logger.log("Change event on " + (payload.target ? payload.target.name : "unknown"));
  } else {
    logger.warn("Unhandled event type: " + event.type);
  }
  if (config.trackEvents == true) {
    console.log("TRACK: " + JSON.stringify({ type: event.type, userId: user.id, ts: new Date().toISOString() }));
  }
}

// ---- Duplicated data transformers ----

function transformDataA(records, fieldMap, defaultValues, filters, sortKey, sortDir, limit, offset) {
  if (records == null || records.length == 0) return [];
  var result = [];
  for (var i = 0; i < records.length; i++) {
    var rec = records[i];
    if (rec == null) continue;
    var transformed = {};
    var keys = Object.keys(fieldMap);
    for (var k = 0; k < keys.length; k++) {
      var srcKey = keys[k];
      var dstKey = fieldMap[srcKey];
      if (rec[srcKey] != null) {
        transformed[dstKey] = rec[srcKey];
      } else if (defaultValues != null && defaultValues[dstKey] != null) {
        transformed[dstKey] = defaultValues[dstKey];
      } else {
        transformed[dstKey] = null;
      }
    }
    var pass = true;
    if (filters != null) {
      for (var f = 0; f < filters.length; f++) {
        var filter = filters[f];
        if (filter.field != null && transformed[filter.field] != filter.value) {
          pass = false;
          break;
        }
      }
    }
    if (pass) result.push(transformed);
  }
  if (sortKey != null) {
    result.sort(function(a, b) {
      if (a[sortKey] < b[sortKey]) return sortDir == "desc" ? 1 : -1;
      if (a[sortKey] > b[sortKey]) return sortDir == "desc" ? -1 : 1;
      return 0;
    });
  }
  if (offset != null && offset > 0) result = result.slice(offset);
  if (limit != null && limit > 0) result = result.slice(0, limit);
  console.log("transformDataA: " + result.length + " records");
  return result;
}

function transformDataB(records, fieldMap, defaultValues, filters, sortKey, sortDir, limit, offset) {
  if (records == null || records.length == 0) return [];
  var result = [];
  for (var i = 0; i < records.length; i++) {
    var rec = records[i];
    if (rec == null) continue;
    var transformed = {};
    var keys = Object.keys(fieldMap);
    for (var k = 0; k < keys.length; k++) {
      var srcKey = keys[k];
      var dstKey = fieldMap[srcKey];
      if (rec[srcKey] != null) {
        transformed[dstKey] = rec[srcKey];
      } else if (defaultValues != null && defaultValues[dstKey] != null) {
        transformed[dstKey] = defaultValues[dstKey];
      } else {
        transformed[dstKey] = null;
      }
    }
    var pass = true;
    if (filters != null) {
      for (var f = 0; f < filters.length; f++) {
        var filter = filters[f];
        if (filter.field != null && transformed[filter.field] != filter.value) {
          pass = false;
          break;
        }
      }
    }
    if (pass) result.push(transformed);
  }
  if (sortKey != null) {
    result.sort(function(a, b) {
      if (a[sortKey] < b[sortKey]) return sortDir == "desc" ? 1 : -1;
      if (a[sortKey] > b[sortKey]) return sortDir == "desc" ? -1 : 1;
      return 0;
    });
  }
  if (offset != null && offset > 0) result = result.slice(offset);
  if (limit != null && limit > 0) result = result.slice(0, limit);
  console.log("transformDataB: " + result.length + " records");
  return result;
}

function transformDataC(records, fieldMap, defaultValues, filters, sortKey, sortDir, limit, offset) {
  if (records == null || records.length == 0) return [];
  var result = [];
  for (var i = 0; i < records.length; i++) {
    var rec = records[i];
    if (rec == null) continue;
    var transformed = {};
    var keys = Object.keys(fieldMap);
    for (var k = 0; k < keys.length; k++) {
      var srcKey = keys[k];
      var dstKey = fieldMap[srcKey];
      if (rec[srcKey] != null) {
        transformed[dstKey] = rec[srcKey];
      } else if (defaultValues != null && defaultValues[dstKey] != null) {
        transformed[dstKey] = defaultValues[dstKey];
      } else {
        transformed[dstKey] = null;
      }
    }
    var pass = true;
    if (filters != null) {
      for (var f = 0; f < filters.length; f++) {
        var filter = filters[f];
        if (filter.field != null && transformed[filter.field] != filter.value) {
          pass = false;
          break;
        }
      }
    }
    if (pass) result.push(transformed);
  }
  if (sortKey != null) {
    result.sort(function(a, b) {
      if (a[sortKey] < b[sortKey]) return sortDir == "desc" ? 1 : -1;
      if (a[sortKey] > b[sortKey]) return sortDir == "desc" ? -1 : 1;
      return 0;
    });
  }
  if (offset != null && offset > 0) result = result.slice(offset);
  if (limit != null && limit > 0) result = result.slice(0, limit);
  console.log("transformDataC: " + result.length + " records");
  return result;
}

// ---- Duplicated sync routines ----

function syncRecordsA(source, destination, keyField, conflictPolicy, dryRun, logger) {
  var added = 0; var updated = 0; var skipped = 0; var errors = 0;
  if (source == null || destination == null) { logger.error("null source or destination"); return; }
  for (var i = 0; i < source.length; i++) {
    var srcRec = source[i];
    if (srcRec == null) { skipped++; continue; }
    var key = srcRec[keyField];
    if (key == null || key == "") { skipped++; continue; }
    var found = false;
    for (var j = 0; j < destination.length; j++) {
      if (destination[j][keyField] == key) {
        found = true;
        if (conflictPolicy == "overwrite") {
          if (!dryRun) destination[j] = srcRec;
          updated++;
        } else if (conflictPolicy == "skip") {
          skipped++;
        } else if (conflictPolicy == "error") {
          logger.error("Conflict on key " + key);
          errors++;
        }
        break;
      }
    }
    if (!found) {
      if (!dryRun) destination.push(srcRec);
      added++;
    }
  }
  logger.log("syncRecordsA: added=" + added + " updated=" + updated + " skipped=" + skipped + " errors=" + errors);
}

function syncRecordsB(source, destination, keyField, conflictPolicy, dryRun, logger) {
  var added = 0; var updated = 0; var skipped = 0; var errors = 0;
  if (source == null || destination == null) { logger.error("null source or destination"); return; }
  for (var i = 0; i < source.length; i++) {
    var srcRec = source[i];
    if (srcRec == null) { skipped++; continue; }
    var key = srcRec[keyField];
    if (key == null || key == "") { skipped++; continue; }
    var found = false;
    for (var j = 0; j < destination.length; j++) {
      if (destination[j][keyField] == key) {
        found = true;
        if (conflictPolicy == "overwrite") {
          if (!dryRun) destination[j] = srcRec;
          updated++;
        } else if (conflictPolicy == "skip") {
          skipped++;
        } else if (conflictPolicy == "error") {
          logger.error("Conflict on key " + key);
          errors++;
        }
        break;
      }
    }
    if (!found) {
      if (!dryRun) destination.push(srcRec);
      added++;
    }
  }
  logger.log("syncRecordsB: added=" + added + " updated=" + updated + " skipped=" + skipped + " errors=" + errors);
}

function syncRecordsC(source, destination, keyField, conflictPolicy, dryRun, logger) {
  var added = 0; var updated = 0; var skipped = 0; var errors = 0;
  if (source == null || destination == null) { logger.error("null source or destination"); return; }
  for (var i = 0; i < source.length; i++) {
    var srcRec = source[i];
    if (srcRec == null) { skipped++; continue; }
    var key = srcRec[keyField];
    if (key == null || key == "") { skipped++; continue; }
    var found = false;
    for (var j = 0; j < destination.length; j++) {
      if (destination[j][keyField] == key) {
        found = true;
        if (conflictPolicy == "overwrite") {
          if (!dryRun) destination[j] = srcRec;
          updated++;
        } else if (conflictPolicy == "skip") {
          skipped++;
        } else if (conflictPolicy == "error") {
          logger.error("Conflict on key " + key);
          errors++;
        }
        break;
      }
    }
    if (!found) {
      if (!dryRun) destination.push(srcRec);
      added++;
    }
  }
  logger.log("syncRecordsC: added=" + added + " updated=" + updated + " skipped=" + skipped + " errors=" + errors);
}

// ---- Duplicated audit log writers ----

function auditLogA(action, user, resource, oldValue, newValue, timestamp, ipAddress, sessionId, requestId, metadata) {
  var entry = {};
  entry.action = action;
  entry.userId = user != null ? user.id : null;
  entry.userName = user != null ? user.name : null;
  entry.userRole = user != null ? user.role : null;
  entry.resourceType = resource != null ? resource.type : null;
  entry.resourceId = resource != null ? resource.id : null;
  entry.oldValue = oldValue;
  entry.newValue = newValue;
  entry.timestamp = timestamp || new Date().toISOString();
  entry.ipAddress = ipAddress || "unknown";
  entry.sessionId = sessionId || "unknown";
  entry.requestId = requestId || "unknown";
  entry.metadata = metadata || {};
  if (action == null || action == "") {
    console.error("auditLogA: action is required");
    return null;
  }
  if (user == null) {
    console.warn("auditLogA: no user provided for action " + action);
  }
  console.log("AUDIT: " + JSON.stringify(entry));
  return entry;
}

function auditLogB(action, user, resource, oldValue, newValue, timestamp, ipAddress, sessionId, requestId, metadata) {
  var entry = {};
  entry.action = action;
  entry.userId = user != null ? user.id : null;
  entry.userName = user != null ? user.name : null;
  entry.userRole = user != null ? user.role : null;
  entry.resourceType = resource != null ? resource.type : null;
  entry.resourceId = resource != null ? resource.id : null;
  entry.oldValue = oldValue;
  entry.newValue = newValue;
  entry.timestamp = timestamp || new Date().toISOString();
  entry.ipAddress = ipAddress || "unknown";
  entry.sessionId = sessionId || "unknown";
  entry.requestId = requestId || "unknown";
  entry.metadata = metadata || {};
  if (action == null || action == "") {
    console.error("auditLogB: action is required");
    return null;
  }
  if (user == null) {
    console.warn("auditLogB: no user provided for action " + action);
  }
  console.log("AUDIT: " + JSON.stringify(entry));
  return entry;
}

function auditLogC(action, user, resource, oldValue, newValue, timestamp, ipAddress, sessionId, requestId, metadata) {
  var entry = {};
  entry.action = action;
  entry.userId = user != null ? user.id : null;
  entry.userName = user != null ? user.name : null;
  entry.userRole = user != null ? user.role : null;
  entry.resourceType = resource != null ? resource.type : null;
  entry.resourceId = resource != null ? resource.id : null;
  entry.oldValue = oldValue;
  entry.newValue = newValue;
  entry.timestamp = timestamp || new Date().toISOString();
  entry.ipAddress = ipAddress || "unknown";
  entry.sessionId = sessionId || "unknown";
  entry.requestId = requestId || "unknown";
  entry.metadata = metadata || {};
  if (action == null || action == "") {
    console.error("auditLogC: action is required");
    return null;
  }
  if (user == null) {
    console.warn("auditLogC: no user provided for action " + action);
  }
  console.log("AUDIT: " + JSON.stringify(entry));
  return entry;
}

// ---- Deeply nested regional shipping/tax/discount calculator ----

function calculateGlobalShippingTaxAndDiscountMatrix(order, customer, region, promoCode, isHoliday, warehouseDistanceKm, currency) {
  var breakdown = {};
  var shippingCost = 0;
  var taxAmount = 0;
  var discountAmount = 0;
  var finalTotal = 0;
  var messages = [];

  if (region == "NA") {
    messages.push("Processing order for region: North America");
    breakdown.baseTaxRate = 0.0;
    if (customer.tier == "standard") {
      messages.push("Customer tier: standard in North America");
      breakdown.tierDiscount = 0.0;
      if (order.total >= 0 && order.total < 100) {
        messages.push("Order bracket: flat rate for standard/North America");
        shippingCost = (order.total * 0.02 + warehouseDistanceKm * 0.01) * 1.0 * 1.0;
        if (isHoliday) {
          shippingCost = shippingCost * 1.15;
          messages.push("Holiday surcharge applied for flat rate");
        }
        taxAmount = order.total * 0.0 * (1 - 0.0);
        if (promoCode == "SAVE10" && order.total > 0) {
          discountAmount = order.total * 0.10 * 1.0;
          messages.push("Promo SAVE10 applied in flat rate");
        } else if (promoCode == "SAVE20" && customer.tier == "standard") {
          discountAmount = order.total * 0.20 * 0.5;
          messages.push("Promo SAVE20 applied for standard");
        } else {
          discountAmount = 0;
        }
      }
      else if (order.total >= 100 && order.total < 500) {
        messages.push("Order bracket: volume tier 1 for standard/North America");
        shippingCost = (order.total * 0.02 + warehouseDistanceKm * 0.01) * 1.0 * 0.9;
        if (isHoliday) {
          shippingCost = shippingCost * 1.15;
          messages.push("Holiday surcharge applied for volume tier 1");
        }
        taxAmount = order.total * 0.0 * (1 - 0.0);
        if (promoCode == "SAVE10" && order.total > 100) {
          discountAmount = order.total * 0.10 * 0.9;
          messages.push("Promo SAVE10 applied in volume tier 1");
        } else if (promoCode == "SAVE20" && customer.tier == "standard") {
          discountAmount = order.total * 0.20 * 0.5;
          messages.push("Promo SAVE20 applied for standard");
        } else {
          discountAmount = 0;
        }
      }
      else if (order.total >= 500 && order.total < 2000) {
        messages.push("Order bracket: volume tier 2 for standard/North America");
        shippingCost = (order.total * 0.02 + warehouseDistanceKm * 0.01) * 1.0 * 0.75;
        if (isHoliday) {
          shippingCost = shippingCost * 1.15;
          messages.push("Holiday surcharge applied for volume tier 2");
        }
        taxAmount = order.total * 0.0 * (1 - 0.0);
        if (promoCode == "SAVE10" && order.total > 500) {
          discountAmount = order.total * 0.10 * 0.75;
          messages.push("Promo SAVE10 applied in volume tier 2");
        } else if (promoCode == "SAVE20" && customer.tier == "standard") {
          discountAmount = order.total * 0.20 * 0.5;
          messages.push("Promo SAVE20 applied for standard");
        } else {
          discountAmount = 0;
        }
      }
      else if (order.total >= 2000) {
        messages.push("Order bracket: volume tier 3 for standard/North America");
        shippingCost = (order.total * 0.02 + warehouseDistanceKm * 0.01) * 1.0 * 0.6;
        if (isHoliday) {
          shippingCost = shippingCost * 1.15;
          messages.push("Holiday surcharge applied for volume tier 3");
        }
        taxAmount = order.total * 0.0 * (1 - 0.0);
        if (promoCode == "SAVE10" && order.total > 2000) {
          discountAmount = order.total * 0.10 * 0.6;
          messages.push("Promo SAVE10 applied in volume tier 3");
        } else if (promoCode == "SAVE20" && customer.tier == "standard") {
          discountAmount = order.total * 0.20 * 0.5;
          messages.push("Promo SAVE20 applied for standard");
        } else {
          discountAmount = 0;
        }
      }
    }
    else if (customer.tier == "premium") {
      messages.push("Customer tier: premium in North America");
      breakdown.tierDiscount = 0.05;
      if (order.total >= 0 && order.total < 100) {
        messages.push("Order bracket: flat rate for premium/North America");
        shippingCost = (order.total * 0.02 + warehouseDistanceKm * 0.01) * 0.9 * 1.0;
        if (isHoliday) {
          shippingCost = shippingCost * 1.15;
          messages.push("Holiday surcharge applied for flat rate");
        }
        taxAmount = order.total * 0.0 * (1 - 0.05);
        if (promoCode == "SAVE10" && order.total > 0) {
          discountAmount = order.total * 0.10 * 1.0;
          messages.push("Promo SAVE10 applied in flat rate");
        } else if (promoCode == "SAVE20" && customer.tier == "premium") {
          discountAmount = order.total * 0.20 * 0.55;
          messages.push("Promo SAVE20 applied for premium");
        } else {
          discountAmount = 0;
        }
      }
      else if (order.total >= 100 && order.total < 500) {
        messages.push("Order bracket: volume tier 1 for premium/North America");
        shippingCost = (order.total * 0.02 + warehouseDistanceKm * 0.01) * 0.9 * 0.9;
        if (isHoliday) {
          shippingCost = shippingCost * 1.15;
          messages.push("Holiday surcharge applied for volume tier 1");
        }
        taxAmount = order.total * 0.0 * (1 - 0.05);
        if (promoCode == "SAVE10" && order.total > 100) {
          discountAmount = order.total * 0.10 * 0.9;
          messages.push("Promo SAVE10 applied in volume tier 1");
        } else if (promoCode == "SAVE20" && customer.tier == "premium") {
          discountAmount = order.total * 0.20 * 0.55;
          messages.push("Promo SAVE20 applied for premium");
        } else {
          discountAmount = 0;
        }
      }
      else if (order.total >= 500 && order.total < 2000) {
        messages.push("Order bracket: volume tier 2 for premium/North America");
        shippingCost = (order.total * 0.02 + warehouseDistanceKm * 0.01) * 0.9 * 0.75;
        if (isHoliday) {
          shippingCost = shippingCost * 1.15;
          messages.push("Holiday surcharge applied for volume tier 2");
        }
        taxAmount = order.total * 0.0 * (1 - 0.05);
        if (promoCode == "SAVE10" && order.total > 500) {
          discountAmount = order.total * 0.10 * 0.75;
          messages.push("Promo SAVE10 applied in volume tier 2");
        } else if (promoCode == "SAVE20" && customer.tier == "premium") {
          discountAmount = order.total * 0.20 * 0.55;
          messages.push("Promo SAVE20 applied for premium");
        } else {
          discountAmount = 0;
        }
      }
      else if (order.total >= 2000) {
        messages.push("Order bracket: volume tier 3 for premium/North America");
        shippingCost = (order.total * 0.02 + warehouseDistanceKm * 0.01) * 0.9 * 0.6;
        if (isHoliday) {
          shippingCost = shippingCost * 1.15;
          messages.push("Holiday surcharge applied for volume tier 3");
        }
        taxAmount = order.total * 0.0 * (1 - 0.05);
        if (promoCode == "SAVE10" && order.total > 2000) {
          discountAmount = order.total * 0.10 * 0.6;
          messages.push("Promo SAVE10 applied in volume tier 3");
        } else if (promoCode == "SAVE20" && customer.tier == "premium") {
          discountAmount = order.total * 0.20 * 0.55;
          messages.push("Promo SAVE20 applied for premium");
        } else {
          discountAmount = 0;
        }
      }
    }
    else if (customer.tier == "enterprise") {
      messages.push("Customer tier: enterprise in North America");
      breakdown.tierDiscount = 0.12;
      if (order.total >= 0 && order.total < 100) {
        messages.push("Order bracket: flat rate for enterprise/North America");
        shippingCost = (order.total * 0.02 + warehouseDistanceKm * 0.01) * 0.75 * 1.0;
        if (isHoliday) {
          shippingCost = shippingCost * 1.15;
          messages.push("Holiday surcharge applied for flat rate");
        }
        taxAmount = order.total * 0.0 * (1 - 0.12);
        if (promoCode == "SAVE10" && order.total > 0) {
          discountAmount = order.total * 0.10 * 1.0;
          messages.push("Promo SAVE10 applied in flat rate");
        } else if (promoCode == "SAVE20" && customer.tier == "enterprise") {
          discountAmount = order.total * 0.20 * 0.62;
          messages.push("Promo SAVE20 applied for enterprise");
        } else {
          discountAmount = 0;
        }
      }
      else if (order.total >= 100 && order.total < 500) {
        messages.push("Order bracket: volume tier 1 for enterprise/North America");
        shippingCost = (order.total * 0.02 + warehouseDistanceKm * 0.01) * 0.75 * 0.9;
        if (isHoliday) {
          shippingCost = shippingCost * 1.15;
          messages.push("Holiday surcharge applied for volume tier 1");
        }
        taxAmount = order.total * 0.0 * (1 - 0.12);
        if (promoCode == "SAVE10" && order.total > 100) {
          discountAmount = order.total * 0.10 * 0.9;
          messages.push("Promo SAVE10 applied in volume tier 1");
        } else if (promoCode == "SAVE20" && customer.tier == "enterprise") {
          discountAmount = order.total * 0.20 * 0.62;
          messages.push("Promo SAVE20 applied for enterprise");
        } else {
          discountAmount = 0;
        }
      }
      else if (order.total >= 500 && order.total < 2000) {
        messages.push("Order bracket: volume tier 2 for enterprise/North America");
        shippingCost = (order.total * 0.02 + warehouseDistanceKm * 0.01) * 0.75 * 0.75;
        if (isHoliday) {
          shippingCost = shippingCost * 1.15;
          messages.push("Holiday surcharge applied for volume tier 2");
        }
        taxAmount = order.total * 0.0 * (1 - 0.12);
        if (promoCode == "SAVE10" && order.total > 500) {
          discountAmount = order.total * 0.10 * 0.75;
          messages.push("Promo SAVE10 applied in volume tier 2");
        } else if (promoCode == "SAVE20" && customer.tier == "enterprise") {
          discountAmount = order.total * 0.20 * 0.62;
          messages.push("Promo SAVE20 applied for enterprise");
        } else {
          discountAmount = 0;
        }
      }
      else if (order.total >= 2000) {
        messages.push("Order bracket: volume tier 3 for enterprise/North America");
        shippingCost = (order.total * 0.02 + warehouseDistanceKm * 0.01) * 0.75 * 0.6;
        if (isHoliday) {
          shippingCost = shippingCost * 1.15;
          messages.push("Holiday surcharge applied for volume tier 3");
        }
        taxAmount = order.total * 0.0 * (1 - 0.12);
        if (promoCode == "SAVE10" && order.total > 2000) {
          discountAmount = order.total * 0.10 * 0.6;
          messages.push("Promo SAVE10 applied in volume tier 3");
        } else if (promoCode == "SAVE20" && customer.tier == "enterprise") {
          discountAmount = order.total * 0.20 * 0.62;
          messages.push("Promo SAVE20 applied for enterprise");
        } else {
          discountAmount = 0;
        }
      }
    }
  }
  else if (region == "EU") {
    messages.push("Processing order for region: Europe");
    breakdown.baseTaxRate = 0.2;
    if (customer.tier == "standard") {
      messages.push("Customer tier: standard in Europe");
      breakdown.tierDiscount = 0.0;
      if (order.total >= 0 && order.total < 100) {
        messages.push("Order bracket: flat rate for standard/Europe");
        shippingCost = (order.total * 0.02 + warehouseDistanceKm * 0.01) * 1.0 * 1.0;
        if (isHoliday) {
          shippingCost = shippingCost * 1.15;
          messages.push("Holiday surcharge applied for flat rate");
        }
        taxAmount = order.total * 0.2 * (1 - 0.0);
        if (promoCode == "SAVE10" && order.total > 0) {
          discountAmount = order.total * 0.10 * 1.0;
          messages.push("Promo SAVE10 applied in flat rate");
        } else if (promoCode == "SAVE20" && customer.tier == "standard") {
          discountAmount = order.total * 0.20 * 0.5;
          messages.push("Promo SAVE20 applied for standard");
        } else {
          discountAmount = 0;
        }
      }
      else if (order.total >= 100 && order.total < 500) {
        messages.push("Order bracket: volume tier 1 for standard/Europe");
        shippingCost = (order.total * 0.02 + warehouseDistanceKm * 0.01) * 1.0 * 0.9;
        if (isHoliday) {
          shippingCost = shippingCost * 1.15;
          messages.push("Holiday surcharge applied for volume tier 1");
        }
        taxAmount = order.total * 0.2 * (1 - 0.0);
        if (promoCode == "SAVE10" && order.total > 100) {
          discountAmount = order.total * 0.10 * 0.9;
          messages.push("Promo SAVE10 applied in volume tier 1");
        } else if (promoCode == "SAVE20" && customer.tier == "standard") {
          discountAmount = order.total * 0.20 * 0.5;
          messages.push("Promo SAVE20 applied for standard");
        } else {
          discountAmount = 0;
        }
      }
      else if (order.total >= 500 && order.total < 2000) {
        messages.push("Order bracket: volume tier 2 for standard/Europe");
        shippingCost = (order.total * 0.02 + warehouseDistanceKm * 0.01) * 1.0 * 0.75;
        if (isHoliday) {
          shippingCost = shippingCost * 1.15;
          messages.push("Holiday surcharge applied for volume tier 2");
        }
        taxAmount = order.total * 0.2 * (1 - 0.0);
        if (promoCode == "SAVE10" && order.total > 500) {
          discountAmount = order.total * 0.10 * 0.75;
          messages.push("Promo SAVE10 applied in volume tier 2");
        } else if (promoCode == "SAVE20" && customer.tier == "standard") {
          discountAmount = order.total * 0.20 * 0.5;
          messages.push("Promo SAVE20 applied for standard");
        } else {
          discountAmount = 0;
        }
      }
      else if (order.total >= 2000) {
        messages.push("Order bracket: volume tier 3 for standard/Europe");
        shippingCost = (order.total * 0.02 + warehouseDistanceKm * 0.01) * 1.0 * 0.6;
        if (isHoliday) {
          shippingCost = shippingCost * 1.15;
          messages.push("Holiday surcharge applied for volume tier 3");
        }
        taxAmount = order.total * 0.2 * (1 - 0.0);
        if (promoCode == "SAVE10" && order.total > 2000) {
          discountAmount = order.total * 0.10 * 0.6;
          messages.push("Promo SAVE10 applied in volume tier 3");
        } else if (promoCode == "SAVE20" && customer.tier == "standard") {
          discountAmount = order.total * 0.20 * 0.5;
          messages.push("Promo SAVE20 applied for standard");
        } else {
          discountAmount = 0;
        }
      }
    }
    else if (customer.tier == "premium") {
      messages.push("Customer tier: premium in Europe");
      breakdown.tierDiscount = 0.05;
      if (order.total >= 0 && order.total < 100) {
        messages.push("Order bracket: flat rate for premium/Europe");
        shippingCost = (order.total * 0.02 + warehouseDistanceKm * 0.01) * 0.9 * 1.0;
        if (isHoliday) {
          shippingCost = shippingCost * 1.15;
          messages.push("Holiday surcharge applied for flat rate");
        }
        taxAmount = order.total * 0.2 * (1 - 0.05);
        if (promoCode == "SAVE10" && order.total > 0) {
          discountAmount = order.total * 0.10 * 1.0;
          messages.push("Promo SAVE10 applied in flat rate");
        } else if (promoCode == "SAVE20" && customer.tier == "premium") {
          discountAmount = order.total * 0.20 * 0.55;
          messages.push("Promo SAVE20 applied for premium");
        } else {
          discountAmount = 0;
        }
      }
      else if (order.total >= 100 && order.total < 500) {
        messages.push("Order bracket: volume tier 1 for premium/Europe");
        shippingCost = (order.total * 0.02 + warehouseDistanceKm * 0.01) * 0.9 * 0.9;
        if (isHoliday) {
          shippingCost = shippingCost * 1.15;
          messages.push("Holiday surcharge applied for volume tier 1");
        }
        taxAmount = order.total * 0.2 * (1 - 0.05);
        if (promoCode == "SAVE10" && order.total > 100) {
          discountAmount = order.total * 0.10 * 0.9;
          messages.push("Promo SAVE10 applied in volume tier 1");
        } else if (promoCode == "SAVE20" && customer.tier == "premium") {
          discountAmount = order.total * 0.20 * 0.55;
          messages.push("Promo SAVE20 applied for premium");
        } else {
          discountAmount = 0;
        }
      }
      else if (order.total >= 500 && order.total < 2000) {
        messages.push("Order bracket: volume tier 2 for premium/Europe");
        shippingCost = (order.total * 0.02 + warehouseDistanceKm * 0.01) * 0.9 * 0.75;
        if (isHoliday) {
          shippingCost = shippingCost * 1.15;
          messages.push("Holiday surcharge applied for volume tier 2");
        }
        taxAmount = order.total * 0.2 * (1 - 0.05);
        if (promoCode == "SAVE10" && order.total > 500) {
          discountAmount = order.total * 0.10 * 0.75;
          messages.push("Promo SAVE10 applied in volume tier 2");
        } else if (promoCode == "SAVE20" && customer.tier == "premium") {
          discountAmount = order.total * 0.20 * 0.55;
          messages.push("Promo SAVE20 applied for premium");
        } else {
          discountAmount = 0;
        }
      }
      else if (order.total >= 2000) {
        messages.push("Order bracket: volume tier 3 for premium/Europe");
        shippingCost = (order.total * 0.02 + warehouseDistanceKm * 0.01) * 0.9 * 0.6;
        if (isHoliday) {
          shippingCost = shippingCost * 1.15;
          messages.push("Holiday surcharge applied for volume tier 3");
        }
        taxAmount = order.total * 0.2 * (1 - 0.05);
        if (promoCode == "SAVE10" && order.total > 2000) {
          discountAmount = order.total * 0.10 * 0.6;
          messages.push("Promo SAVE10 applied in volume tier 3");
        } else if (promoCode == "SAVE20" && customer.tier == "premium") {
          discountAmount = order.total * 0.20 * 0.55;
          messages.push("Promo SAVE20 applied for premium");
        } else {
          discountAmount = 0;
        }
      }
    }
    else if (customer.tier == "enterprise") {
      messages.push("Customer tier: enterprise in Europe");
      breakdown.tierDiscount = 0.12;
      if (order.total >= 0 && order.total < 100) {
        messages.push("Order bracket: flat rate for enterprise/Europe");
        shippingCost = (order.total * 0.02 + warehouseDistanceKm * 0.01) * 0.75 * 1.0;
        if (isHoliday) {
          shippingCost = shippingCost * 1.15;
          messages.push("Holiday surcharge applied for flat rate");
        }
        taxAmount = order.total * 0.2 * (1 - 0.12);
        if (promoCode == "SAVE10" && order.total > 0) {
          discountAmount = order.total * 0.10 * 1.0;
          messages.push("Promo SAVE10 applied in flat rate");
        } else if (promoCode == "SAVE20" && customer.tier == "enterprise") {
          discountAmount = order.total * 0.20 * 0.62;
          messages.push("Promo SAVE20 applied for enterprise");
        } else {
          discountAmount = 0;
        }
      }
      else if (order.total >= 100 && order.total < 500) {
        messages.push("Order bracket: volume tier 1 for enterprise/Europe");
        shippingCost = (order.total * 0.02 + warehouseDistanceKm * 0.01) * 0.75 * 0.9;
        if (isHoliday) {
          shippingCost = shippingCost * 1.15;
          messages.push("Holiday surcharge applied for volume tier 1");
        }
        taxAmount = order.total * 0.2 * (1 - 0.12);
        if (promoCode == "SAVE10" && order.total > 100) {
          discountAmount = order.total * 0.10 * 0.9;
          messages.push("Promo SAVE10 applied in volume tier 1");
        } else if (promoCode == "SAVE20" && customer.tier == "enterprise") {
          discountAmount = order.total * 0.20 * 0.62;
          messages.push("Promo SAVE20 applied for enterprise");
        } else {
          discountAmount = 0;
        }
      }
      else if (order.total >= 500 && order.total < 2000) {
        messages.push("Order bracket: volume tier 2 for enterprise/Europe");
        shippingCost = (order.total * 0.02 + warehouseDistanceKm * 0.01) * 0.75 * 0.75;
        if (isHoliday) {
          shippingCost = shippingCost * 1.15;
          messages.push("Holiday surcharge applied for volume tier 2");
        }
        taxAmount = order.total * 0.2 * (1 - 0.12);
        if (promoCode == "SAVE10" && order.total > 500) {
          discountAmount = order.total * 0.10 * 0.75;
          messages.push("Promo SAVE10 applied in volume tier 2");
        } else if (promoCode == "SAVE20" && customer.tier == "enterprise") {
          discountAmount = order.total * 0.20 * 0.62;
          messages.push("Promo SAVE20 applied for enterprise");
        } else {
          discountAmount = 0;
        }
      }
      else if (order.total >= 2000) {
        messages.push("Order bracket: volume tier 3 for enterprise/Europe");
        shippingCost = (order.total * 0.02 + warehouseDistanceKm * 0.01) * 0.75 * 0.6;
        if (isHoliday) {
          shippingCost = shippingCost * 1.15;
          messages.push("Holiday surcharge applied for volume tier 3");
        }
        taxAmount = order.total * 0.2 * (1 - 0.12);
        if (promoCode == "SAVE10" && order.total > 2000) {
          discountAmount = order.total * 0.10 * 0.6;
          messages.push("Promo SAVE10 applied in volume tier 3");
        } else if (promoCode == "SAVE20" && customer.tier == "enterprise") {
          discountAmount = order.total * 0.20 * 0.62;
          messages.push("Promo SAVE20 applied for enterprise");
        } else {
          discountAmount = 0;
        }
      }
    }
  }
  else if (region == "APAC") {
    messages.push("Processing order for region: Asia Pacific");
    breakdown.baseTaxRate = 0.08;
    if (customer.tier == "standard") {
      messages.push("Customer tier: standard in Asia Pacific");
      breakdown.tierDiscount = 0.0;
      if (order.total >= 0 && order.total < 100) {
        messages.push("Order bracket: flat rate for standard/Asia Pacific");
        shippingCost = (order.total * 0.02 + warehouseDistanceKm * 0.01) * 1.0 * 1.0;
        if (isHoliday) {
          shippingCost = shippingCost * 1.15;
          messages.push("Holiday surcharge applied for flat rate");
        }
        taxAmount = order.total * 0.08 * (1 - 0.0);
        if (promoCode == "SAVE10" && order.total > 0) {
          discountAmount = order.total * 0.10 * 1.0;
          messages.push("Promo SAVE10 applied in flat rate");
        } else if (promoCode == "SAVE20" && customer.tier == "standard") {
          discountAmount = order.total * 0.20 * 0.5;
          messages.push("Promo SAVE20 applied for standard");
        } else {
          discountAmount = 0;
        }
      }
      else if (order.total >= 100 && order.total < 500) {
        messages.push("Order bracket: volume tier 1 for standard/Asia Pacific");
        shippingCost = (order.total * 0.02 + warehouseDistanceKm * 0.01) * 1.0 * 0.9;
        if (isHoliday) {
          shippingCost = shippingCost * 1.15;
          messages.push("Holiday surcharge applied for volume tier 1");
        }
        taxAmount = order.total * 0.08 * (1 - 0.0);
        if (promoCode == "SAVE10" && order.total > 100) {
          discountAmount = order.total * 0.10 * 0.9;
          messages.push("Promo SAVE10 applied in volume tier 1");
        } else if (promoCode == "SAVE20" && customer.tier == "standard") {
          discountAmount = order.total * 0.20 * 0.5;
          messages.push("Promo SAVE20 applied for standard");
        } else {
          discountAmount = 0;
        }
      }
      else if (order.total >= 500 && order.total < 2000) {
        messages.push("Order bracket: volume tier 2 for standard/Asia Pacific");
        shippingCost = (order.total * 0.02 + warehouseDistanceKm * 0.01) * 1.0 * 0.75;
        if (isHoliday) {
          shippingCost = shippingCost * 1.15;
          messages.push("Holiday surcharge applied for volume tier 2");
        }
        taxAmount = order.total * 0.08 * (1 - 0.0);
        if (promoCode == "SAVE10" && order.total > 500) {
          discountAmount = order.total * 0.10 * 0.75;
          messages.push("Promo SAVE10 applied in volume tier 2");
        } else if (promoCode == "SAVE20" && customer.tier == "standard") {
          discountAmount = order.total * 0.20 * 0.5;
          messages.push("Promo SAVE20 applied for standard");
        } else {
          discountAmount = 0;
        }
      }
      else if (order.total >= 2000) {
        messages.push("Order bracket: volume tier 3 for standard/Asia Pacific");
        shippingCost = (order.total * 0.02 + warehouseDistanceKm * 0.01) * 1.0 * 0.6;
        if (isHoliday) {
          shippingCost = shippingCost * 1.15;
          messages.push("Holiday surcharge applied for volume tier 3");
        }
        taxAmount = order.total * 0.08 * (1 - 0.0);
        if (promoCode == "SAVE10" && order.total > 2000) {
          discountAmount = order.total * 0.10 * 0.6;
          messages.push("Promo SAVE10 applied in volume tier 3");
        } else if (promoCode == "SAVE20" && customer.tier == "standard") {
          discountAmount = order.total * 0.20 * 0.5;
          messages.push("Promo SAVE20 applied for standard");
        } else {
          discountAmount = 0;
        }
      }
    }
    else if (customer.tier == "premium") {
      messages.push("Customer tier: premium in Asia Pacific");
      breakdown.tierDiscount = 0.05;
      if (order.total >= 0 && order.total < 100) {
        messages.push("Order bracket: flat rate for premium/Asia Pacific");
        shippingCost = (order.total * 0.02 + warehouseDistanceKm * 0.01) * 0.9 * 1.0;
        if (isHoliday) {
          shippingCost = shippingCost * 1.15;
          messages.push("Holiday surcharge applied for flat rate");
        }
        taxAmount = order.total * 0.08 * (1 - 0.05);
        if (promoCode == "SAVE10" && order.total > 0) {
          discountAmount = order.total * 0.10 * 1.0;
          messages.push("Promo SAVE10 applied in flat rate");
        } else if (promoCode == "SAVE20" && customer.tier == "premium") {
          discountAmount = order.total * 0.20 * 0.55;
          messages.push("Promo SAVE20 applied for premium");
        } else {
          discountAmount = 0;
        }
      }
      else if (order.total >= 100 && order.total < 500) {
        messages.push("Order bracket: volume tier 1 for premium/Asia Pacific");
        shippingCost = (order.total * 0.02 + warehouseDistanceKm * 0.01) * 0.9 * 0.9;
        if (isHoliday) {
          shippingCost = shippingCost * 1.15;
          messages.push("Holiday surcharge applied for volume tier 1");
        }
        taxAmount = order.total * 0.08 * (1 - 0.05);
        if (promoCode == "SAVE10" && order.total > 100) {
          discountAmount = order.total * 0.10 * 0.9;
          messages.push("Promo SAVE10 applied in volume tier 1");
        } else if (promoCode == "SAVE20" && customer.tier == "premium") {
          discountAmount = order.total * 0.20 * 0.55;
          messages.push("Promo SAVE20 applied for premium");
        } else {
          discountAmount = 0;
        }
      }
      else if (order.total >= 500 && order.total < 2000) {
        messages.push("Order bracket: volume tier 2 for premium/Asia Pacific");
        shippingCost = (order.total * 0.02 + warehouseDistanceKm * 0.01) * 0.9 * 0.75;
        if (isHoliday) {
          shippingCost = shippingCost * 1.15;
          messages.push("Holiday surcharge applied for volume tier 2");
        }
        taxAmount = order.total * 0.08 * (1 - 0.05);
        if (promoCode == "SAVE10" && order.total > 500) {
          discountAmount = order.total * 0.10 * 0.75;
          messages.push("Promo SAVE10 applied in volume tier 2");
        } else if (promoCode == "SAVE20" && customer.tier == "premium") {
          discountAmount = order.total * 0.20 * 0.55;
          messages.push("Promo SAVE20 applied for premium");
        } else {
          discountAmount = 0;
        }
      }
      else if (order.total >= 2000) {
        messages.push("Order bracket: volume tier 3 for premium/Asia Pacific");
        shippingCost = (order.total * 0.02 + warehouseDistanceKm * 0.01) * 0.9 * 0.6;
        if (isHoliday) {
          shippingCost = shippingCost * 1.15;
          messages.push("Holiday surcharge applied for volume tier 3");
        }
        taxAmount = order.total * 0.08 * (1 - 0.05);
        if (promoCode == "SAVE10" && order.total > 2000) {
          discountAmount = order.total * 0.10 * 0.6;
          messages.push("Promo SAVE10 applied in volume tier 3");
        } else if (promoCode == "SAVE20" && customer.tier == "premium") {
          discountAmount = order.total * 0.20 * 0.55;
          messages.push("Promo SAVE20 applied for premium");
        } else {
          discountAmount = 0;
        }
      }
    }
    else if (customer.tier == "enterprise") {
      messages.push("Customer tier: enterprise in Asia Pacific");
      breakdown.tierDiscount = 0.12;
      if (order.total >= 0 && order.total < 100) {
        messages.push("Order bracket: flat rate for enterprise/Asia Pacific");
        shippingCost = (order.total * 0.02 + warehouseDistanceKm * 0.01) * 0.75 * 1.0;
        if (isHoliday) {
          shippingCost = shippingCost * 1.15;
          messages.push("Holiday surcharge applied for flat rate");
        }
        taxAmount = order.total * 0.08 * (1 - 0.12);
        if (promoCode == "SAVE10" && order.total > 0) {
          discountAmount = order.total * 0.10 * 1.0;
          messages.push("Promo SAVE10 applied in flat rate");
        } else if (promoCode == "SAVE20" && customer.tier == "enterprise") {
          discountAmount = order.total * 0.20 * 0.62;
          messages.push("Promo SAVE20 applied for enterprise");
        } else {
          discountAmount = 0;
        }
      }
      else if (order.total >= 100 && order.total < 500) {
        messages.push("Order bracket: volume tier 1 for enterprise/Asia Pacific");
        shippingCost = (order.total * 0.02 + warehouseDistanceKm * 0.01) * 0.75 * 0.9;
        if (isHoliday) {
          shippingCost = shippingCost * 1.15;
          messages.push("Holiday surcharge applied for volume tier 1");
        }
        taxAmount = order.total * 0.08 * (1 - 0.12);
        if (promoCode == "SAVE10" && order.total > 100) {
          discountAmount = order.total * 0.10 * 0.9;
          messages.push("Promo SAVE10 applied in volume tier 1");
        } else if (promoCode == "SAVE20" && customer.tier == "enterprise") {
          discountAmount = order.total * 0.20 * 0.62;
          messages.push("Promo SAVE20 applied for enterprise");
        } else {
          discountAmount = 0;
        }
      }
      else if (order.total >= 500 && order.total < 2000) {
        messages.push("Order bracket: volume tier 2 for enterprise/Asia Pacific");
        shippingCost = (order.total * 0.02 + warehouseDistanceKm * 0.01) * 0.75 * 0.75;
        if (isHoliday) {
          shippingCost = shippingCost * 1.15;
          messages.push("Holiday surcharge applied for volume tier 2");
        }
        taxAmount = order.total * 0.08 * (1 - 0.12);
        if (promoCode == "SAVE10" && order.total > 500) {
          discountAmount = order.total * 0.10 * 0.75;
          messages.push("Promo SAVE10 applied in volume tier 2");
        } else if (promoCode == "SAVE20" && customer.tier == "enterprise") {
          discountAmount = order.total * 0.20 * 0.62;
          messages.push("Promo SAVE20 applied for enterprise");
        } else {
          discountAmount = 0;
        }
      }
      else if (order.total >= 2000) {
        messages.push("Order bracket: volume tier 3 for enterprise/Asia Pacific");
        shippingCost = (order.total * 0.02 + warehouseDistanceKm * 0.01) * 0.75 * 0.6;
        if (isHoliday) {
          shippingCost = shippingCost * 1.15;
          messages.push("Holiday surcharge applied for volume tier 3");
        }
        taxAmount = order.total * 0.08 * (1 - 0.12);
        if (promoCode == "SAVE10" && order.total > 2000) {
          discountAmount = order.total * 0.10 * 0.6;
          messages.push("Promo SAVE10 applied in volume tier 3");
        } else if (promoCode == "SAVE20" && customer.tier == "enterprise") {
          discountAmount = order.total * 0.20 * 0.62;
          messages.push("Promo SAVE20 applied for enterprise");
        } else {
          discountAmount = 0;
        }
      }
    }
  }
  else {
    messages.push("Unknown region, applying default rates");
    breakdown.baseTaxRate = 0.15;
    shippingCost = order.total * 0.05;
    taxAmount = order.total * 0.15;
    discountAmount = 0;
  }

  finalTotal = order.total + shippingCost + taxAmount - discountAmount;
  breakdown.shippingCost = shippingCost;
  breakdown.taxAmount = taxAmount;
  breakdown.discountAmount = discountAmount;
  breakdown.finalTotal = finalTotal;
  breakdown.messages = messages;
  breakdown.currency = currency || "USD";
  console.log("calculateGlobalShippingTaxAndDiscountMatrix result: " + JSON.stringify(breakdown));
  return breakdown;
}

