namespace EcuadorMikuna_V2_API.Models
{
    public class InventoryProduct
    {
        private int InventoryId { get; set; }
        private int ProductId { get; set; }
        private int Quantity { get; set; }
        private Inventory Inventory { get; set; }
        private Product Product { get; set; }
    }
}
