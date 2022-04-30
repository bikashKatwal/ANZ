CREATE TABLE [dbo].[Proposal] (
    [ProposalId]        INT            IDENTITY (1, 1) NOT NULL,
    [ProposalName]      VARCHAR (255)  NOT NULL,
    [CustomerGroupName] VARCHAR (50)   NOT NULL,
    [Date]              VARCHAR (10)   NOT NULL,
    [Description]       NVARCHAR (MAX) NULL,
    [Status]            VARCHAR (15)   NOT NULL,
    PRIMARY KEY CLUSTERED ([ProposalId] ASC)
);

