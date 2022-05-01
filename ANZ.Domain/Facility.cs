using System;
using System.Collections.Generic;
using System.Text;

namespace ANZ.Domain
{
	public class Facility
	{

		#region Columns

		public int FacilityId { get; set; }

		public int ProposalId { get; set; }

		public string FacilityName { get; set; }

		public string BookingCountry { get; set; }

		public string Currency { get; set; }

		public string StartDate { get; set; }

		public string MaturityDate { get; set; }

		public string Limit { get; set; }

		#endregion

		#region FK Lists

		#endregion

		#region PK Objects

		// Name="FK_ProposalFacility", ThisKey="ProposalId", OtherKey="ProposalId", IsForeignKey = true
		public Proposal Proposal { get; set; }

		#endregion

	}
}
