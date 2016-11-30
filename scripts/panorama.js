$(document).ready(function(){

  // Check if there is a config
  if ("config" in window) {

    var viewer = pannellum.viewer('panorama', config);

    document.getElementById("summary_title").innerText = config["scenes"][config["default"]["firstScene"]]["title"];
    document.getElementById("summary").innerText = config["scenes"][config["default"]["firstScene"]]["description"];

    viewer.on("scenechange", function(sceneId){
      console.log(sceneId);
      document.getElementById("summary_title").innerText = config["scenes"][sceneId]["title"];
      document.getElementById("summary").innerText = config["scenes"][sceneId]["description"];
    });

    // Change scene on button click
    $(".scene_button").click(function(){
      viewer.loadScene(this.id);
    });

  } else {

    console.log("CONFIG IS UNDEFINED");
    document.getElementById("summary").innerText = "CONFIG IS UNDEFINED";

  }
});
