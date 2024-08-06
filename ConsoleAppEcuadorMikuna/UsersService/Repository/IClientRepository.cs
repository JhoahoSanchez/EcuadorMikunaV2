﻿using UsersService.Models;

namespace UsersService.Repository
{
    public interface IClientRepository
    {
        Task<List<Client>> GetClients();
        Task<Client> GetClientById(int id);
        Task<Client> GetClientByEmail(string email);
        Task<int> AddClient(Client client);
        Task UpdateClient(Client client);
        Task DeleteClient(int id);
    }
}
