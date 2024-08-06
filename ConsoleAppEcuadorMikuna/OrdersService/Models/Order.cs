namespace OrdersService.Models
{
    public class Order
    {
        public int Id { get; set; }
        public int ClientID { get; set; }
        public string StoreID { get; set; }
        public DateTime OrderDate { get; set; }
        public string Type { get; set; }
        public decimal Price { get; set; }
        public List<OrderDetail> OrderDetails { get; set; }

        public Order() {
            OrderDetails = new List<OrderDetail>();
        }
    }
}
