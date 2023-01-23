  function Alumno(nombre, apellidos, edad) {
          this.nombre  =  nombre  ;
          this.apellidos  =  apellidos  ;
          this.edad  =  edad  ;
    }
    
 function eje1(){
	 var estudiante = new Alumno('Isidro', 'Camacho', 20);
	 document.write(typeof estudiante);
	 document.write(estudiante instanceof Alumno);
    document.write(estudiante.apellidos);
    document.write(estudiante.nombre);
    document.write(estudiante.edad);
    }
