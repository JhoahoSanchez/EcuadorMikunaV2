namespace EcuadorMikuna_V2_API.Models
{
    public class Order
    {
        private string Id { get; set; }
        private int ClientID { get; set; }
        private string StoreID { get; set; }
        private DateTime DateTime { get; set; }
        private string Type { get; set; }
        private decimal Price { get; set; }
        private OrderDetail Detail { get; set; }

        public Order() { }
    }
}
