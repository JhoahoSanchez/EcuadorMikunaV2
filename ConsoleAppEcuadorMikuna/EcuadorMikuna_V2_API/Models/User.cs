namespace EcuadorMikuna_V2_API.Models
{
    public abstract class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public DateTime Birthday { get; set; }
        public User() { }
        public User(int id, string name, string email, string password, DateTime birthday)
        {
            Id = id;
            Name = name;
            Email = email;
            Password = password;
            Birthday = birthday;
        }
    }
}
