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
    public class CertTitleDataAccess {
        private readonly string _raidSQLConnectionString;
        private readonly string _impersonationDomain;
        private readonly string _impersonationUser;
        private readonly string _impersonationPassword;

        private readonly IConfiguration _configuration;

        public CertTitleDataAccess(IConfiguration configuration) {
            _configuration = configuration;
            _raidSQLConnectionString = _configuration["ConnectionStrings:RAIDSQLConnection"];
            _impersonationDomain = _configuration["RAIDImpersonation:Domain"];
            _impersonationUser = _configuration["RAIDImpersonation:User"];
            _impersonationPassword = _configuration["RAIDImpersonation:Password"];
        }

        public async Task<IEnumerable<CertTitle>> GetCertTitle(int id) {
            var storedProcName = "SP_RAID_CERT_TITLE";
            List<CertTitle> returnCertTitleList = new List<CertTitle>();

            await Task.Run(() => {
                var credentials = new UserCredentials(_impersonationDomain, _impersonationUser, _impersonationPassword);
                var logonType = LogonType.NewCredentials;
                Impersonation.RunAsUser(credentials, logonType, () => {
                    using (SqlConnection connection = new SqlConnection(_raidSQLConnectionString)) {
                        SqlCommand cmd = new SqlCommand(storedProcName, connection);
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("ID", id);
                        cmd.Parameters.AddWithValue("OpCode", 2);

                        try {
                            cmd.Connection.Open();
                            using (SqlDataReader reader = cmd.ExecuteReader(CommandBehavior.CloseConnection)) {
                                while (reader.Read()) {
                                    CertTitle tempCertTitle = new CertTitle();
                                    if (!reader.IsDBNull(reader.GetOrdinal("RCT_ID"))) { tempCertTitle.RCT_ID = reader.GetInt32(reader.GetOrdinal("RCT_ID")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("RCT_RJ_ID"))) { tempCertTitle.RCT_RJ_ID = reader.GetInt32(reader.GetOrdinal("RCT_RJ_ID")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("RCT_STATUS"))) { tempCertTitle.RCT_STATUS = reader.GetInt32(reader.GetOrdinal("RCT_STATUS")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("RCT_STATUS_STRING"))) { tempCertTitle.RCT_STATUS_STRING = reader.GetString(reader.GetOrdinal("RCT_STATUS_STRING")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("RCT_REQUEST"))) { tempCertTitle.RCT_REQUEST = reader.GetInt32(reader.GetOrdinal("RCT_REQUEST")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("RCT_REQUEST_STRING"))) { tempCertTitle.RCT_REQUEST_STRING = reader.GetString(reader.GetOrdinal("RCT_REQUEST_STRING")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("RCT_ORDERED_BY"))) { tempCertTitle.RCT_ORDERED_BY = reader.GetInt32(reader.GetOrdinal("RCT_ORDERED_BY")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("RCT_ORDERED_BY_STRING"))) { tempCertTitle.RCT_ORDERED_BY_STRING = reader.GetString(reader.GetOrdinal("RCT_ORDERED_BY_STRING")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("RCT_RETURNED_TO"))) { tempCertTitle.RCT_RETURNED_TO = reader.GetInt32(reader.GetOrdinal("RCT_RETURNED_TO")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("RCT_RETURNED_TO_STRING"))) { tempCertTitle.RCT_RETURNED_TO_STRING = reader.GetString(reader.GetOrdinal("RCT_RETURNED_TO_STRING")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("RCT_ASSIGNED_TO"))) { tempCertTitle.RCT_ASSIGNED_TO = reader.GetInt32(reader.GetOrdinal("RCT_ASSIGNED_TO")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("RCT_ASSIGNED_TO_STRING"))) { tempCertTitle.RCT_ASSIGNED_TO_STRING = reader.GetString(reader.GetOrdinal("RCT_ASSIGNED_TO_STRING")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("RCT_TRACT_CT"))) { tempCertTitle.RCT_TRACT_CT = reader.GetString(reader.GetOrdinal("RCT_TRACT_CT")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("RCT_ORDERED_DT"))) { tempCertTitle.RCT_ORDERED_DT = reader.GetDateTime(reader.GetOrdinal("RCT_ORDERED_DT")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("RCT_DUE_DT"))) { tempCertTitle.RCT_DUE_DT = reader.GetDateTime(reader.GetOrdinal("RCT_DUE_DT")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("RCT_RETURNED_DT"))) { tempCertTitle.RCT_RETURNED_DT = reader.GetDateTime(reader.GetOrdinal("RCT_RETURNED_DT")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("RCT_EST_COMP_DT"))) { tempCertTitle.RCT_EST_COMP_DT = reader.GetDateTime(reader.GetOrdinal("RCT_EST_COMP_DT")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("RCT_CREATED_BY"))) { tempCertTitle.RCT_CREATED_BY = reader.GetString(reader.GetOrdinal("RCT_CREATED_BY")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("RCT_CREATED_DT"))) { tempCertTitle.RCT_CREATED_DT = reader.GetDateTime(reader.GetOrdinal("RCT_CREATED_DT")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("RCT_DIS_IND"))) { tempCertTitle.RCT_DIS_IND = reader.GetString(reader.GetOrdinal("RCT_DIS_IND")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("RCT_MODIFIED_BY"))) { tempCertTitle.RCT_MODIFIED_BY = reader.GetString(reader.GetOrdinal("RCT_MODIFIED_BY")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("RCT_MODIFIED_DT"))) { tempCertTitle.RCT_MODIFIED_DT = reader.GetDateTime(reader.GetOrdinal("RCT_MODIFIED_DT")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("RCT_MODIFIED"))) { tempCertTitle.RCT_MODIFIED = reader.GetByte(reader.GetOrdinal("RCT_MODIFIED")); }

                                    returnCertTitleList.Add(tempCertTitle);
                                }
                            }
                        } catch (Exception ex) {
                            throw new ApplicationException("Error perfoming SP_RAID_CERT_TITLE: ", ex);
                        } finally {
                            if (cmd.Connection.State == ConnectionState.Open) {
                                cmd.Connection.Close();
                            }
                        }
                    }
                });
            });

            return returnCertTitleList;
        }

        public async Task<string> UpdateCertTitle(CertTitle certTitle) {
            var storedProcName = "SP_RAID_CERT_TITLE";
            string returnID = "isn't necessary";
            string planFileID = "isn't necessary";

            await Task.Run(() => {
                SqlDataReader sqlDataReader;

                var credentials = new UserCredentials(_impersonationDomain, _impersonationUser, _impersonationPassword);
                var logonType = LogonType.NewCredentials;
                Impersonation.RunAsUser(credentials, logonType, () => {
                    using (SqlConnection connection = new SqlConnection(_raidSQLConnectionString)) {
                        SqlCommand cmd = new SqlCommand(storedProcName, connection);
                        cmd.CommandType = CommandType.StoredProcedure;

                        cmd.Parameters.AddWithValue("OpCode", 3);
                        cmd.Parameters.AddWithValue("RCT_RETURNED_TO", certTitle.RCT_RETURNED_TO);
                        cmd.Parameters.AddWithValue("RCT_ASSIGNED_TO", certTitle.RCT_ASSIGNED_TO);
                        cmd.Parameters.AddWithValue("RCT_RETURNED_DT", certTitle.RCT_RETURNED_DT);
                        cmd.Parameters.AddWithValue("RCT_MODIFIED_BY", certTitle.RCT_MODIFIED_BY);
                        cmd.Parameters.AddWithValue("RCT_MODIFIED_DT", certTitle.RCT_MODIFIED_DT);
                        cmd.Parameters.AddWithValue("RCT_EST_COMP_DT", certTitle.RCT_EST_COMP_DT);
                        cmd.Parameters.AddWithValue("RCT_ORDERED_BY", certTitle.RCT_ORDERED_BY);
                        cmd.Parameters.AddWithValue("RCT_ORDERED_DT", certTitle.RCT_ORDERED_DT);
                        cmd.Parameters.AddWithValue("RCT_MODIFIED", certTitle.RCT_MODIFIED);
                        cmd.Parameters.AddWithValue("RCT_TRACT_CT", certTitle.RCT_TRACT_CT);
                        cmd.Parameters.AddWithValue("RCT_REQUEST", certTitle.RCT_REQUEST);
                        cmd.Parameters.AddWithValue("RCT_DIS_IND", certTitle.RCT_DIS_IND);
                        cmd.Parameters.AddWithValue("RCT_STATUS", certTitle.RCT_STATUS);
                        cmd.Parameters.AddWithValue("RCT_DUE_DT", certTitle.RCT_DUE_DT);

                        try {
                            cmd.Connection.Open();
                            sqlDataReader = cmd.ExecuteReader();
                            returnID = planFileID;
                        } catch (Exception ex) {
                            throw new ApplicationException("Error performing SP_RAID_ENG_PLAN_REVISIONS: ", ex);
                        } finally {
                            if (cmd.Connection.State == ConnectionState.Open) {
                                cmd.Connection.Close();
                            }
                        }
                    }
                });
            });
            return returnID;
        }

        public async Task<string> InsertCertTitle(CertTitle certTitle) {
            var storedProcName = "SP_RAID_CERT_TITLE";
            string returnID = "isn't necessary";
            string certTitleID = "isn't necessary";

            await Task.Run(() => {
                SqlDataReader sqlDataReader;

                var credentials = new UserCredentials(_impersonationDomain, _impersonationUser, _impersonationPassword);
                var logonType = LogonType.NewCredentials;
                Impersonation.RunAsUser(credentials, logonType, () => {
                    using (SqlConnection connection = new SqlConnection(_raidSQLConnectionString)) {
                        SqlCommand cmd = new SqlCommand(storedProcName, connection);
                        cmd.CommandType = CommandType.StoredProcedure;

                        cmd.Parameters.AddWithValue("OpCode", 1);
                        cmd.Parameters.AddWithValue("RCT_ID", certTitle.RCT_ID);
                        cmd.Parameters.AddWithValue("RCT_RJ_ID", certTitle.RCT_RJ_ID);
                        cmd.Parameters.AddWithValue("RCT_STATUS", certTitle.RCT_STATUS);
                        cmd.Parameters.AddWithValue("RCT_REQUEST", certTitle.RCT_REQUEST);
                        cmd.Parameters.AddWithValue("RCT_ORDERED_BY", certTitle.RCT_ORDERED_BY);
                        cmd.Parameters.AddWithValue("RCT_ASSIGNED_TO", certTitle.RCT_ASSIGNED_TO);
                        cmd.Parameters.AddWithValue("RCT_RETURNED_TO", certTitle.RCT_RETURNED_TO);
                        cmd.Parameters.AddWithValue("RCT_TRACT_CT", certTitle.RCT_TRACT_CT);
                        cmd.Parameters.AddWithValue("RCT_ORDERED_DT", certTitle.RCT_ORDERED_DT);
                        cmd.Parameters.AddWithValue("RCT_DUE_DT", certTitle.RCT_DUE_DT);
                        cmd.Parameters.AddWithValue("RCT_RETURNED_DT", certTitle.RCT_RETURNED_DT);
                        cmd.Parameters.AddWithValue("RCT_EST_COMP_DT", certTitle.RCT_EST_COMP_DT);
                        cmd.Parameters.AddWithValue("RCT_DIS_IND", certTitle.RCT_DIS_IND);
                        cmd.Parameters.AddWithValue("RCT_CREATED_BY", certTitle.RCT_CREATED_BY);
                        cmd.Parameters.AddWithValue("RCT_CREATED_DT", certTitle.RCT_CREATED_DT);
                        cmd.Parameters.AddWithValue("RCT_MODIFIED", certTitle.RCT_MODIFIED);

                        try {
                            cmd.Connection.Open();
                            sqlDataReader = cmd.ExecuteReader();
                            returnID = certTitleID;
                        } catch (Exception ex) {
                            throw new ApplicationException("Error performing SP_RAID_ENG_PLAN_FILE: ", ex);
                        } finally {
                            if (cmd.Connection.State == ConnectionState.Open) {
                                cmd.Connection.Close();
                            }
                        }
                    }
                });
            });
            return returnID;
        }

    }
}
