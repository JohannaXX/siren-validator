const isValidSiren = (taxId) => {
  let taxNr = taxId
  if (taxId.length > 9) {
    return false;
  } else {
    taxNr = taxId.padStart(9, '0')
  }

  let bal = 0;
  let total = 0;
  for (let i = 8; i >= 0; i--) {
    const step = (taxNr.charCodeAt(i) - 48) * (bal + 1);
    total += step > 9 ? step - 9 : step;
    bal = 1 - bal;
  }

  return total % 10 === 0
}

console.log(isValidSiren(''))
