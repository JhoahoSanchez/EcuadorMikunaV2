namespace StoresService.Models
{
    public class Inventory
    {
        public int ID { get; set; }
        public List<Product> Products { get; set; }
        //public ICollection<InventoryProduct> InventoryProducts { get; set; }
        public Inventory() { 
            Products = new List<Product>();
        }
        public Inventory(int iD, List<Product> products)
        {
            ID = iD;
            Products = products;
        }
        public Inventory(int iD) { 
            ID = iD;
            Products = new List<Product>();
        }
    }
}
