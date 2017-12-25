Ext.define("Studentarium.model.Student", {
    extend: 'Ext.data.Model',
    alias: 'model.student',
    requires: [
        "Studentarium.model.StudentClass"
    ],
    idProperty: 'id',
    clientIdProperty: 'clientId',
    fields: [
        'firstName',
        'middleName',
        'lastName',
        'class',
        'dateOfBirth',
        {
            name: 'averageScore',
            type: 'number'
        },
        'email',
        'phone',
        {
            name: 'fullName',
            persist: false,
            convert: function(v, record) {
                var data = record.getData();
                return data.firstName + " " + data.middleName + " " + data.lastName;
            },
            depends: ['firstName', 'lastName', 'middleName']
        },
        'photo'
    ],
    hasMany: {
        model: 'Studentarium.model.StudentClass',
        name: 'classes',
        associationKey: 'classes',
        store: {
            groupField: 'Semester'
        }
    },
    proxy: {
        type: 'rest',
        url: 'http://localhost:3000/students',
        writer: {
            type: 'json',
            writeAllFields: true
        }
    }
});