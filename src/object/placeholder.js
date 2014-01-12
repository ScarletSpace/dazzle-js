/**
 * Created by staneslas on 1/10/14.
 */

dazzle.object["placeholder"] = function(param) {
    var object = {};
    object.name = param.name;
    object.x = 0;
    object.y = 0;
    object.draw = function(context) {
        context.rect(this.x, this.y, 100, 100);
    }
    return object;
}