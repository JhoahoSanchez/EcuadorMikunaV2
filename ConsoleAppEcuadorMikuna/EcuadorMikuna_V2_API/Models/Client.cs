namespace EcuadorMikuna_V2_API.Models
{
    public class Client : User
    {
        public string Address { get; set; }
        public List<Order> Orders { get; set; }

        public Client() { 
            Orders = new List<Order>();
        }   

        public Client(string username) {
            this.Name = username;
            Orders = new List<Order>();
        }
        public Client(string username, string password) {
            this.Name = username;
            this.Password = password;
            this.Orders = new List<Order>();
        }
        public Client(string address, List<Order> orders) : this(address)
        {
            this.Orders = orders;
        }
    }
}
