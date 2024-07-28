namespace EcuadorMikuna_V2_API.Models
{
    public class Store
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string PostalCode { get; set; }
        public string Country { get; set; }
        public string Phone { get; set; }
        public Inventory Inventory { get; set; }
        public List<Worker> WorkerList { get; set; }

        public Store() { }

    }
}
