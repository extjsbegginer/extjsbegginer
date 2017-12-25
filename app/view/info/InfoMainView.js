Ext.define('Studentarium.view.info.InfoMainView', {
    extend: 'Ext.panel.Panel',
    xtype: 'infoMainView',
    alias: 'widget.infoMainView',
    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    items: [
        {
            xtype: 'treepanel',
            reference: 'informationTree',
            flex: 1,
            root: {
                text: 'School',
                children: [
                    {
                        text: 'CS Department',
                        children: [
                            {
                                text: 'Teachers',
                                children: [
                                    {
                                        text: 'Mr McGohny',
                                        leaf: true
                                    },
                                    {
                                        text: 'Mr.Jones',
                                        leaf: true
                                    }
                                ]
                            },
                            {
                                text: 'Contacts',
                                leaf: true
                            }
                        ]
                    },
                    {
                        text: 'Math Department',
                        children: [
                            {
                                text: 'Teachers',
                                children: [
                                    {
                                        text: 'Mr Mellory',
                                        phone: '45932953905',
                                        email: 'somemail@gmail.com',
                                        room: 409,
                                        
                                        leaf: true
                                    },
                                    {
                                        text: 'Mr Warkcs',
                                        phone: '0090189001',
                                        email: 'warcks.m@gmail.com',
                                        room: 411,
                                        leaf: true
                                    }
                                ]
                            },
                            {
                                text: 'Contacts',
                                leaf: true
                            }
                        ]
                    },
                    {
                        text: 'Biochemistry Department',
                        children: [
                            {
                                text: 'Teachers',
                                children: [
                                    {
                                        text: 'Miss Peebody',
                                        phone: '190019000',
                                        email: 'ppeb@gmail.com',
                                        room: 109,
                                        leaf: true
                                    },
                                    {
                                        text: 'Mrs Jacko',
                                        phone: '45932953905',
                                        email: 'j@gmail.com',
                                        room: 333,
                                        leaf: true
                                    }
                                ]
                            },
                            {
                                text: 'Contacts',
                                leaf: true
                            }
                        ]
                    }
                ]
            }
        },
        {
            xtype: 'panel',
            flex: 1,
            bind:{
                html: '{getCurrentSelectionHTML}'
            }
        }
    ]
});