Ext.define("Studentarium.store.MessengerContacts", {
    extend: "Ext.data.Store",
    alias: "store.messengerContacts",
    model: "Studentarium.model.MessengerContact",
    proxy: {
        type: "memory",
        rader: {
            type: "json",
            rootProperty: "items"
        }
    }
});
