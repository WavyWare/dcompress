# dcompress
Program that compresses or decompresses file.

### Introduction

It is basically proof of concept, because size of output file is bigger than input.

### Requirements
1. Node.js installed
2. Node package manager such as npm or pnpm
3. Git installed

### Installation and running
To install it you have to clone it from this repo, using this command:
```shell
git clone https://github.com/WavyWare/dcompress.git

cd dcompress

npm i
```
Once you have this downloaded you need to build it and run it with Node.js:
```shell
npm run build

npm run compress

npm run decompress
```
You can change values by editing `src/Compressor.ts` or `src/Decompressor.ts` or by editing input files in `in/` directory.

### Tech stack
1. Node.js
2. Typescript
   This project is developed using Object-Oriented Programming