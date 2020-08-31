import Vue from "vue";
import DialogTpl from "./dialog.vue";
const DialogConstructor = Vue.extend(DialogTpl);

let nId = 1;

const Dialog = options => {
  let id = "dialog-" + nId++;
  options = options || {};
  if (typeof options === "string") {
    options = {
      message: options
    };
  }

  const DialogInstance = new DialogConstructor({
    data: options
  });
  DialogInstance.id = id;
  DialogInstance.vm = DialogInstance.$mount();
  DialogInstance.vm.visible = true;
  DialogInstance.vm.type = options.type
  DialogInstance.dom = DialogInstance.vm.$el;
  document.body.appendChild(DialogInstance.dom);
  DialogInstance.dom.zIndex = nId + 1001;
  return DialogInstance.vm;
};
["info", "warning", "primary", "danger"].forEach(type => {
  Dialog[type] = options => {
    if (typeof options === "string") {
      options = {
        message: options
      };
    }
    options.type = type;
    return Dialog(options);
  };
});

export default Dialog;