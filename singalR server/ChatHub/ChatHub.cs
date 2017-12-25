using Microsoft.AspNet.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ChatHub
{
    public class ChatHub : Hub
    {
        private static Dictionary<string, string> inChat = new Dictionary<string, string>();

        public void Register(string userName)
        {
            inChat.Add(userName, Context.ConnectionId);
            Clients.AllExcept(Context.ConnectionId).userConnected(userName);
        }

        public string[] GetUsersOnline()
        {
            return inChat.Keys.ToArray();
        }

        public void SendPrivateMessage(string name, string message)
        {
            string connectionId = null;

            if (inChat.TryGetValue(name, out connectionId)) {
                if (!String.IsNullOrEmpty(connectionId))
                {
                    Clients.Client(connectionId).sendPrivateMessage(inChat.FirstOrDefault(c => c.Value == Context.ConnectionId).Key,message);
                }
            }
        }

        public void SendPublicMessage(string message)
        {
            Clients.All.sendMessage(inChat.FirstOrDefault(c => c.Value == Context.ConnectionId).Key, message);
        }

        public override Task OnDisconnected(bool stopCalled)
        {
            var client = inChat.FirstOrDefault(c => c.Value == Context.ConnectionId);
            inChat.Remove(client.Key);
            Clients.AllExcept(Context.ConnectionId).userDisconnected(client.Key);
            return base.OnDisconnected(stopCalled);
        }
    }
}
