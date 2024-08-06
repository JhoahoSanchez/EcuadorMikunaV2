namespace StoresService.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public int? Quantity { get; set; } //Just for orderDetail
        //public ICollection<InventoryProduct> InventoryProducts { get; set; }
        public Product() { }
        public Product(int id, string name, string description, decimal price)
        {
            Id = id;
            Name = name;
            Description = description;
            Price = price;
        }
    }
}
