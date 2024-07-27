namespace EcuadorMikuna_V2_API.Models
{
    public abstract class User
    {
        protected int Id { get; set; }
        protected string Name { get; set; }
        protected string Email { get; set; }
        protected string Password { get; set; }
        protected DateTime Birthday { get; set; }

    }
}
