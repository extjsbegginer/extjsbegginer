Ext.define("Studentarium.view.news.NewsMainViewController",{
    extend: 'Ext.app.ViewController',
    alias: 'controller.newsMainView',

    afterRender: function(){
        var me = this;
        me.getView().setLoading(true);
        Ext.Ajax.request({
            url: 'http://localhost:3000/articles',
            method: 'GET',
            success: function(response, eOpts){
                me.getView().setLoading(false);
                //TODO: Replace update statment with store.loadData()
                me.lookupReference('todaysNews').update(JSON.parse(response.responseText));
                me.lookupReference('todaysNews').on('click', function(event){
                    if(event.target.className == "news-header") {
                        event.stopEventPropagation();
                        Ext.Msg.confirm('Warning', 'Are you sure you want to be redirected to the news site?', function(buttonId){
                            if(buttonId == 'yes') {
                                window.location = event.target.getAttribute('data-url');
                            }
                        });

                    }
                });
            },
            failure: function(response, opts){
                Ext.Msg.alert('Error', Ext.String.format("Error getting news. \nCaused by: {0}", response), Ext.emptyFn);
                me.getView().setLoading(false);
            }
        });
    }
});