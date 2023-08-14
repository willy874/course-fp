
function checkType(value) {
  if (typeof value === 'number') {
    return value * value;
  }
  if (typeof value === 'string') {
    return value + value;
  }
  return 'default';
}

console.log(checkType(1));
console.log(checkType('1'));
console.log(checkType({}));


function cond(conditions) {
  return (value) => {
    return conditions.reduce((acc, [condition, callback]) => {
      if (acc !== undefined) return acc;
      return condition(acc) ? callback(acc) : undefined;
    }, value)
  }
}

const condFlow = cond([
  [(v) => typeof v === 'number', (v) => v * v],
  [(v) => typeof v === 'string', (v) => v + v],
  [() => true, () => 'default']
])

console.log(condFlow(1));
console.log(condFlow('1'));
console.log(condFlow({}));