Ext.define("Studentarium.view.messenger.MessengerMainViewController", {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mnessengerMainView',
    onMessageFieldSendKey: function(field, event, eOpts){
        if(event.getKey() == Ext.event.Event.ENTER){
            me.onSendClick();
        }
    },
    onViewShown: function() {   
        var me = this;
        var store = me.getViewModel().get('localStorage');

        if(!store.getItem('chat_nickname')){
            Ext.Msg.prompt('Enter the nickname', 'Please, enter the nickname', function(btnId, value){
                if(btnId == 'ok'){
                    store.setItem('chat_nickname', value);
                    me.register(store.getItem('chat_nickname'));
                }
            });
        } else {
            me.register(store.getItem('chat_nickname'));
        }
    },
    onAtiveChatTabChange: function(tabPanel, tab){
        this.getViewModel().set('activeChatId', tab.getTitle());
    },
    onSendClick: function(){
        var me = this,
            currentActiveTab = me.lookupReference('chatTabs').getActiveTab(),
            to = me.getViewModel().get('activeChatId'),
            message = me.lookupReference('messageField').getValue();

        if (to  == "All") {
            Messenger.SendPublicMessage(message);
        }
        else{
            Messenger.SendPrivateMessage(to, message)
                .then(function(){
                    var chatTab = me.getTabByTitle(to);
                    me.appendChatTabText(chatTab, me.getViewModel().get('localStorage').getItem('chat_nickname'), message);
                });
        }
    },
    onUsersInChatDblClick: function(row, record){
        var me = this;
        var existingTab = this.getTabByTitle(record.get('Name'));
        if(record.get('Name') == me.getNickName()){
            return;
        }
        else if (existingTab) {
            me.lookupReference('chatTabs').setActiveTab(existingTab);
        }
        else {
            me.appendNewChatTab(record.get('Name'));
            me.lookupReference('chatTabs').setActiveTab(me.getTabByTitle(record.get('Name')));
        }

    },
    getTabByTitle: function(title){
        return this.lookupReference('chatTabs').down(Ext.String.format('[title={0}]', title));
    },
    appendChatTabText: function(chatTab, from, textToAppend){
        var me = this;
        var textArea = me.lookupReference(chatTab.getText() + 'Messages');
        var existingMessages = textArea.getValue();
        var newMessages = Ext.String.format('{0} : {1}', from, textToAppend);
        textArea.setValue(Ext.String.format("{0}\n{1}", existingMessages, newMessages));
    },
    getNickName: function(){
        return this.getViewModel().get('localStorage').getItem('chat_nickname');
    },
    appendNewChatTab: function(title){
        this.lookupReference('chatTabs').add({
            title: title,
            closable: true,
            items:[
                {
                    xtype:'textarea',
                    reference: title + 'Messages',
                    flex: 9,
                    width: '100%',
                    readOnly: true
                }
            ]
        });
    },
    
    register: function(nickName) {
        var me = this;
        me.getView().setLoading(true);
        Messenger.Register({
            nickName: nickName,
            onUserConnected: function(nickName){
                var store = me.lookupReference("usersInChat").getStore();
                store.add({Name: nickName});
            },
            onUserDisconnected: function(nickName){ 
                var store = me.lookupReference("usersInChat").getStore();
                var userIndex = store.findBy(function(record, id){
                    return record.get("Name") == nickName;
                });
                if (userIndex > -1) {
                    store.removeAt(userIndex);
                }
            },
            onSendPrivateMessage: function(from, message){
                var chatTab = me.getTabByTitle(from);
                if (!chatTab) {
                    me.appendNewChatTab(from);
                }
                me.appendChatTabText(me.getTabByTitle(from), from, message);
            },
            onSendMessage: function(from, message){
                var originalValue = me.lookupReference("allMessages").getValue();
                me.lookupReference("allMessages").setValue(originalValue + "\n" + Ext.String.format('{0}: {1}', from, message));
            }
        })
        .then(function(userNames){
            var users = [];
            if (Ext.isArray(userNames)) {
                for (var index = 0; index < userNames.length; index++) {
                    users.push({Name : userNames[index]}); 
                }
                me.lookupReference("usersInChat").getStore().loadData(users);
            }
            me.getView().setLoading(false);
        });
    }
});