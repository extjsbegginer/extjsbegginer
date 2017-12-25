Ext.define('Studentarium.view.main.MainView', {
    extend: 'Ext.container.Viewport',
    xtype: 'app-main',
    layout: 'fit',
    controller: 'main',
    viewModel: 'main',
    requires:[
        'Ext.plugin.Viewport',
        'Studentarium.view.messenger.MessengerMainView',
        'Studentarium.view.news.NewsMainView',
        'Studentraium.view.students.StudentsView',
        'Studentarium.view.info.InfoMainView',
        'Studentarium.view.main.MainViewController'
    ],
    items:[
        {
            xtype: 'panel',
            layout: 'card',
            minHeight: '100%',
            reference: 'mainView',
            dockedItems:[
                {
                    xtype: 'button',
                    maxWidth: 100,
                    text: 'Menu',
                    reference: 'menuBtn',
                    menu: [
                        {
                            text: 'Students',
                            listeners: {
                                click: 'onMenuItemClick'
                            }
                        },
                        {
                            text: 'News',
                            listeners: {
                                click: 'onMenuItemClick'
                            }
                        },
                        {
                            text: 'Messenger',
                            listeners: {
                                click: 'onMenuItemClick'
                            }
                        },
                        {
                            text: 'Info',
                            listeners: {
                                click: 'onMenuItemClick'
                            }
                        }
                    ] 
                },
                {
                    dock: 'bottom',
                    html: '<div style="hight:50px; background-color:#5fa2dd;color:white;text-align:center;">&copy; 2017 Studentarium</div>'
                }
            ],
            items: [
                {
                    xtype: 'studentsView'
                },
                {
                    xtype: 'newsMainView'
                },
                {
                    xtype: 'messengerMainView'
                },
                {
                    xtype: 'infoMainView'
                }
            ]
        }
    ]
});