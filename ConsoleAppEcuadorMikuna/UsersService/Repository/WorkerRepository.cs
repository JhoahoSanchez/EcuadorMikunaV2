using UsersService.Models;
using UsersService.Repositories;
using Microsoft.EntityFrameworkCore;

namespace UsersService.Repository
{
    public class WorkerRepository : IWorkerRepository
    {
        private readonly ApplicationContext _context;

        public WorkerRepository(ApplicationContext context)
        {
            _context = context;
        }
        public async Task<int> AddWorker(Worker worker)
        {
            _context.Workers.Add(worker);
            await _context.SaveChangesAsync();
            return worker.Id;
        }

        public async Task DeleteWorker(int id)
        {
            var worker = _context.Workers.Find(id);
            if (worker != null)
            {
                _context.Workers.Remove(worker);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<Worker> GetWorkerByEmail(string email)
        {
            var records = await _context.Workers.Where(x => x.Email == email).Select(x => new Worker()
            {
                Id = x.Id,
                Name = x.Name,
                Email = x.Email,
                Password = x.Password,
                Birthday = x.Birthday,
                Store = x.Store,
                JobPosition = x.JobPosition
            }).FirstOrDefaultAsync();

            return records;
        }

        public async Task<Worker> GetWorkerById(int id)
        {
            var records = await _context.Workers.Where(x => x.Id == id).Select(x => new Worker()
            {
                Id = x.Id,
                Name = x.Name,
                Email = x.Email,
                Password = x.Password,
                Birthday = x.Birthday,
                Store = x.Store,
                JobPosition = x.JobPosition
            }).FirstOrDefaultAsync();

            return records;
        }

        public async Task<List<Worker>> GetWorkers()
        {
            var records = await _context.Workers.Select(x => new Worker()
            {
                Id = x.Id,
                Name = x.Name,
                Email = x.Email,
                Password = x.Password,
                Birthday = x.Birthday,
                Store = x.Store,
                JobPosition = x.JobPosition
            }).ToListAsync();

            return records;
        }

        public async Task UpdateWorker(Worker worker)
        {
            _context.Workers.Update(worker);
            await _context.SaveChangesAsync();
        }
    }
}
