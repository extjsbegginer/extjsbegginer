Ext.define("Studentarium.store.Students", {
    extend: "Ext.data.Store",
    model: "Studentarium.model.Student",
    alias: "store.students",
    autolLoad: true
});