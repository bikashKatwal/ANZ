using ANZ.Domain;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ANZ.Services
{
    public interface IProposalsService
    {
        Task<IEnumerable<Proposal>> GetAllProposals();
    }
}
