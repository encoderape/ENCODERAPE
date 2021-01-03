export class Nosotros {
  foto: string;
  nombre: string;
  apellido1: string;
  apellido2: string;
  telefono: number;
  correo: string;
  linkedin: string;
  github: string;
  expliacionPersonal: string;
  trabajos: string[];
  estudios: string[];
  cursos: string[];
  tecnologias: string[];
  idiomas: string[];
  habilidades: string;

  constructor(
    foto,
    nombre,
    apellido1,
    apellido2,
    telefono,
    correo,
    linkedin,
    github,
    explicacionPersonal,
    trabajos,
    estudios,
    cursos,
    tecnologias,
    idiomas,
    habilidades
  ) {
    this.foto = foto;
    this.nombre = nombre;
    this.apellido1 = apellido1;
    this.apellido2 = apellido2;
    this.telefono = telefono;
    this.correo = correo;
    this.linkedin = linkedin;
    this.github = github;
    this.expliacionPersonal = explicacionPersonal;
    this.trabajos = trabajos;
    this.estudios = estudios;
    this.cursos = cursos;
    this.tecnologias = tecnologias;
    this.idiomas = idiomas;
    this.habilidades = habilidades;
  }
}
