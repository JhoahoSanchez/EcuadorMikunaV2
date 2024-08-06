using UsersService.Models;
using UsersService.Repositories;
using Microsoft.EntityFrameworkCore;

namespace UsersService.Repository
{
    public class ClientRepository : IClientRepository
    {
        private readonly ApplicationContext _context;

        public ClientRepository(ApplicationContext context)
        {
            _context = context;
        }
        public async Task<int> AddClient(Client client)
        {
            _context.Clients.Add(client);
            await _context.SaveChangesAsync();
            return client.Id;
        }

        public async Task DeleteClient(int id)
        {
            var client = _context.Clients.Find(id);
            if (client != null)
            {
                _context.Clients.Remove(client);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<Client> GetClientByEmail(string email)
        {
            var records = await _context.Clients.Where(x => x.Email == email).Select(x => new Client()
            {
                Id = x.Id,
                Name = x.Name,
                Email = x.Email,
                Password = x.Password,
                Birthday = x.Birthday,
                Address = x.Address,
                Orders = x.Orders
            }).FirstOrDefaultAsync();

            return records;
        }

        //agregar consulta para obtener las ordenes

        public async Task<Client> GetClientById(int id)
        {
            var records = await _context.Clients.Where(x => x.Id == id).Select(x => new Client()
            {
                Id = x.Id,
                Name = x.Name,
                Email = x.Email,
                Password = x.Password,
                Birthday = x.Birthday,
                Address = x.Address,
                Orders = x.Orders
            }).FirstOrDefaultAsync();

            return records;
        }

        public async Task<List<Client>> GetClients()
        {
            var records = await _context.Clients.Select(x => new Client()
            {
                Id = x.Id,
                Name = x.Name,
                Email = x.Email,
                Password = x.Password,
                Birthday = x.Birthday,
                Address = x.Address,
                Orders = x.Orders
            }).ToListAsync();

            return records;
        }

        public async Task UpdateClient(Client client)
        {
            _context.Clients.Update(client);
            await _context.SaveChangesAsync();
        }
    }
}
