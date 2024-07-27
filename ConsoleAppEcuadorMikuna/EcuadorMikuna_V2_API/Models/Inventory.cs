namespace EcuadorMikuna_V2_API.Models
{
    public class Inventory
    {
        private int ID { get; set; }
        private List<Product> Products { get; set; }
        private ICollection<InventoryProduct> InventoryProducts { get; set; }
        public Inventory() { }
        public Inventory(int iD, List<Product> products)
        {
            ID = iD;
            Products = products;
        }
        public Inventory(int iD) { 
            ID = iD;
        }
    }
}
