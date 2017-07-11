$(document).ready(function(){
     $('.slider').slider({full_width: true, indicators: false, interval: 3000});
     $('.collapsible').collapsible();

    $(".button-collapse").sideNav({
      menuWidth: 300, // Default is 240
     edge: 'left', // Choose the horizontal origin
     closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
     draggable: true // Choose whether you can drag to open on touch screens
    });
    $('.modal').modal();


   });
