#!/usr/bin/env node
const mdLinks = require('./index.js');
import {statsLinks, statLinksBroken} from './models/stats.js';

const path = process.argv[2];
const options = process.argv[3];
const status = process.argv[4];

if (options === '--validate' && status === '--stats' || status === '--stats' && options === '--validate' || options === '--s' && status === '--v' || options === '--v' && status === '--s') {
  mdLinks(path, {validate: true}) 
    .then(res => {
      statsLinks(res).then(res => console.log(res));
      statLinksBroken(res).then(res => console.log(res));
    });
} else if (options === '--validate' || options === '--v') {
  mdLinks(path, {validate: true})
    .then(res => res.forEach(objLinks => 
      console.log(`file: ${objLinks.file}, \nhref : ${objLinks.href}, \nvalue : ${objLinks.value}, \nstatus: ${objLinks.status}, \ntext: ${objLinks.text}`)
    ));
} else if (options === '--stats' || options === '--s') {
  mdLinks(path, {validate: false})
    .then(res => { 
      statsLinks(res)
        .then(response => console.log(response));
    });
} else {
  mdLinks(path, {validate: false})
    .then(res => res.forEach((objLinks) => 
      console.log(`file: ${objLinks.file} \nLink: ${objLinks.href} \ntext: ${objLinks.text}`)))
}

