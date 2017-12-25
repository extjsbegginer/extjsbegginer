Ext.define("Studentraium.view.students.StudentsView",{
    extend: 'Ext.panel.Panel',
    alias: 'widget.studentsView',
    xtype: 'studentView',
    width: '100%',
    height: '100%',
    reference: 'studentsView',
    viewModel: 'studentsViewModel',
    requires:[
        'Studentarium.view.students.StudentsListView',
        'Studentarium.view.students.StudentsClassesView',
        'Studentarium.view.students.StudentsDetailsView'
    ],
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    items:[
        {
            xtype: 'studentsList',
            flex: 2
        },
        {
            xtype: 'panel',
            layout:{
                type: 'hbox',
                align: 'stretch'
            },
            defaults :{
                margin: 10
            },
            items:[
                {
                    xtype: 'studentClass',
                    height: 300,
                    flex: 1
                },
                {
                    xtype: 'studentDetails',
                    flex: 1
                }
            ]
        }
    ]
});