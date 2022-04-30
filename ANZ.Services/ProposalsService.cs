using ANZ.DataAccess;
using ANZ.Domain;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ANZ.Services
{
    public class ProposalsService : IProposalsService
    {
        protected readonly IProposalsRepo _proposalsRepo;

        public ProposalsService(IProposalsRepo proposalsRepo)
        {
            _proposalsRepo = proposalsRepo;
        }
        public Task<IEnumerable<Proposal>> GetAllProposals()
        {
            return _proposalsRepo.GetAllProposals();
        }
    }
}
