var viewer = pannellum.viewer('panorama', config);

document.getElementById("summary").innerText = config["scenes"][config["default"]["firstScene"]]["description"];

viewer.on("scenechange", function(sceneId){
  console.log(sceneId);
  document.getElementById("summary").innerText = config["scenes"][sceneId]["description"];
});
