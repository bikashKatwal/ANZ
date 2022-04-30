using ANZ.Domain;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ANZ.DataAccess
{
    public interface IProposalsRepo
    {
        Task<IEnumerable<Proposal>> GetAllProposals();
    }
}
