namespace EcuadorMikuna_V2_API.Models
{
    public class Administrator : User
    {
        public Administrator() { }
        public Administrator(int id) {
            Id = id;
        }
        public Administrator(int id, string name, string email, string password, DateTime birthday): base(id, name, email, password, birthday)
        {

        }
    }
}
