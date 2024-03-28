import { sayHello } from "./util.ts";
import { path, yup } from "./deps.ts";
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

async function runFetch(apiUrl) {
  if(!apiUrl) {
    return {
        message: "no apiurl is provided"
    }
  }
  
  let resp = await fetch(apiUrl);
  let validatedData = null;

  if(apiUrl.includes("api.sampleapis.com")) {
    const resData = await resp.json();
    const bearItem = yup.object({
      price: yup.string().required(),
      name: yup.string().required(),
      rating: yup.object({
        average: yup.number(),
        review: yup.number()
      }),
      image: yup.string().required(),
      id: yup.number().required()
    });

    const bearsScheme = yup.array(bearItem);
    validatedData = await bearsScheme.validate(resData.slice(0, 5))
  }

  return validatedData;
}

export default runFetch;
