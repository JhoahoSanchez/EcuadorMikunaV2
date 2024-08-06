using UsersService.Models;
using UsersService.Repositories;
using Microsoft.EntityFrameworkCore;

namespace UsersService.Repository
{
    public class AdminRepository : IAdminRepository
    {
        private readonly ApplicationContext _context;

        public AdminRepository(ApplicationContext context) {
            _context = context;
        }
        public async Task<List<Administrator>> GetAdministrators()
        {
            var records = await _context.Administrators.Select(x=> new Administrator()
            {
                Id = x.Id,
                Name = x.Name,
                Email = x.Email,
                Password = x.Password,
                Birthday = x.Birthday
            }).ToListAsync();

            return records;
        }

        public async Task<Administrator> GetAdministratorById(int id)
        {
            var records = await _context.Administrators.Where(x => x.Id == id).Select(x => new Administrator()
            {
                Id = x.Id,
                Name = x.Name,
                Email = x.Email,
                Password = x.Password,
                Birthday = x.Birthday
            }).FirstOrDefaultAsync();

            return records;
        }

        public async Task<Administrator> GetAdministratorByEmail(string email)
        {
            var records = await _context.Administrators.Where(x => x.Email == email).Select(x => new Administrator()
            {
                Id = x.Id,
                Name = x.Name,
                Email = x.Email,
                Password = x.Password,
                Birthday = x.Birthday
            }).FirstOrDefaultAsync();

            return records;
        }

        public async Task<int> AddAdministrator(Administrator administrator)
        {
            _context.Administrators.Add(administrator);
            await _context.SaveChangesAsync();
            return administrator.Id;
        }

        public async Task UpdateAdministrator(Administrator administrator)
        {
            _context.Administrators.Update(administrator);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAdministrator(int id)
        {
            var administrator = _context.Administrators.Find(id);
            if (administrator != null)
            {
                _context.Administrators.Remove(administrator);
                await _context.SaveChangesAsync();
            }
        }
    }
}
