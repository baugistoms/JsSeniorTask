function tdl1() {
    return {
        curry: function(t, d, l) {
            return t + d + l;
        },
        curry2: function T(t) {
            let D = function D(d){
                let L = function L(l) {
                    return t + d + l;
                }
                return L;
            }
            return D;
        },
        curry3: function TD(t, d) {
            let L = function L(l){
                return t + d + l;
            }
            return L;
        }
    }
}
function devlab1() {
    return {
        curry1: function D(d) {
            let E = function E(e){
                let V = function V(v) {
                    let L = function L(l){
                        let A = function A(a) {
                            let B = function B(b) {
                                return d + e + v + l + a + b;
                            }
                            return B;
                        }
                        return A;
                    }
                    return L;
                }
                return V;
            }
            return E;
        },
        curry: function DEV(d, e, v) {
            let LAB = function LAB(l, a, b){
                return d + e + v + l + a + b;
            }
            return LAB;
        },
    }
}
function assert (x, y) {
    if (x !== y) {
        throw new Error();
    }
}

let tdl = tdl1();
let devlab = devlab1();
assert(tdl.curry('T', 'D', 'L'), 'TDL');
assert(tdl.curry2('T')('D')('L'), 'TDL');
assert(tdl.curry3('T', 'D')('L'), 'TDL');
assert(devlab.curry1('D')('E')('V')('L')('A')('B'), 'DEVLAB');
assert(devlab.curry('D', 'E', 'V')('L', 'A', 'B'), 'DEVLAB');