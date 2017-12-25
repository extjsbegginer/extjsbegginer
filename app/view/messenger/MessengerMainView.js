Ext.define('Studentarium.view.messenger.MessengerMainView', {
    extend: 'Ext.panel.Panel',
    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    height: '100%',
    xtype: 'messengerMainView',
    alias: 'widget.messengerMainView',
    controller: 'mnessengerMainView',
    viewModel: {
        data: {
            activeChatId: 'All',
            localStorage: Ext.util.LocalStorage.get('studentarium_chat')
        }
    },
    listeners: {
        show: 'onViewShown'
    },
    items: [
        {
            xtype: 'container',
            height: '100%',
            flex: 8,
            layot: {
                type: 'vbox',
                align: 'stretch',
                pack: 'justify'
            },
            items: [
                {
                    xtype: 'tabpanel',
                    reference: 'chatTabs',
                    listeners: {
                        tabchange: 'onAtiveChatTabChange'
                    },
                    items: [
                        {
                            title: 'All',
                            items: [
                                {
                                    xtype: 'textarea',
                                    reference: 'allMessages',
                                    flex: 9,
                                    height: '100%',
                                    width: '100%',
                                    readOnly: true
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'container',
                    layout: 'hbox',
                    flex: 1,
                    items: [
                        {
                            xtype: 'textfield',
                            reference: 'messageField',
                            flex: 9,
                            listeners: {
                                specialKey: 'onMessageFieldSendKey'
                            }
                        },
                        {
                            xtype: 'button',
                            reference: 'sendButton',
                            text: 'Send',
                            flex: 1,
                            listeners: {
                                click: 'onSendClick'
                            }
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'grid',
            height: '100%',
            flex: 2,
            title: 'Online',
            reference: 'usersInChat',
            hideHeaders: true,
            columns: [
                { text: 'Name', dataIndex: 'Name', flex: 10 }
            ],
            store: {
                type: 'messengerContacts'
            },
            listeners: {
                beforeitemdblclick: 'onUsersInChatDblClick'
            }
        }
    ]
});