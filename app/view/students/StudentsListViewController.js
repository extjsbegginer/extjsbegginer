Ext.define("Studentarium.view.students.StudentsListViewController", {
    extend: 'Ext.app.ViewController',
    alias: 'controller.studentsList',
    onNewStudentButtonClick: function(){
        var newStudent = Ext.create('Studentarium.model.Student');
        this.getView().getStore().add(newStudent);
        var editor = Ext.create('Studentarium.view.editors.StudentEditor');
        editor.on('cancel', function(){
            me.getView().getStore().rejectChanges();
        });
        editor.loadRecord(newStudent);
        editor.show();
    }
});