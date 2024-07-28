﻿namespace EcuadorMikuna_V2_API.Models
{
    public class InventoryProduct
    {
        public int InventoryId { get; set; }
        public int ProductId { get; set; }
        public int Quantity { get; set; }
        public Inventory Inventory { get; set; }
        public Product Product { get; set; }
    }
}
