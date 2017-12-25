Ext.define("Studentarium.view.students.StudentsDetailsView",{
    extend: 'Ext.panel.Panel',
    xtype: 'studentDetails',
    height: 300,
    title: 'Details',
    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    items:[
        {
            xtype: 'image'
        },
        {
            xtype: 'panel',
            layout: 'column',
            items:[
               {
                    xtype: 'container',
                    defaults: {
                        xtype: 'textfield',
                        readOnly: true,
                        margin: '2'
                    },
                    items: [
                        {
                            fieldLabel: 'First Name',
                            bind: '{studentsList.selection.firstName}'
                        },
                        {
                            fieldLabel: 'Middle Name',
                            bind: '{studentsList.selection.middleName}'
                        },
                        {
                            fieldLabel: 'Last Name',
                            bind: '{studentsList.selection.lastName}'
                        },
                        {
                            fieldLabel: 'Date of Birth',
                            bind: '{studentsList.selection.dateOfBirth}'
                        },
                    ]
                },
                {
                    xtype: 'container',
                    defaults: {
                        xtype: 'textfield',
                        readOnly: true,
                        margin: '2'
                    },
                    items: [
                        {
                            fieldLabel: 'Entered At',
                            bind: '{studentsList.selection.enteredAt}'
                        },
                        {
                            fieldLabel: 'Class',
                            bind: '{studentsList.selection.class}'
                        },
                        {
                            fieldLabel: 'Phone',
                            bind: '{studentsList.selection.phone}'
                        },
                        {
                            fieldLabel: 'E-mail',
                            bind: '{studentsList.selection.email}'
                        }
                    ]
                } 
            ]
        }
    ]
});