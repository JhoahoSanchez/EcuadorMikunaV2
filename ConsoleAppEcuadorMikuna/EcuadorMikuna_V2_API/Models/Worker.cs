namespace EcuadorMikuna_V2_API.Models
{
    public class Worker : User
    {
        private Store Store {  get; set; }
        private String JobPosition { get; set; }
        public Worker() {
            Store = new Store();
            JobPosition = string.Empty;
        }
        public Worker(Store store)
        {
            Store = store;
            JobPosition = string.Empty;
        }
        public Worker(String jobPosition)
        {
            JobPosition = jobPosition;
        }
    }
}
