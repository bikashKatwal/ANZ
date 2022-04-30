using System;
using System.Collections.Generic;

namespace ANZ.Domain
{

	public class Proposal
	{

		#region Columns

		public int ProposalId { get; set; }

		public string ProposalName { get; set; }

		public string CustomerGroupName { get; set; }

		public string Date { get; set; }

		public string Description { get; set; }

		public string Status { get; set; }

		#endregion

		#region FK Lists

		//Name="FK_ProposalFacility", ThisKey="ProposalId", OtherKey="ProposalId"
		public List<Facility> Facilities { get; set; }

		#endregion

	}
}
