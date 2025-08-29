import { readFileSync, writeFileSync } from 'fs';
const readedData=readFileSync('./TextFiles/read.txt','utf-8')
console.log(readedData);
const writedata=`WE are reading data from read file and write thatv data in write file which have empty data ${readedData}`
writeFileSync('./Textfiles/write.txt',writedata)
console.log("Data written successfull")