using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using SimpleImpersonation;
using System.Data;
using RaidProject.Models;

namespace RaidProject.DataAccess {
    public class CTAgentsDataAccess {
        private readonly string _raidSQLConnectionString;
        private readonly string _impersonationDomain;
        private readonly string _impersonationUser;
        private readonly string _impersonationPassword;

        private readonly IConfiguration _configuration;

        public CTAgentsDataAccess(IConfiguration configuration) {
            _configuration = configuration;
            _raidSQLConnectionString = _configuration["ConnectionStrings:RAIDSQLConnection"];
            _impersonationDomain = _configuration["RAIDImpersonation:Domain"];
            _impersonationUser = _configuration["RAIDImpersonation:User"];
            _impersonationPassword = _configuration["RAIDImpersonation:Password"];
        }

        public async Task<List<CTAgents>> GetAllCTAgents() {
            var storedProcName = "SP_RAID_V_CT_AGENTS";
            List<CTAgents> returnCTAgentsList = new List<CTAgents>();

            await Task.Run(() => {
                var credentials = new UserCredentials(_impersonationDomain, _impersonationUser, _impersonationPassword);
                var logonType = LogonType.NewCredentials;
                Impersonation.RunAsUser(credentials, logonType, () => {
                    using (SqlConnection connection = new SqlConnection(_raidSQLConnectionString)) {
                        SqlCommand cmd = new SqlCommand(storedProcName, connection);
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("OpCode", 2);

                        try {
                            cmd.Connection.Open();
                            using (SqlDataReader reader = cmd.ExecuteReader(CommandBehavior.CloseConnection)) {
                                while (reader.Read()) {
                                    CTAgents tempCTAgent = new CTAgents();

                                    if (!reader.IsDBNull(reader.GetOrdinal("RVA_ID"))) { tempCTAgent.RVA_ID = reader.GetInt32(reader.GetOrdinal("RVA_ID")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("RVA_COMPANY_NAME"))) { tempCTAgent.RVA_COMPANY_NAME = reader.GetString(reader.GetOrdinal("RVA_COMPANY_NAME")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("RVA_SALUTATION"))) { tempCTAgent.RVA_SALUTATION = reader.GetInt32(reader.GetOrdinal("RVA_SALUTATION")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("RVA_SALUTE_STRING"))) { tempCTAgent.RVA_SALUTE_STRING = reader.GetString(reader.GetOrdinal("RVA_SALUTE_STRING")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("RVA_FIRST_NAME"))) { tempCTAgent.RVA_FIRST_NAME = reader.GetString(reader.GetOrdinal("RVA_FIRST_NAME")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("RVA_LAST_NAME"))) { tempCTAgent.RVA_LAST_NAME = reader.GetString(reader.GetOrdinal("RVA_LAST_NAME")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("RVA_NICK_NAME"))) { tempCTAgent.RVA_NICK_NAME = reader.GetString(reader.GetOrdinal("RVA_NICK_NAME")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("RVA_MI"))) { tempCTAgent.RVA_MI = reader.GetString(reader.GetOrdinal("RVA_MI")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("RVA_SUFFIX"))) { tempCTAgent.RVA_SUFFIX = reader.GetString(reader.GetOrdinal("RVA_SUFFIX")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("RVA_EMAIL"))) { tempCTAgent.RVA_EMAIL = reader.GetString(reader.GetOrdinal("RVA_EMAIL")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("RVA_WORK_PHONE"))) { tempCTAgent.RVA_WORK_PHONE = reader.GetString(reader.GetOrdinal("RVA_WORK_PHONE")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("RVA_WORK_EXTENSION"))) { tempCTAgent.RVA_WORK_EXTENSION = reader.GetString(reader.GetOrdinal("RVA_WORK_EXTENSION")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("RVA_MOBILE_PHONE"))) { tempCTAgent.RVA_MOBILE_PHONE = reader.GetString(reader.GetOrdinal("RVA_MOBILE_PHONE")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("RVA_RW_SECTION"))) { tempCTAgent.RVA_RW_SECTION = reader.GetInt32(reader.GetOrdinal("RVA_RW_SECTION")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("RVA_DIS_IND"))) { tempCTAgent.RVA_DIS_IND = reader.GetString(reader.GetOrdinal("RVA_DIS_IND")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("RVA_ACTIVE_IND"))) { tempCTAgent.RVA_ACTIVE_IND = reader.GetString(reader.GetOrdinal("RVA_ACTIVE_IND")); }

                                    returnCTAgentsList.Add(tempCTAgent);
                                }
                            }
                        } catch (Exception ex) {
                            throw new ApplicationException("Error perfroming SP_RAID_V_CT_AGENTS: ", ex);
                        } finally {
                            if (cmd.Connection.State == ConnectionState.Open) {
                                cmd.Connection.Close();
                            }
                        }
                    }
                });
            });
            return returnCTAgentsList;
        }

    }
}
