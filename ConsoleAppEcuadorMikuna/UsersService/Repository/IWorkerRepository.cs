using UsersService.Models;

namespace UsersService.Repository
{
    public interface IWorkerRepository
    {
        Task<List<Worker>> GetWorkers();
        Task<Worker> GetWorkerById(int id);
        Task<Worker> GetWorkerByEmail(string email);
        Task<int> AddWorker(Worker worker);
        Task UpdateWorker(Worker worker);
        Task DeleteWorker(int id);
    }
}
