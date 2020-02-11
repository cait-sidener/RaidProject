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
    public class RailroadDataAccess {
        private readonly string _raidSQLConnectionString;
        private readonly string _impersonationDomain;
        private readonly string _impersonationUser;
        private readonly string _impersonationPassword;

        private readonly IConfiguration _configuration;

        public RailroadDataAccess(IConfiguration configuration) {
            _configuration = configuration;
            _raidSQLConnectionString = _configuration["ConnectionStrings:RAIDSQLConnection"];

            _impersonationDomain = _configuration["RAIDImpersonation:Domain"];
            _impersonationUser = _configuration["RAIDImpersonation:User"];
            _impersonationPassword = _configuration["RAIDImpersonation:Password"];
        }

        public async Task<string> GetAllRailroad() {
            var storedProcName = "SP_RAID_RAILROAD_AGREES";
            string jsonData = null;

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
                                    jsonData += reader.GetString(0);
                                }
                            }
                        } catch (Exception ex) {
                            throw new ApplicationException("Error performing SP_RAID_RAILROAD_AGREES: ", ex);
                        } finally {
                            if (cmd.Connection.State == ConnectionState.Open) {
                                cmd.Connection.Close();
                            }
                        }
                    }
                });
            });
            return jsonData;
        }

        public async Task<string> GetRailroad(int id) {
            var storedProcName = "SP_RAID_RAILROAD_AGREES";
            string jsonData = null;

            await Task.Run(() => {
                var credentials = new UserCredentials(_impersonationDomain, _impersonationUser, _impersonationPassword);
                var logonType = LogonType.NewCredentials;
                Impersonation.RunAsUser(credentials, logonType, () => {
                    using (SqlConnection connection = new SqlConnection(_raidSQLConnectionString)) {
                        SqlCommand cmd = new SqlCommand(storedProcName, connection);
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("OpCode", 2);
                        cmd.Parameters.AddWithValue("ID", id);

                        try {
                            cmd.Connection.Open();
                            using (SqlDataReader reader = cmd.ExecuteReader(CommandBehavior.CloseConnection)) {
                                while (reader.Read()) {
                                    jsonData += reader.GetString(0);
                                }
                            }
                        } catch (Exception ex) {
                            throw new ApplicationException("Error performing SP_RAID_RAILROAD_AGREES: ", ex);
                        } finally {
                            if (cmd.Connection.State == ConnectionState.Open) {
                                cmd.Connection.Close();
                            }
                        }
                    }
                });
            });
            return jsonData;
        }

        public async Task<string> UpdateRailroadAgreement(RailroadModel railroad) {
            var storedProcName = "SP_RAID_RAILROAD_AGREES";
            string returnID = "this isn't necessary";
            string railroadID = "this should probably be in the taxes model!";

            await Task.Run(() => {
                SqlDataReader sqlDataReader;

                var credentials = new UserCredentials(_impersonationDomain, _impersonationUser, _impersonationPassword);
                var logonType = LogonType.NewCredentials;
                Impersonation.RunAsUser(credentials, logonType, () => {
                    using (SqlConnection connection = new SqlConnection(_raidSQLConnectionString)) {
                        SqlCommand cmd = new SqlCommand(storedProcName, connection);
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("OpCode", 3);
                        cmd.Parameters.AddWithValue("RRA_LAST_AGREE_EXPIRE_DT", railroad.RRA_LAST_AGREEMENT_EXPIRATION_DATE);
                        cmd.Parameters.AddWithValue("RRA_TERMINATION_REASON", railroad.RRA_REASON_FOR_TERMINATION);
                        cmd.Parameters.AddWithValue("RRA_DURATION_UNITS", railroad.RRA_DURATION_UNITS);
                        cmd.Parameters.AddWithValue("RRA_HIGHWAY_STATUS", railroad.RRA_HIGHWAY_STATUS);
                        cmd.Parameters.AddWithValue("RRA_LEASE_PURPOSE", railroad.RRA_LEASE_PURPOSE);
                        cmd.Parameters.AddWithValue("RRA_LAST_AGREE_DT", railroad.RRA_LAST_AGREEMENT_DATE);
                        cmd.Parameters.AddWithValue("RRA_PLANS_MARKED", railroad.RRA_PLANS_MARKED);
                        cmd.Parameters.AddWithValue("RRA_TOWNSHIP_DIR", railroad.RRA_TOWNSHIP_DIR);
                        cmd.Parameters.AddWithValue("RRA_MODIFIED_BY", railroad.RRA_MODIFIED_BY);
                        cmd.Parameters.AddWithValue("RRA_QTR_SECTION", railroad.RRA_QTR_SECTION);
                        cmd.Parameters.AddWithValue("RRA_MODIFIED_DT", railroad.RRA_MODIFIED_DT);
                        cmd.Parameters.AddWithValue("RRA_AGREE_NUM", railroad.RRA_AGREEMENT_NUMBER);
                        cmd.Parameters.AddWithValue("RRA_AUDIT_NUM", railroad.RRA_AUDIT_NUM);
                        cmd.Parameters.AddWithValue("RRA_DESCRIPT", railroad.RRA_DESCRIPTION);
                        cmd.Parameters.AddWithValue("RRA_RANGE_DIR", railroad.RRA_RANGE_DIR);
                        cmd.Parameters.AddWithValue("RRA_MODIFIED", railroad.RRA_MODIFIED);
                        cmd.Parameters.AddWithValue("RRA_DURATION", railroad.RRA_DURATION);
                        cmd.Parameters.AddWithValue("RRA_LOCATION", railroad.RRA_LOCATION);
                        cmd.Parameters.AddWithValue("RRA_TOWNSHIP", railroad.RRA_TOWNSHIP);
                        cmd.Parameters.AddWithValue("RRA_RENT_AMT", railroad.RRA_RENT_AMOUNT);
                        cmd.Parameters.AddWithValue("RRA_SECTION", railroad.RRA_SECTION);
                        cmd.Parameters.AddWithValue("RRA_DIS_IND", railroad.RRA_DIS_IND);
                        cmd.Parameters.AddWithValue("RRA_COUNTY", railroad.RRA_COUNTY);
                        cmd.Parameters.AddWithValue("RRA_RRC_ID", railroad.RRA_RRC_ID);
                        cmd.Parameters.AddWithValue("RRA_CD_NUM", railroad.RRA_CD_NUM);
                        cmd.Parameters.AddWithValue("RRA_LD_NUM", railroad.RRA_LD_NUM);
                        cmd.Parameters.AddWithValue("RRA_ROUTE", railroad.RRA_ROUTE);
                        cmd.Parameters.AddWithValue("RRA_RANGE", railroad.RRA_RANGE);
                        cmd.Parameters.AddWithValue("RRA_AREA", railroad.RRA_AREA);
                        cmd.Parameters.AddWithValue("RRA_SPOT?", railroad.RRA_SPOT);
                        try {
                            cmd.Connection.Open();
                            sqlDataReader = cmd.ExecuteReader();
                            returnID = railroadID;
                        } catch (Exception ex) {
                            throw new ApplicationException("Error performing SP_RAID_RAILROAD_AGREES: ", ex);
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

        public async Task<string> UpdateRailroadCompany(RailroadModel railroad) {
            var storedProcName = "SP_RAID_RAILROAD_COMPANIES";
            string returnID = "this isn't necessary";
            string railroadID = "this should probably be in the taxes model!";

            await Task.Run(() => {
                SqlDataReader sqlDataReader;

                var credentials = new UserCredentials(_impersonationDomain, _impersonationUser, _impersonationPassword);
                var logonType = LogonType.NewCredentials;
                Impersonation.RunAsUser(credentials, logonType, () => {
                    using (SqlConnection connection = new SqlConnection(_raidSQLConnectionString)) {
                        SqlCommand cmd = new SqlCommand(storedProcName, connection);
                        cmd.CommandType = CommandType.StoredProcedure;

                        cmd.Parameters.AddWithValue("OpCode", 3);
                        cmd.Parameters.AddWithValue("RRC_COMPANY_NAME", railroad.RRC_COMPANY_NAME);
                        cmd.Parameters.AddWithValue("RRC_ABBREVIATION", railroad.RRC_ABBREVIATION);
                        cmd.Parameters.AddWithValue("RRC_MODIFIED_BY", railroad.RRC_MODIFIED_BY);
                        cmd.Parameters.AddWithValue("RRC_MODIFIED_DT", railroad.RRC_MODIFIED_DT);
                        cmd.Parameters.AddWithValue("RRC_MODIFIED", railroad.RRC_MODIFIED);
                        cmd.Parameters.AddWithValue("RRC_OWNER", railroad.RRC_OWNER);

                        try {
                            cmd.Connection.Open();
                            sqlDataReader = cmd.ExecuteReader();
                            returnID = railroadID;
                        } catch (Exception ex) {
                            throw new ApplicationException("Error performing RailroadAgreement_Update: ", ex);
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

        public async Task<string> InsertRailroadAgreement(RailroadModel railroad) {
            var storedProcName = "SP_RAID_RAILROAD_AGREES";
            string returnID = "this isn't necessary";
            string railroadID = "this should probably be in the taxes model!";

            await Task.Run(() => {
                SqlDataReader sqlDataReader;

                var credentials = new UserCredentials(_impersonationDomain, _impersonationUser, _impersonationPassword);
                var logonType = LogonType.NewCredentials;
                Impersonation.RunAsUser(credentials, logonType, () => {
                    using (SqlConnection connection = new SqlConnection(_raidSQLConnectionString)) {
                        SqlCommand cmd = new SqlCommand(storedProcName, connection);
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("OpCode", 1);
                        cmd.Parameters.AddWithValue("RRA_LAST_AGREE_EXPIRE_DT", railroad.RRA_LAST_AGREEMENT_EXPIRATION_DATE);
                        cmd.Parameters.AddWithValue("RRA_TERMINATION_REASON", railroad.RRA_REASON_FOR_TERMINATION);
                        cmd.Parameters.AddWithValue("RRA_DURATION_UNITS", railroad.RRA_DURATION_UNITS);
                        cmd.Parameters.AddWithValue("RRA_HIGHWAY_STATUS", railroad.RRA_HIGHWAY_STATUS);
                        cmd.Parameters.AddWithValue("RRA_LEASE_PURPOSE", railroad.RRA_LEASE_PURPOSE);
                        cmd.Parameters.AddWithValue("RRA_LAST_AGREE_DT", railroad.RRA_LAST_AGREEMENT_DATE);
                        cmd.Parameters.AddWithValue("RRA_PLANS_MARKED", railroad.RRA_PLANS_MARKED);
                        cmd.Parameters.AddWithValue("RRA_TOWNSHIP_DIR", railroad.RRA_TOWNSHIP_DIR);
                        cmd.Parameters.AddWithValue("RRA_MODIFIED_BY", railroad.RRA_MODIFIED_BY);
                        cmd.Parameters.AddWithValue("RRA_QTR_SECTION", railroad.RRA_QTR_SECTION);
                        cmd.Parameters.AddWithValue("RRA_MODIFIED_DT", railroad.RRA_MODIFIED_DT);
                        cmd.Parameters.AddWithValue("RRA_AGREE_NUMBER", railroad.RRA_AGREEMENT_NUMBER);
                        cmd.Parameters.AddWithValue("RRA_AUDIT_NUM", railroad.RRA_AUDIT_NUM);
                        cmd.Parameters.AddWithValue("RRA_DESCRIPTION", railroad.RRA_DESCRIPTION);
                        cmd.Parameters.AddWithValue("RRA_RANGE_DIR", railroad.RRA_RANGE_DIR);
                        cmd.Parameters.AddWithValue("RRA_MODIFIED", railroad.RRA_MODIFIED);
                        cmd.Parameters.AddWithValue("RRA_DURATION", railroad.RRA_DURATION);
                        cmd.Parameters.AddWithValue("RRA_LOCATION", railroad.RRA_LOCATION);
                        cmd.Parameters.AddWithValue("RRA_TOWNSHIP", railroad.RRA_TOWNSHIP);
                        cmd.Parameters.AddWithValue("RRA_RENT_AMOUNT", railroad.RRA_RENT_AMOUNT);
                        cmd.Parameters.AddWithValue("RRA_SECTION", railroad.RRA_SECTION);
                        cmd.Parameters.AddWithValue("RRA_DIS_IND", railroad.RRA_DIS_IND);
                        cmd.Parameters.AddWithValue("RRA_COUNTY", railroad.RRA_COUNTY);
                        cmd.Parameters.AddWithValue("RRA_RRC_ID", railroad.RRA_RRC_ID);
                        cmd.Parameters.AddWithValue("RRA_CD_NUM", railroad.RRA_CD_NUM);
                        cmd.Parameters.AddWithValue("RRA_LD_NUM", railroad.RRA_LD_NUM);
                        cmd.Parameters.AddWithValue("RRA_ROUTE", railroad.RRA_ROUTE);
                        cmd.Parameters.AddWithValue("RRA_RANGE", railroad.RRA_RANGE);
                        cmd.Parameters.AddWithValue("RRA_AREA", railroad.RRA_AREA);
                        cmd.Parameters.AddWithValue("RRA_SPOT?", railroad.RRA_SPOT);
                        cmd.Parameters.AddWithValue("RRA_ID", railroad.RRA_ID);
                        try {
                            cmd.Connection.Open();
                            sqlDataReader = cmd.ExecuteReader();
                            returnID = railroadID;
                        } catch (Exception ex) {
                            throw new ApplicationException("Error performing SP_RAID_RAILROAD_AGREES: ", ex);
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

        public async Task<string> InsertRailroadCompany(RailroadModel railroad) {
            var storedProcName = "SP_RAID_RAILROAD_COMPANIES";
            string returnID = "this isn't necessary";
            string railroadID = "this should probably be in the taxes model!";

            await Task.Run(() => {
                SqlDataReader sqlDataReader;

                var credentials = new UserCredentials(_impersonationDomain, _impersonationUser, _impersonationPassword);
                var logonType = LogonType.NewCredentials;
                Impersonation.RunAsUser(credentials, logonType, () => {
                    using (SqlConnection connection = new SqlConnection(_raidSQLConnectionString)) {
                        SqlCommand cmd = new SqlCommand(storedProcName, connection);
                        cmd.CommandType = CommandType.StoredProcedure;

                        cmd.Parameters.AddWithValue("OpCode", 1);
                        cmd.Parameters.AddWithValue("RRC_COMPANY_NAME", railroad.RRC_COMPANY_NAME);
                        cmd.Parameters.AddWithValue("RRC_ABBREVIATION", railroad.RRC_ABBREVIATION);
                        cmd.Parameters.AddWithValue("RRC_MODIFIED_BY", railroad.RRC_MODIFIED_BY);
                        cmd.Parameters.AddWithValue("RRC_MODIFIED_DT", railroad.RRC_MODIFIED_DT);
                        cmd.Parameters.AddWithValue("RRC_MODIFIED", railroad.RRC_MODIFIED);
                        cmd.Parameters.AddWithValue("RRC_OWNER", railroad.RRC_OWNER);

                        try {
                            cmd.Connection.Open();
                            sqlDataReader = cmd.ExecuteReader();
                            returnID = railroadID;
                        } catch (Exception ex) {
                            throw new ApplicationException("Error performing RailroadAgreement_Update: ", ex);
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
