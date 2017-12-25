Ext.define("Studentarium.store.News", {
    extend: "Ext.data.Store",
    alias: "store.news",
    model: "Studentarium.model.News",
    proxy: {
        type: "memory",
        reader: {
            type: "json",
            rootProperty: "items"
        }
    }
});