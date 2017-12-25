Ext.define('Studentarium.view.editors.StudentEditor', {
    extend: 'Ext.window.Window',
    layout: 'fit',
    xtype: 'student-editor',
    alias: 'widget.student-editor',
    controller: 'studentEditor', 
    modal: true,
    loadRecord: function (record) {
        var me = this;
        me.down('form').loadRecord(record);
    },
    items: [
        {
            xtype: 'form',
            reference: 'studentForm',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            defaults: {
                margin: 10
            },
            buttons: [
                {
                    text: 'Ok',
                    reference: 'okBtn',
                    formBind: true,
                    listeners: {
                        click: 'onOkButtonClick'
                    }
                },
                {
                    text: 'Cancel',
                    reference: 'cancelBtn',
                    listeners: {
                        click: 'onCancelButtonClick'
                    }
                }
            ],
            items: [
                {
                    xtype: 'textfield',
                    fieldLabel: 'First Name',
                    labelAlign: 'left',
                    name: 'firstName',
                    allowBlank: false
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Middle Name',
                    name: 'middleName',
                    allowBlank: false
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Last Name',
                    name: 'lastName',
                    allowBlank: false
                },
                {
                    xtype: 'datefield',
                    fieldLabel: 'Date of Birth',
                    labelAlign: 'left',
                    name: 'dateOfBirth',
                    allowBlank: false
                },
                {
                    xtype: 'datefield',
                    fieldLabel: 'Entered At',
                    labelAlign: 'left',
                    name: 'enteredAt',
                    allowBlank: false
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Class',
                    labelAlign: 'left',
                    name: 'class',
                    allowBlank: false
                }
            ]
        }
    ]
});