/**
 * Created by staneslas on 1/10/14.
 */

//dazzle.animationElements

dazzle.animation = function (canvas, animationConfig) {
    if (canvas == null) {
        throw new Error("Unspecified canvas")
    }
    if (animationConfig == null || animationConfig.type != "dazzle-animation") {
        throw new Error("Inappropriate json object provided for animation");
    }
    try {

        var context = canvas.getContext("2d");

        var objectsConfigs = animationConfig.objects;
        var generalConfig = animationConfig.config;
        var canvasConfig = animationConfig.canvas;

        var script = animationConfig.script;
        var objects = [];

        //Config canvas
        canvas.width = canvasConfig.width;
        canvas.height = canvasConfig.height;

        //Parse objects
        for (var i = 0; i < objectsConfigs.length; i++) {
            var newObject = dazzle.object[objectsConfigs[i].type](objectsConfigs[i]);
            objects[newObject.name] = newObject;
        }

        //Animation
        var frameCounter = 0;
        var stop = function() {
            window.clearInterval(interval);
        };
        var animation = function() {
            console.log(objects);
            frameCounter++;
            if (frameCounter >= script.length) {
                if (generalConfig.loop) {
                    frameCounter = 0;
                } else {
                    stop();
                }
            }
        };
        var interval = window.setInterval(animation, 1000 / generalConfig.framerate);

    } catch(err) {
        throw new Error("Animation error");
    }
}

dazzle.action["add"] = function(param) {
    //
};

dazzle.action["move"] = function(param) {
    //
}