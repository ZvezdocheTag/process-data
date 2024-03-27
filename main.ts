import { sayHello } from "./util.ts";
import { path } from "./deps.ts";
// import os from "node:os";

// console.log("Current architecture is:", os.arch());
// console.log("Home directory is:", os.homedir());

sayHello("World");

import * as util from "./util.ts";
util.sayHello("World");

import { VERSION } from "https://deno.land/std/version.ts";
console.log(VERSION);

interface Person {
  name: string;
  age: number;
}

function greet(person: Person) {
  return "Hello, " + person.name + "!";
}

async function runFetch(apiUrl: string = "https://api.sampleapis.com/beers/ale") {
  let resp = await fetch(apiUrl);

  console.log(resp.status); // 200
  console.log(resp.headers.get("Content-Type")); // "text/html"
  const addapp = await resp.json();
  return addapp;
}

export default runFetch;
