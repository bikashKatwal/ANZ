using ANZ.DataAccess.Config;
using ANZ.Domain;
using Dapper;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace ANZ.DataAccess
{
    public class ProposalsSqlRepo : IProposalsRepo
    {
        private readonly string _dbConnectionString;

        public ProposalsSqlRepo(SqlConnectionConfig config)
        {
            _dbConnectionString = config.ConnectionString;
        }
        public async Task<IEnumerable<Proposal>> GetAllProposals()
        {
            try
            {
                var storedProc = "[dbo].[GetAllProposals]";
                await using var connection = new SqlConnection(_dbConnectionString);
                var resultSet = await connection.QueryMultipleAsync(storedProc, commandType: CommandType.StoredProcedure);
                var proposals = resultSet.Read<Proposal>()?.ToList();
                var facilities= resultSet.Read<Facility>()?.ToList();
                proposals.ForEach(p=>p.Facilities=facilities.Where(f=>f.ProposalId==p.ProposalId)?.ToList());
                return proposals;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
