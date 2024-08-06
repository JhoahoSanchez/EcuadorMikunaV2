﻿using UsersService.Models;

namespace UsersService.Repository
{
    public interface IAdminRepository
    {
        Task<List<Administrator>> GetAdministrators();
        Task<Administrator> GetAdministratorById(int id);
        Task<Administrator> GetAdministratorByEmail(string email);
        Task<int> AddAdministrator(Administrator administrator);
        Task UpdateAdministrator(Administrator administrator);
        Task DeleteAdministrator(int id);
    }
}
