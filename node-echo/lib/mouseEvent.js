function bindEvent(id, type){
    var btn = document.getElementById(id);
    var event = document.createEvent("MouseEvents");
    event.initMouseEvent(type, true, true, document.defaultView, 0, 0, 0, 0, 0,false, false, false, false, 0, null);
    btn.dispatchEvent(event);
}
module.exports.bindEvent = bindEvent;