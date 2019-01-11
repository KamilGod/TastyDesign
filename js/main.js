
$("#contactOnglet").click(function () {
    console.log("hello");
    $(".contact, .navAndSocial,header,.scrollIcon").toggleClass("active");
        
});
$(".close").click(function () {
    console.log("hello");
    $(".contact, .navAndSocial,header,.scrollIcon").toggleClass("active");
        
});


// function myMap() {
//     var mapProp= {
//       center:new google.maps.LatLng(51.508742,-0.120850),
//       zoom:5,
//     };
//     var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
//     }
//au clic sur les types de projets (web, print, drawing) il ne faut afficher QUE les projets qui appartiennent à cette catégorie (checker le data-type)
//il faut évidemment aussi mettre en évidence (class active) le lien sélectionné


let navPills = document.querySelectorAll('ul.nav-pills li');
let projects = document.querySelectorAll('.project');
//console.log(projects);
//console.log(projects[0].dataset.type);

navPills.forEach((navPill) => {
  navPill.addEventListener('click', clickedNavPill);
  
});

function clickedNavPill(e){
  // Selection Button
  let navPillTarget = e.currentTarget;
  //console.log(navPillTarget);
  let active = document.querySelector('.active');
  e.preventDefault();
  
  //console.log(active);
  if(active){
  	active.classList.remove('active')
  }
  navPillTarget.classList.toggle('active');
  //navPill.classList.remove('active');
  // SELECTION PROJET
  let dataTypeTarget = navPillTarget.querySelector('a').dataset.type; 
  //console.log(dataTypeTarget.dataset.type);
  
  projects.forEach((project) => {
  	if (project.dataset.type == dataTypeTarget || dataTypeTarget == 'all'){
    	//console.log(project.dataset.type);
      project.classList.remove('hidden');
    } else {
    	project.classList.add('hidden');
  	}
  });
}





// Pour tous les liens commençant par #.
$("a[href^='#']").click(function (e) {
  var 
    yPos,
    yInitPos,
    target = ($($(this).attr("href") + ":first"));
    
  // On annule le comportement initial au cas ou la base soit différente de la page courante.
  e.preventDefault(); 
  
  yInitPos = $(window).scrollTop();
  
  // On ajoute le hash dans l'url.
  window.location.hash = $(this).attr("href");
  
  
  // Comme il est possible que l'ajout du hash perturbe le défilement, on va forcer le scrollTop à son endroit inital.
  $(window).scrollTop(yInitPos);
  
  // On cible manuellement l'ancre pour en extraire sa position.
  // Si c'est un ID on l'obtient.
  target = ($($(this).attr("href") + ":first"));

  // Sinon on cherche l'ancre dans le name d'un a.
  if (target.length == 0) {
    target = ($("a[name=" + $(this).attr("href").replace(/#/gi,"") + "]:first"))
  }
  
  // Si on a trouvé un name ou un id, on défile.
  if (target.length == 1) {
    yPos = target.offset().top; // Position de l'ancre.
  
    // On anime le défilement jusqu'à l'ancre.
    $('html,body').animate({ scrollTop: yPos - 40 }, 1000); // On décale de 40 pixels l'affichage pour ne pas coller le bord haut de l'affichage du navigateur et on défile en 1 seconde jusqu'à l'ancre.
  }
});
