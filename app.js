/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'Studentarium.Application',

    name: 'Studentarium',

    requires: [
        // This will automatically load all classes in the Studentarium namespace
        // so that application classes do not need to require each other.
        'Studentarium.*'
    ],

    // The name of the initial view to create.
    mainView: 'Studentarium.view.main.MainView'
});
