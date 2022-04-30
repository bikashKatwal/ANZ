CREATE TABLE [dbo].[Facility] (
    [FacilityId]     INT          IDENTITY (1, 1) NOT NULL,
    [ProposalId]     INT          NOT NULL,
    [FacilityName]   VARCHAR (50) NOT NULL,
    [BookingCountry] VARCHAR (10) NOT NULL,
    [Currency]       VARCHAR (10) NOT NULL,
    [StartDate]      VARCHAR (15) NOT NULL,
    [MaturityDate]   VARCHAR (15) NOT NULL,
    [Limit]          DECIMAL (18) NOT NULL,
    PRIMARY KEY CLUSTERED ([FacilityId] ASC),
    CONSTRAINT [FK_ProposalFacility] FOREIGN KEY ([ProposalId]) REFERENCES [dbo].[Proposal] ([ProposalId])
);

