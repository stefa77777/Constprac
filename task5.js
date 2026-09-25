export class Jugador {
  constructor(nombre,nivel,experiencia) {
    this.nombre = nombre;
    this.nivel = nivel;
    this.experiencia = 200
  }
  informacion(){
    return `${this.nivel} "subio de Nivel a" ${this.experiencia}`;
    console.log(informacion);
  }
  subirNivel(){
    this.nivel += 1;
  }
}
