import {mdLinks} from '../src/index.js';
const ouput = [ { href: 'https://github.com/soumak77llll/firebase-mock',
  text: 'firebase-mock',
  file: `${process.cwd()}\\test\\pruebastest\\Fail.md` },
{ href: 'https://www.google.com',
  text: '1234567890-1234567890-1234567890-1234567890-123456',
  file: `${process.cwd()}\\test\\pruebastest\\Ok.md` },
{ href: 'https://www.google.com',
  text: '1234567890-1234567890-1234567890-1234567890-123456',
  file: `${process.cwd()}\\test\\pruebastest\\Ok.md` },
{ href: 'https://www.google.com',
  text: '1234567890-1234567890-1234567890-1234567890-123456',
  file: `${process.cwd()}\\test\\pruebastest\\Ok.md` },
{ href: 'http://bxwz.09games.com/significadodeloscolores',
  text: 'sigcolor',
  file: `${process.cwd()}\\test\\pruebastest\\Ok.md` },
{ href: 'mailto:front@end.la',
  text: 'front@end.la',
  file: `${process.cwd()}\\test\\pruebastest\\Ok.md` },
{ href: 'https://github.com/mikkopaderes/mock-cloud-firestore',
  text: 'mock-cloud-firestore',
  file: `${process.cwd()}\\test\\pruebastest\\Ok.md` },
{ href: 'https://www.google.com',
  text: '1234567890-1234567890-1234567890-1234567890-123456',
  file: `${process.cwd()}\\test\\pruebastest\\Readme.md` },
{ href: 'https://www.google.com',
  text: '1234567890-1234567890-1234567890-1234567890-123456',
  file: `${process.cwd()}\\test\\pruebastest\\Readme.md` },
{ href: 'https://www.google.com',
  text: '1234567890-1234567890-1234567890-1234567890-123456',
  file: `${process.cwd()}\\test\\pruebastest\\Readme.md` },
{ href: 'http://bxwz.09games.com/significadodeloscolores',
  text: 'sigcolor',
  file: `${process.cwd()}\\test\\pruebastest\\Readme.md` },
{ href: 'mailto:front@end.la',
  text: 'front@end.la',
  file: `${process.cwd()}\\test\\pruebastest\\Readme.md` },
{ href: 'https://github.com/soumak77llll/firebase-mock',
  text: 'firebase-mock',
  file: `${process.cwd()}\\test\\pruebastest\\Readme.md` },
{ href: 'https://github.com/mikkopaderes/mock-cloud-firestore',
  text: 'mock-cloud-firestore',
  file: `${process.cwd()}\\test\\pruebastest\\Readme.md` } ];

const ouput1 = [ { href: 'https://github.com/soumak77llll/firebase-mock',
  text: 'firebase-mock',
  file: 'D:\\PROYECTOS-solange\\Markdown-Links\\LIM008-fe-md-links\\test\\pruebastest\\Fail.md',
  resultstatus: 404,
  value: 'Fail' },
{ href: 'https://www.google.com',
  text: '1234567890-1234567890-1234567890-1234567890-123456',
  file: 'D:\\PROYECTOS-solange\\Markdown-Links\\LIM008-fe-md-links\\test\\pruebastest\\Ok.md',
  resultstatus: 200,
  value: 'OK' },
{ href: 'https://www.google.com',
  text: '1234567890-1234567890-1234567890-1234567890-123456',
  file: 'D:\\PROYECTOS-solange\\Markdown-Links\\LIM008-fe-md-links\\test\\pruebastest\\Ok.md',
  resultstatus: 200,
  value: 'OK' },
{ href: 'https://www.google.com',
  text: '1234567890-1234567890-1234567890-1234567890-123456',
  file: 'D:\\PROYECTOS-solange\\Markdown-Links\\LIM008-fe-md-links\\test\\pruebastest\\Ok.md',
  resultstatus: 200,
  value: 'OK' },
{ href: 'http://bxwz.09games.com/significadodeloscolores',
  text: 'sigcolor',
  file: 'D:\\PROYECTOS-solange\\Markdown-Links\\LIM008-fe-md-links\\test\\pruebastest\\Ok.md',
  resultstatus: 200,
  value: 'OK' },
{ href: 'mailto:front@end.la',
  text: 'front@end.la',
  file: 'D:\\PROYECTOS-solange\\Markdown-Links\\LIM008-fe-md-links\\test\\pruebastest\\Ok.md',
  status: '',
  value: 'No Found' },
{ href: 'https://github.com/mikkopaderes/mock-cloud-firestore',
  text: 'mock-cloud-firestore',
  file: 'D:\\PROYECTOS-solange\\Markdown-Links\\LIM008-fe-md-links\\test\\pruebastest\\Ok.md',
  resultstatus: 200,
  value: 'OK' },
{ href: 'https://www.google.com',
  text: '1234567890-1234567890-1234567890-1234567890-123456',
  file: 'D:\\PROYECTOS-solange\\Markdown-Links\\LIM008-fe-md-links\\test\\pruebastest\\Readme.md',
  resultstatus: 200,
  value: 'OK' },
{ href: 'https://www.google.com',
  text: '1234567890-1234567890-1234567890-1234567890-123456',
  file: 'D:\\PROYECTOS-solange\\Markdown-Links\\LIM008-fe-md-links\\test\\pruebastest\\Readme.md',
  resultstatus: 200,
  value: 'OK' },
{ href: 'https://www.google.com',
  text: '1234567890-1234567890-1234567890-1234567890-123456',
  file: 'D:\\PROYECTOS-solange\\Markdown-Links\\LIM008-fe-md-links\\test\\pruebastest\\Readme.md',
  resultstatus: 200,
  value: 'OK' },
{ href: 'http://bxwz.09games.com/significadodeloscolores',
  text: 'sigcolor',
  file: 'D:\\PROYECTOS-solange\\Markdown-Links\\LIM008-fe-md-links\\test\\pruebastest\\Readme.md',
  resultstatus: 200,
  value: 'OK' },
{ href: 'mailto:front@end.la',
  text: 'front@end.la',
  file: 'D:\\PROYECTOS-solange\\Markdown-Links\\LIM008-fe-md-links\\test\\pruebastest\\Readme.md',
  status: '',
  value: 'No Found' },
{ href: 'https://github.com/soumak77llll/firebase-mock',
  text: 'firebase-mock',
  file: 'D:\\PROYECTOS-solange\\Markdown-Links\\LIM008-fe-md-links\\test\\pruebastest\\Readme.md',
  resultstatus: 404,
  value: 'Fail' },
{ href: 'https://github.com/mikkopaderes/mock-cloud-firestore',
  text: 'mock-cloud-firestore',
  file: 'D:\\PROYECTOS-solange\\Markdown-Links\\LIM008-fe-md-links\\test\\pruebastest\\Readme.md',
  resultstatus: 200,
  value: 'OK' } ];

test('al ingresar una ruta deberia retornar una promesa que resuelva a un array de objetos, donde cada objeto representa un link y contiene las siguientes propiedades:href,text,file', (done) => {
  mdLinks(`${process.cwd()}\\test\\pruebastest`).then((respuesta) => {
    expect(respuesta).toEqual(ouput);
    done();
  });
});

test('retorna una promesa que resuelva a un array de objetos que contengan propiedades ya la opcion de validate', (done) => {
  mdLinks(`${process.cwd()}\\test\\pruebastest`, {validate: true}).then((respuesta) => {
    expect(respuesta).toEqual(ouput1);
    done();
  });
});
