Ext.define("Studentarium.view.students.StudentClassesController",{
    extend: 'Ext.app.ViewController',
    alias: 'controller.studentClasses',
    groupByStudentClassesChanged: function(menuItem) {
        this.getView().getStore().setGroupField(menuItem.text);
    }
});