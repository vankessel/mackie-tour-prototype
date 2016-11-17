if ("config" in window) {
    var viewer = pannellum.viewer('panorama', config);

    document.getElementById("summary").innerText = config["scenes"][config["default"]["firstScene"]]["description"];

    viewer.on("scenechange", function(sceneId){
      console.log(sceneId);
      document.getElementById("summary").innerText = config["scenes"][sceneId]["description"];
    });
} else {
    console.log("CONFIG IS UNDEFINED");
    document.getElementById("summary").innerText = "CONFIG IS UNDEFINED";
}
