namespace EcuadorMikuna_V2_API.Models
{
    public class Client : User
    {
        protected string address { get; set; }
        private List<Order> orders { get; set; }

        public Client() { 
            orders = new List<Order>();
        }

        public Client(string username) {
            this.Name = username;
            orders = new List<Order>();
        }
        public Client(string username, string password) {
            this.Name = username;
            this.Password = password;
            this.orders = new List<Order>();
        }
        public Client(string address, List<Order> orders) : this(address)
        {
            this.orders = orders;
        }
    }
}
