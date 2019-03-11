import {validateLinks} from './validate.js';

export const caculateStats = (route) => {
  const validatedLinks = validateLinks(route);
  console.log(validatedLinks('D:\\PROYECTOS-solange\\Markdown-Links\\LIM008-fe-md-links\\test\\pruebastest.Readme.md'));

  new Promise((res, rej) => { 
    validatedLinks.then((answer) => {
      const total = answer.length;
      const linkUnique = [...new Set(answer.map(answer => answer.href))].length;
      res(`Total : ${total} Unique: ${linkUnique}`);
    }).catch(error => rej(error));
  });
};


export const statLinksBroken = (route) => {
  const validatedLinks = validateLinks(route);
  return new Promise((res, rej) => {
    validatedLinks.then((answer) => {
      const linksBroken = answer.filter(links => links.message === 'Fail');
      res(`Broken: ${filterBroken.length}`);
    }).catch(error => res(error));
  });
};

// const statsLinks = (array) => {
//   let arrLinks = [];
//   array.forEach(element => {
//     arrLinks.push(element.href);
//   });
//   console.log('Total: ', arrLinks.length);
//   // console.log('Broken: ',arrLinks.unique);
//   //  Array.from(new Set(arrLinks))
//   console.log('Unique: ', [...new Set(arrLinks)].length);
// };
// verifyLink(getMDContent(pathAbsMD));
// statsLinks(getMDContent(pathAbsMD));
