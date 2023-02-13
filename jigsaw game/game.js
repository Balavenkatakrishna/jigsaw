$(document).ready(function(){
  var rows=4,columns=4;
  var pieces=" ";
  for (var i=0,top=0;i<rows;i++,top-=100){
    for (var j=0,left=0;j<columns;j++,left-=100){
      pieces +="<div style='background-position:"+left +"px " +top + "px;' class='piece'></div>";
    }
  }
  // console.log(pieces);
  $("#puzzleContainer").html(pieces);
  $("#btnStart").click(function(){
    var pieces=$("puzzleContainer div");
    pieces.each(function(){
      var leftPosition=Math.floor(Math.random()*290)+"px";
      var topPosition=Math.floor(Math.random()*290) +"px";
      $(this).addClass("draggablePiece")
      .css({
        position:"absolute",
        left:leftPosition,
        top:topPosition
      })
      $("#pieceContainer").append($(this));
      // $(this).show()
    });
    var emptyString=""
    for (var i=0;i<rows;i++){
      for (var j=0;j<columns;j++){
        emptyString +="<div style='background-image:none;'class='piece droppableSpace'></div>";
      }
    }
    $("#puzzleContainer").html(emptyString);
    $(this).hide();
    $("#btnReset").show()
    function implementLogic(){
      $(".draggablePiece").draggable();
      $(".draggableSpace").droppable({
        drop:function(event,ui){
          var draggableElement=ui.draggable;
          var droppedOn=$(this);
          droppedOn.addClass("piecePresent");
          $(draggabaleElement)
          .addClass("droppedPiece")
          .css({
            top:0,
            left:0,
            position:"relative"
          }).appendTo(droppedOn);
        }
      });

    }
  });

  });
