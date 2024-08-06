﻿using OrdersService.Models;

namespace OrdersService.Repository
{
    public interface IOrderRepository
    {
        Task<List<Order>> GetOrder();
        Task<Order> GetOrderById(int id);
        Task<List<Order>> GetOrdersByClientId(int id);
        Task<int> AddOrder(Order order);
        Task UpdateOrder(Order order);
        Task DeleteOrder(int id);
    }
}
