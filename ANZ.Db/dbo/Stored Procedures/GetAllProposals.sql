-- =============================================
-- Author:		<Bikash Katwal>
-- Create date: <01/05/2022>
-- Description:	<Get All proposal and facility>
-- =============================================
CREATE PROCEDURE [dbo].[GetAllProposals]
AS
    BEGIN
        SELECT p.ProposalId, 
               p.ProposalName, 
               p.CustomerGroupName, 
               p.[Date], 
               p.Description, 
               p.STATUS
        FROM dbo.Proposal p;
        SELECT f.FacilityId, 
               f.ProposalId, 
               f.FacilityName, 
               f.BookingCountry, 
               f.Currency, 
               f.StartDate, 
               f.MaturityDate, 
			   CONVERT(varchar, CAST(f.Limit AS money), 1) 'Limit'
        FROM Facility f;
    END;
