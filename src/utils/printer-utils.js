import React from "react";

const PRINTER_DOMAIN = 'http://192.168.1.155';
const PORT = '3000';
const PRINTER_URL = `${PRINTER_DOMAIN}:${PORT}`;

export const PROGRAMS = {
  ALARM: 'bell',
  SUDOKU: 'sudoku',
  TEXT: 'text'
};

export async function print(program, dev=false, data = {}) {
  const result = await fetch(`${PRINTER_URL}/${program}${dev ? '?dev=true' : ''}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: data ? JSON.stringify(data) : undefined,
  });
  return result;
}