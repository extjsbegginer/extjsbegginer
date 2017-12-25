Ext.define("Studentarium.view.students.StudentsClassesView",{
    extend: 'Ext.grid.Panel',
    alias: 'widget.studentClass',
    xtype: 'studentClasses',
    title: 'Classes',
    controller: 'studentClasses',
    columns:[
        {
            text: 'Semester',
            dataIndex: 'Semester',
            flex: 1
        },
        {
            text: 'Subject',
            dataIndex: 'Subject',
            flex: 1
        },
        {
            text: 'Type',
            dataIndex: 'Type',
            flex: 1
        }
    ],
    bind: {
        store: '{studentsList.selection.classes}'
    },
    features: [{
        ftype: 'grouping',
        groupHeaderTpl: '{columnName}: {name} ({rows.length} Item{[values.rows.length > 1 ? "s" : ""]})',
        hideGroupedHeader: true,
        startCollapsed: true,
        id: 'classesGrouping'
    }],
    dockedItems: [
        {
            xtype: 'toolbar',
            items:[
                {
                    text: 'Group By',
                    destroyMenu: true,
                    menu: [
                        {
                            text: 'Semester',
                            handler: 'groupByStudentClassesChanged'
                        },
                        {
                            text: 'Subject',
                            handler: 'groupByStudentClassesChanged'
                        },
                         {
                            text: 'Type',
                            handler: 'groupByStudentClassesChanged'
                        }
                    ]
                }
            ]
        }
    ]
});