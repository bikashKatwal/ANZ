-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
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
        FROM dbo.Proposal p

		SELECT f.FacilityId, f.ProposalId, f.FacilityName, f.BookingCountry, f.Currency, f.StartDate, f.MaturityDate, f.Limit FROM Facility f
            
    END;
