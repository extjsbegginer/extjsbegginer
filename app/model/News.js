Ext.define("Studentarium.model.News", {
    extend: "Ext.data.Model",
    alias: "model.news",
    fields: [
        "author",
        "title",
        "description",
        "url",
        "urlToImage",
        "publishedAt"
    ]
});