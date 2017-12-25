Ext.define('Studentarium.view.students.StudentsListView', {
    extend: 'Ext.grid.Panel',
    xtype: 'studentsList',

    requires: [
        'Studentarium.view.editors.StudentEditor'
    ],
    autoLoad: true,
    shrinkWrapDock: true,
    reference: 'studentsList',
    controller: 'studentsList',
    dockedItems: [
        {
            xtype: 'toolbar',
            items: [
                {
                    xtype: 'button',
                    text: 'New',
                    listeners:{
                        click: 'onNewStudentButtonClick'
                    }
                }
            ]
        }

    ],
    plugins: [{
        ptype: 'rowexpander',
        rowBodyTpl: new Ext.XTemplate(
            '<tpl for=".">',
            '<div style="width:200px;height:200px"><img src="{photo}"/></div>',
            '<p style="font-weight:900">First Name:</p> {firstName}',
            '<p style="font-weight:900">Middle Name:</p> {middleName}',
            '<p style="font-weight:900">Last Name:</p> {lastName}',
            '</tpl>'
        )
    }],
    columns: [
        { text: 'Name', dataIndex: 'fullName', flex: 1 },
        { text: 'Date of Birth', dataIndex: 'dateOfBirth', flex: 1 },
        { text: 'Class', dataIndex: 'class', flex: 1 },
        {
            text: 'Avg. Score',
            dataIndex: 'averageScore',
            width: 150,
            renderer: function (value, meta, record, rowIndex, colIndex, store, view) {
                var data = [];
                store.each(function (rec) {
                    data.push(rec.data);
                });
                var score = Ext.Array.reduce(data, function (previous, value, index) {
                    return previous + value.averageScore;
                }, 0);
                var medianScore = score / store.getCount();
                if (value == medianScore) {
                    return '<p style="font-weight: 900;color: yellow;">' + value + '</p>'
                }
                else if (value > medianScore) {
                    return '<p style="font-weight: 900;color: green">' + value + '</p>'
                }
                else {
                    return '<p style="font-weight: 900;color: red">' + value + '</p>'
                }
            }
        },
        {
            xtype: 'actioncolumn',
            width: 100,
            align: 'center',
            items: [
                {
                    glyph: 'xf095@FontAwesome',
                    style: 'color:#ff0000',
                    tooltip: 'Contact',
                    handler: function (grid, rowIndex, colIndex) {
                        var rec = grid.getStore().getAt(rowIndex);
                        if (rec) {
                            var ctxMenu = Ext.create('Ext.menu.Menu', {
                                width: 140,
                                items: [{
                                    text: 'Mail',
                                    href: "mailto:test@i.ua"
                                }, {
                                    text: 'Phone',
                                    href: "tel:18475555555"
                                }]
                            });
                            ctxMenu.showAt(this.getXY());
                        }
                    }
                },
                {
                    glyph: 'xf044@FontAwesome',
                    tooltip: 'Edit',
                    handler: function (grid, rowIndex, colIndex) {
                        var rec = grid.getStore().getAt(rowIndex);
                        if (rec) {
                            var editor = Ext.create("Studentarium.view.editors.StudentEditor");
                            editor.loadRecord(rec);
                            editor.show();

                        }
                    }
                },
                {
                    glyph: 'xf00d@FontAwesome',
                    tooltip: 'Remove',
                    handler: function (grid, rowIndex, colIndex) {
                        var rec = grid.getStore().getAt(rowIndex);
                        if (rec) {
                            rec.erase();
                        }
                    }
                }
            ]
        }
    ],

    store: {
        type: 'students'
    }
});