namespace EcuadorMikuna_V2_API.Models
{
    public class Product
    {
        private int Id { get; set; }
        private string Name { get; set; }
        private string Description { get; set; }
        private decimal Price { get; set; }
        private ICollection<InventoryProduct> InventoryProducts { get; set; }

        public Product() { }
    }
}
