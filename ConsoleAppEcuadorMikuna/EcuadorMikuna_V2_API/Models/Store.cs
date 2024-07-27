namespace EcuadorMikuna_V2_API.Models
{
    public class Store
    {
        private int Id { get; set; }
        private string Name { get; set; }
        private string Address { get; set; }
        private string City { get; set; }
        private string State { get; set; }
        private string PostalCode { get; set; }
        private string Country { get; set; }
        private string Phone { get; set; }
        private Inventory Inventory { get; set; }
        private List<Worker> WorkerList { get; set; }

        public Store() { }

    }
}
