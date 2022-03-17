/**
 * @param {string} s
 * @return {number}
 */
export function calculate(s: string): number {
  s = s.replace(/\s/g, '');
  let l1 = 0;
  let o1 = 1;
  let l2 = 1;
  let o2 = 1;
  const stack: number[] = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (!Number.isNaN(+char)) {
      let num = +char;

      while (i + 1 < s.length && !Number.isNaN(+s[i + 1])) {
        num = num * 10 + +s[++i];
      }

      l2 = o2 === 1 ? l2 * num : l2 / num;
    } else if (char === '(') {
      // First preserve current calculation status
      stack.push(l1);
      stack.push(o1);
      stack.push(l2);
      stack.push(o2);

      // Reset them for the next calculation
      l1 = 0;
      o1 = 1;
      l2 = 1;
      o2 = 1;
    } else if (char === ')') {
      // First preserve the result of current calculation
      let num = l1 + o1 * l2;

      // Then restore previous calculation status
      o2 = stack.pop();
      l2 = stack.pop();
      o1 = stack.pop();
      l1 = stack.pop();
      // Previous calculation status is now in effect
      l2 = o2 === 1 ? l2 * num : l2 / num;
    } else if (char === '*' || char === '/') {
      o2 = char === '*' ? 1 : -1;
    } else if (char === '+' || char === '-') {
      l1 = l1 + o1 * l2;
      o1 = char === '+' ? 1 : -1;
      l2 = 1;
      o2 = 1;
    }
  }

  return l1 + o1 * l2;
}

// /**
//  * @param {string} s
//  * @return {number}
//  */
// export function calculate(s: string): number {
//   let result = 0;
//   if (s.length === 0) return result;

//   let stack = [];
//   let currentNum = 0;
//   let operation = 1;

//   for (let i = 0; i < s.length; i++) {
//     let currentChar = s[i];

//     if (currentChar === ' ') continue;

//     if (!isNaN(+currentChar)) {
//       currentNum = currentNum * 10 + Number(currentChar);
//     } else if (currentChar === '+') {
//       result += operation * currentNum;
//       operation = 1;
//       currentNum = 0;
//     } else if (currentChar === '-') {
//       result += operation * currentNum;
//       operation = -1;
//       currentNum = 0;
//     } else if (currentChar === '(') {
//       stack.push(result);
//       stack.push(operation);
//       operation = 1;
//       result = 0;
//     } else if (currentChar === ')') {
//       result += operation * currentNum;
//       result *= stack.pop();
//       result += stack.pop();
//       currentNum = 0;
//     }
//   }

//   return result + operation * currentNum;
// }

// var calculate = function(s) {
// 	const calculator = s.match(/(\d+)|[+-/*]/g);
// 	const addition = [+calculator.shift()];
// 	const operator = {
// 		'+': (num) => addition.push(num),
// 		'-': (num) => addition.push(-num),
// 		'*': (num) => addition.push(addition.pop() * num),
// 		'/': (num) => addition.push(addition.pop() / num | 0),
// 	};

// 	calculator.forEach((str, index) => operator[str]?.(+calculator[index + 1]));
// 	return addition.reduce((result, num) => result + num);
// };
