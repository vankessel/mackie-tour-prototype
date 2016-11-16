var config = {
  "default": {
    //"hotSpotDebug": true,
    "firstScene": "tunnel",
    "sceneFadeDuration": 1000,
    "autoLoad": true,
    "autoRotate": -2,
    "hfov": 110
  },

  "scenes": {
    "tunnel": {
      "description": "Here's a tunnel with some graffiti in it.",
      "title": "Tunnel",
      "pitch": 0.13111575855216984,
      "yaw": 87.22867315010313,
      "type": "equirectangular",
      "panorama": "https://c1.staticflickr.com/3/2352/5723629890_e07f723148_o.jpg",
      "hotSpots": [
        {
          "pitch": -1.4193226566868384,
          "yaw": 87.04141933983021,
          "type": "scene",
          "text": "Forest Hut",
          "sceneId": "forest hut"
        },
        {
          "pitch": -3.472228516905798,
          "yaw": -92.526284308314,
          "type": "scene",
          "text": "Hotel Room",
          "sceneId": "hotel"
        },
        {
          "pitch": 1.8928534777946109,
          "yaw": 143.56306363770244,
          "type": "info",
          "text": "Graffiti"
        }
      ]
    },

    "forest hut": {
      "description": "This is a cool little hut in the forest.",
      "title": "Forest Hut",
      "pitch": -17.302010546386786,
      "yaw": 127.53100139096229,
      "type": "equirectangular",
      "panorama": "https://c1.staticflickr.com/3/2384/2429063115_8820ee1de1_o.jpg",
      "hotSpots": [
        {
          "pitch": -21.31425462433529,
          "yaw": 88.9220490397894,
          "type": "scene",
          "text": "Tunnel",
          "sceneId": "tunnel"
        },
        {
          "pitch": -11.381079556393985,
          "yaw": -24.4569247112199,
          "type": "info",
          "text": "The Hut"
        },
        {
          "pitch": -26.875312348445874,
          "yaw": -68.12062784346476,
          "type": "info",
          "text": "Someone's bag"
        }
      ]
    },

    "hotel": {
      "description": "This is a hotel room",
      "title": "Hotel Room",
      "pitch": -42.73142436755333,
      "yaw": 120.45236662825185,
      "type": "equirectangular",
      "panorama": "https://c2.staticflickr.com/6/5506/10689015716_c85659b72e_o.jpg",
      "hotSpots": [
        {
          "pitch": -9.02940160258268,
          "yaw": -0.18362856061966326,
          "type": "scene",
          "text": "Tunnel",
          "sceneId": "tunnel"
        }
      ]
    }
  }
}
