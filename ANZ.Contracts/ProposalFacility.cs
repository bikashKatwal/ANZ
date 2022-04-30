using ANZ.Domain;
using System.Collections.Generic;

namespace ANZ.Contracts
{
    public class ProposalFacility
    {
        public List<Proposal> Proposals { get; set; }
        public List<Facility> Facilities { get; set; }
    }
}
