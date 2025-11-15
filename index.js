"use strict";
const prompt = require("prompt-sync")();

function getValidNumberInput(promptMessage) {
  let input;
  let number;

  while (true) {
    input = prompt(promptMessage);
    number = Number(input);

    if (!isNaN(number)) {
      return number;
    }
    console.log("Input tidak valid, coba masukkan angka yang benar.");
  }
}

function getValidOperatorInput(promptMessage) {
  const validOperators = ["+", "-", "*", "/", "%", "**"];
  let input;

  while (true) {
    input = prompt(promptMessage);

    if (validOperators.includes(input)) {
      return input;
    }
    console.log("Operator tidak valid, coba masukkan operator yang benar.");
  }
}

// Fungsi operasi dasar
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b ;
}
function modulo(a, b) {
  return a % b ;
}
function exponent(a, b) {
  return a ** b;
}

// Fungsi kalkulasi utama
function kalkulator(no1, no2, operator) {
  let result;

  switch (operator) {
    case "+":
      result = add(no1, no2);
      break;
    case "-":
      result = subtract(no1, no2);
      break;
    case "*":
      result = multiply(no1, no2);
      break;
    case "/":
      result = divide(no1, no2);
      break;
    case "%":
      result = modulo(no1, no2);
      break;
    case "**":
      result = exponent(no1, no2);
      break;
    default:
      result = "Operator tidak dikenali.";
  }

  console.log(`Hasilnya adalah: ${no1} ${operator} ${no2} = ${result}`);
  return result;
}

// Analisis hasil
function analyzeResult(result) {
  const output = result ?? "Hasilnya undefined atau null, ada yang salah!";

  if (typeof output === "number") {
    console.log(`Hasil perhitungan: ${output}`);

    if (output > 0) {
      console.log("Angka ini adalah POSITIF.");
    } else if (output < 0) {
      console.log("Angka ini adalah NEGATIF.");
    } else {
      console.log("Angka ini adalah NOL.");
    }

    if (Number.isInteger(output)) {
      console.log("Ini adalah bilangan BULAT.");
      const parity = output % 2 === 0 ? "GENAP" : "GANJIL";
      console.log(`Bilangan ini adalah ${parity}.`);
    } else {
      console.log("Ini adalah bilangan DESIMAL.");
    }

    if (output > 0 && output % 2 === 0) {
      console.log("Angka ini POSITIF dan GENAP.");
    } else if (output < 0 || output === 0) {
      console.log("Angka ini NEGATIF atau NOL.");
    }

  } else if (typeof output === "string") {
    console.error(`Terjadi kesalahan: ${output}`);
  } else {
    console.warn(output);
  }
}

// Fungsi main
function main() {
  const no1 = getValidNumberInput("Masukkan angka pertama:");
  const operator = getValidOperatorInput("Masukkan operator (+, -, *, /, %, **):");
  const no2 = getValidNumberInput("Masukkan angka kedua:");

  const result = kalkulator(no1, no2, operator);
  console.log("==========================HASILnya============================");
  analyzeResult(result);
}

main();

