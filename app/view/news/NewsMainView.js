Ext.define('Studentarium.view.news.NewsMainView', {
    extend: 'Ext.container.Container',
    xtype: 'newsMainView',
    alias: 'widget.newsMainView',
    controller: 'newsMainView',
    layout: { type: 'fit' },
    items: [
        {
            xtype: 'container',
            header: false,
            maxHeight: '100%',
            scrollable: true,
            collapsible: false,
            reference: 'todaysNews',
            styleHtmlContent: true,
            style: 'overflow-x: auto;',
            tpl: new Ext.XTemplate(
                '<tpl for=".">',
                '<div style="text-align: center; border:2px solid grey;margin:10px 0px;padding:10px;background-color:#e3e7ed">',
                '<img class="news-image" src="{urlToImage}"/>',
                '<p data-id="{title}" data-url="{url}" class="news-header">{title}</p>',
                '<p class="news-body">{description}</p>',
                '</div>',
                '</tpl>'
            )
        }
    ]

});