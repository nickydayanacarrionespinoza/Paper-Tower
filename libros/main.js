
function cargar(opcion){
    var nombre = document.getElementById("nombre");
    var descripcion = document.getElementById("descripcion");
    var fotoPrincipal = document.getElementById("fotoPrincipal");
    var circulo = document.getElementById("circulo");
    var ingredientes = document.getElementById("ingredientes")

    if(opcion==1){
        nombre.innerHTML = "Atracciòn Mortal"
        descripcion.innerHTML = "Max Wilson ingresó a la universidad Varsity y su llegada despertó inmediatamente la intriga de las jóvenes estudiantes. La belleza masculina que posee provocó que las chicas a su alrededor se derritieran con tan sólo verlo. El problema era que tenía una actitud fría y cortante hacia los demás";
        fotoPrincipal.src = "./images/atraccion.webp";
        circulo.style.backgroundColor = " #bf27ca";
        ingredientes.innerHTML = "";
        for(x=0; x < ingredientes.length; x++ ){
            const li = document.createElement("li");
            const i = document.createElement("i");
            i.classList = "fa-solid fa-check";
            li.appendChild(i);
            const txt = dlivocument.createElement("txt");
            txt.innerHTML = ingredientes_opcion1[x];
            li.appendChild(txt);
            ingredientes.appendChild(li);
        }
    }
    if(opcion==2){
        nombre.innerHTML = "Si Las Personas Fueran Constelaciones"
        descripcion.innerHTML = "La vida de Aidan marchaba de maravilla; sacaba las mejores notas, salía con la chica que le gustaba, su madre era la mejor y sus abuelos lo amaban. Cuando descubre que toda su vida se construyó sobre una mentira, su mundo se desploma como un castillo de naipes.";
        fotoPrincipal.src = "./images/constelaciones.png";
        circulo.style.backgroundColor = "#a181bb";
        ingredientes.innerHTML = "";
        for(x=0; x < ingredientes.length; x++ ){
            const li = document.createElement("li");
            const i = document.createElement("i");
            i.classList = "fa-solid fa-check";
            li.appendChild(i);
            const txt = document.createElement("txt");
            txt.innerHTML = ingredientes_opcion2[x];
            li.appendChild(txt);
            ingredientes.appendChild(li);
        }
    }
    if(opcion==3){
        nombre.innerHTML = "Sigue Mi Voz"
        descripcion.innerHTML = "Hay amores que te dan la mano y te acompañan en los momentos más difíciles. Todos conocemos el amor pasional que te nubla la razón, el amor a primera vista que te vacía el estómago y el amor platónico que te llena el corazón de fantasía y admiración. Pero ¿es posible enamorarse de alguien sin tan siquiera conocerlo? .";
        fotoPrincipal.src = "./images/voz.png";
        circulo.style.backgroundColor = "#b44c9c";
        ingredientes.innerHTML = "";
        for(x=0; x < ingredientes.length; x++ ){
            const li = document.createElement("li");
            const i = document.createElement("i");
            i.classList = "fa-solid fa-check";
            li.appendChild(i);
            const txt = document.createElement("txt");
            txt.innerHTML = ingredientes_opcion3[x];
            li.appendChild(txt);
            ingredientes.appendChild(li);
        }
   
    }
    
}


function cargado(opcion){
    var nombru = document.getElementById("nombru");
    var descripcionu = document.getElementById("descripcionu");
    var fotoPrincipalu = document.getElementById("fotoPrincipalu");
    var circulu = document.getElementById("circulu");
    var ingredientesu = document.getElementById("ingredientesu")

    if(opcion==1){
        nombru.innerHTML = "Viaje al Centro de la Tierra"
        descripcionu.innerHTML = "Un jeroglífico medieval casi indescifrable puede permanecer luengos siglos durmiendo entre las hojas de un libro viejo. Pero, cuando por azar caiga en manos del audaz profesor Otto Lidenbrock de Hamburgo, desencadenará el viaje más espectacular de todo el siglo XIX. El profesor, su sobrino Axel y el impasible Hans verán maravillas en el interior del globo, iluminados por una inmóvil luz incomprensible. ";
        fotoPrincipalu.src = "./images/tierra.webp";
        circulu.style.backgroundColor = "#93e2ab";
        ingredientesu.innerHTML = "";
        for(x=0; x < ingredientesu.length; x++ ){
            const li = document.createElement("li");
            const i = document.createElement("i");
            i.classList = "fa-solid fa-check";
            li.appendChild(i);
            const txt = document.createElement("txt");
            txt.innerHTML = ingredientesu_opcion1[x];
            li.appendChild(txt);
            ingredientesu.appendChild(li);
        }
    }
    if(opcion==2){
        nombru.innerHTML = "La Maquina del Tiempo."
        descripcionu.innerHTML = "Un científico joven inventa una máquina que, según dice, puede viajar en el tiempo. Sin embargo, sus amigos se ríen de la idea. Entonces, el Viajero del Tiempo utiliza su máquina y viaja mil años en el futuro. Conoce a una raza de humanos amables, los Eloi. Pero el Viajero del Tiempo se ve envuelto en una lucha por su vida contra las malvadas criaturas subterráneas conocidas como Morlocks. Peor aún, su Máquina del Tiempo, su única posibilidad de escapar, está atrapada dentro de las cavernas de los Morlocks.";
        fotoPrincipalu.src = "./images/maquina.jpg";
        circulu.style.backgroundColor = "#2a5a56ee";
        ingredientesu.innerHTML = "";
        for(x=0; x < ingredientesu.length; x++ ){
            const li = document.createElement("li");
            const i = document.createElement("i");
            i.classList = "fa-solid fa-check";
            li.appendChild(i);
            const txt = document.createElement("txt");
            txt.innerHTML = ingredientesu_opcion2[x];
            li.appendChild(txt);
            ingredientesu.appendChild(li);
        }
    }
    if(opcion==3){
        nombru.innerHTML = "Lo Infinito y Lo Divino"
        descripcionu.innerHTML = "Explora una historia que se extiende por los milenios y profundiza en un par de personajes necrones fascinantes, en la relación que existe entre ellos y sus planes para la galaxia. Antes de que el ser llamado el Emperador se desvelara, antes del ascenso de los aeldari, antes de que los necrontyr cambiaran su carne por metal inmortal, el mundo nació de la violencia. Incluso cuando habitaban sus cuerpos de carne, Trazyn el Infinito, y Orikan el Adivino eran polos opuestos. ";
        fotoPrincipalu.src = "./images/infinito.jpg";
        circulu.style.backgroundColor = "#20684a";
        ingredientesu.innerHTML = "";
        for(x=0; x < ingredientesu.length; x++ ){
            const li = document.createElement("li");
            const i = document.createElement("i");
            i.classList = "fa-solid fa-check";
            li.appendChild(i);
            const txt = document.createElement("txt");
            txt.innerHTML = ingredientesu_opcion3[x];
            li.appendChild(txt);
            ingredientesu.appendChild(li);
        }
    }
    
}


//otro
function cargando(opcion){
    var nombra = document.getElementById("nombra");
    var descripciona = document.getElementById("descripciona");
    var fotoPrincipala = document.getElementById("fotoPrincipala");
    var circula = document.getElementById("circula");
    var ingredientesa = document.getElementById("ingredientesa")

    if(opcion==1){
        nombra.innerHTML = "Maya Erikson y El Misterio del Laberinto"
        descripciona.innerHTML = "En aquella selva, repleta de animales exóticos, Maya esperaba pasar unos días divertidos mientras su padre trabajaba.Sin embargo, no tardó en sospechar que algo no iba bien.  El prestigioso biólogo al que todos admiraban escondía un oscuro secreto, pero...¿quién iba a dudar de él?Por suerte, conoce a Oliver, su cómplice en esta aventura contrarreloj en la que descubrirán que aquella selva esconde misterios que nunca habrían imaginado.";
        fotoPrincipala.src = "./images/maya.jpg";
        circula.style.backgroundColor = "#fcaa4c";
        ingredientesa.innerHTML = "";
        for(x=0; x < ingredientesa.length; x++ ){
            const li = document.createElement("li");
            const i = document.createElement("i");
            i.classList = "fa-solid fa-check";
            li.appendChild(i);
            const txt = document.createElement("txt");
            txt.innerHTML = ingredientesa_opcion1[x];
            li.appendChild(txt);
            ingredientesa.appendChild(li);
        }
    }
    if(opcion==2){
        nombra.innerHTML = "Anna Kadabra"
        descripciona.innerHTML = "Anna está furiosa porque tiene que abandonar su vieja casa, su escuela y su ciudad. Se muda con sus padres a Moonville, un anticuado pueblo en medio del bosque. Para colmo, el lugar está lleno de leyendas y secretos. ¿Quién es, por ejemplo, ese gato misterioso que la sigue a todas partes? .";
        fotoPrincipala.src = "./images/anna.jpg";
        circula.style.backgroundColor = "#f8c08b";
        ingredientesa.innerHTML = "";
        for(x=0; x < ingredientesa.length; x++ ){
            const li = document.createElement("li");
            const i = document.createElement("i");
            i.classList = "fa-solid fa-check";
            li.appendChild(i);
            const txt = document.createElement("txt");
            txt.innerHTML = ingredientesa_opcion2[x];
            li.appendChild(txt);
            ingredientesa.appendChild(li);
        }
    }
    if(opcion==3){
        nombra.innerHTML = "Matilda"
        descripciona.innerHTML = "Matilda es una niña con poderes especiales que ayuda a su maestra a recuperar todo lo que su villana tía Trunchbull le robó. En este resumen del libro Matilda, de Roald Dahl, conocerás las aventuras de esta pequeña, llenas de magia, amor por el conocimiento y consolidación de valores humanos. Sigue leyendo esta dulce historia infantil.";
        fotoPrincipala.src = "./images/matilda.jpg";
        circula.style.backgroundColor = "#f8c63c";
        ingredientesa.innerHTML = "";
        for(x=0; x < ingredientesa.length; x++ ){
            const li = document.createElement("li");
            const i = document.createElement("i");
            i.classList = "fa-solid fa-check";
            li.appendChild(i);
            const txt = document.createElement("txt");
            txt.innerHTML = ingredientesa_opcion3[x];
            li.appendChild(txt);
            ingredientesa.appendChild(li);
        }
    }
    
    
}
