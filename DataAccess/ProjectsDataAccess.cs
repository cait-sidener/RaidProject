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
    public class ProjectsDataAccess {
        private readonly string _raidSQLConnectionString;
        private readonly string _impersonationDomain;
        private readonly string _impersonationUser;
        private readonly string _impersonationPassword;

        private readonly IConfiguration _configuration;

        public ProjectsDataAccess(IConfiguration configuration) {
            _configuration = configuration;
            _raidSQLConnectionString = _configuration["ConnectionStrings:RAIDSQLConnection"];

            _impersonationDomain = _configuration["RAIDImpersonation:Domain"];
            _impersonationUser = _configuration["RAIDImpersonation:User"];
            _impersonationPassword = _configuration["RAIDImpersonation:Password"];
        }

        public async Task<List<Projects>> GetProjectByProjectID(string projectID) {
            var storedProcName = "usp_Projects_SelectByProjNumber";
            List<Projects> returnProjectList = new List<Projects>();

            await Task.Run(() => {
                var credentials = new UserCredentials(_impersonationDomain, _impersonationUser, _impersonationPassword);
                var logonType = LogonType.NewCredentials;
                Impersonation.RunAsUser(credentials, logonType, () => {
                    using (SqlConnection connection = new SqlConnection(_raidSQLConnectionString)) {
                        SqlCommand cmd = new SqlCommand(storedProcName, connection);
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("PRJ_PROJ_NUM", projectID);

                        try {
                            cmd.Connection.Open();

                            using (SqlDataReader reader = cmd.ExecuteReader(CommandBehavior.CloseConnection)) {
                                while (reader.Read()) {
                                    Projects tempProject = new Projects();

                                    if (!reader.IsDBNull(reader.GetOrdinal("PRJ_PROJ_NUM"))) { tempProject.PRJ_PROJ_NUM = reader.GetString(reader.GetOrdinal("PRJ_PROJ_NUM")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("PRJ_RAID_ROUTE"))) { tempProject.PRJ_RAID_ROUTE = reader.GetString(reader.GetOrdinal("PRJ_RAID_ROUTE")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("PRJ_RAID_COUNTY"))) { tempProject.PRJ_RAID_COUNTY = reader.GetString(reader.GetOrdinal("PRJ_RAID_COUNTY")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("PRJ_RAID_DISTRICT"))) { tempProject.PRJ_RAID_DISTRICT = reader.GetByte(reader.GetOrdinal("PRJ_RAID_DISTRICT")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("PRJ_RAID_COUNTY_NUM"))) { tempProject.PRJ_RAID_COUNTY_NUM = reader.GetByte(reader.GetOrdinal("PRJ_RAID_COUNTY_NUM")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("PRJ_RAID_COUNTY_SEAT"))) { tempProject.PRJ_RAID_COUNTY_SEAT = reader.GetString(reader.GetOrdinal("PRJ_RAID_COUNTY_SEAT")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("PRJ_RAID_COUNTY_ABBR"))) { tempProject.PRJ_RAID_COUNTY_ABBR = reader.GetString(reader.GetOrdinal("PRJ_RAID_COUNTY_ABBR")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("PRJ_RAID_FED_PROJ_NUM"))) { tempProject.PRJ_RAID_FED_PROJ_NUM = reader.GetString(reader.GetOrdinal("PRJ_RAID_FED_PROJ_NUM")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("PRJ_CPMS_ROUTE"))) { tempProject.PRJ_CPMS_ROUTE = reader.GetString(reader.GetOrdinal("PRJ_CPMS_ROUTE")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("PRJ_CPMS_COUNTY"))) { tempProject.PRJ_CPMS_COUNTY = reader.GetString(reader.GetOrdinal("PRJ_CPMS_COUNTY")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("PRJ_CPMS_DISTRICT"))) { tempProject.PRJ_CPMS_DISTRICT = reader.GetByte(reader.GetOrdinal("PRJ_CPMS_DISTRICT")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("PRJ_CPMS_COUNTY_NUM"))) { tempProject.PRJ_CPMS_COUNTY_NUM = reader.GetByte(reader.GetOrdinal("PRJ_CPMS_COUNTY_NUM")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("PRJ_CPMS_COUNTY_SEAT"))) { tempProject.PRJ_CPMS_COUNTY_SEAT = reader.GetString(reader.GetOrdinal("PRJ_CPMS_COUNTY_SEAT")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("PRJ_CPMS_COUNTY_ABBR"))) { tempProject.PRJ_CPMS_COUNTY_ABBR = reader.GetString(reader.GetOrdinal("PRJ_CPMS_COUNTY_ABBR")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("PRJ_CPMS_FED_PROJ_NUM"))) { tempProject.PRJ_CPMS_FED_PROJ_NUM = reader.GetString(reader.GetOrdinal("PRJ_CPMS_FED_PROJ_NUM")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("PRJ_LOCATION"))) { tempProject.PRJ_LOCATION = reader.GetString(reader.GetOrdinal("PRJ_LOCATION")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("PRJ_DESCRIPT"))) { tempProject.PRJ_DESCRIPT = reader.GetString(reader.GetOrdinal("PRJ_DESCRIPT")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("PRJ_STATUS"))) { tempProject.PRJ_STATUS = reader.GetString(reader.GetOrdinal("PRJ_STATUS")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("PRJ_FED_FUNDED_IND"))) { tempProject.PRJ_FED_FUNDED_IND = reader.GetString(reader.GetOrdinal("PRJ_FED_FUNDED_IND")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("PRJ_PE_FUNDED_IND"))) { tempProject.PRJ_PE_FUNDED_IND = reader.GetString(reader.GetOrdinal("PRJ_PE_FUNDED_IND")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("PRJ_ROW_FUNDED_IND"))) { tempProject.PRJ_ROW_FUNDED_IND = reader.GetString(reader.GetOrdinal("PRJ_ROW_FUNDED_IND")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("PRJ_UTIL_FUNDED_IND"))) { tempProject.PRJ_UTIL_FUNDED_IND = reader.GetString(reader.GetOrdinal("PRJ_UTIL_FUNDED_IND")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("PRJ_CE_FUNDED_IND"))) { tempProject.PRJ_CE_FUNDED_IND = reader.GetString(reader.GetOrdinal("PRJ_CE_FUNDED_IND")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("PRJ_CONST_FUNDED_IND"))) { tempProject.PRJ_CONST_FUNDED_IND = reader.GetString(reader.GetOrdinal("PRJ_CONST_FUNDED_IND")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("PRJ_ROW_EST"))) { tempProject.PRJ_ROW_EST = reader.GetDecimal(reader.GetOrdinal("PRJ_ROW_EST")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("PRJ_ROW_CTD"))) { tempProject.PRJ_ROW_CTD = reader.GetDecimal(reader.GetOrdinal("PRJ_ROW_CTD")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("PRJ_COUNTY_SEAT"))) { tempProject.PRJ_COUNTY_SEAT = reader.GetString(reader.GetOrdinal("PRJ_COUNTY_SEAT")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("PRJ_ROAD_PROGRESS"))) { tempProject.PRJ_ROAD_PROGRESS = reader.GetDecimal(reader.GetOrdinal("PRJ_ROAD_PROGRESS")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("PRJ_ROAD_SQUAD"))) { tempProject.PRJ_ROAD_SQUAD = reader.GetString(reader.GetOrdinal("PRJ_ROAD_SQUAD")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("PRJ_ROAD_CONSULTANT"))) { tempProject.PRJ_ROAD_CONSULTANT = reader.GetString(reader.GetOrdinal("PRJ_ROAD_CONSULTANT")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("PRJ_BRIDGE_SQUAD"))) { tempProject.PRJ_BRIDGE_SQUAD = reader.GetString(reader.GetOrdinal("PRJ_BRIDGE_SQUAD")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("PRJ_BRIDGE_CONSULTANT"))) { tempProject.PRJ_BRIDGE_CONSULTANT = reader.GetString(reader.GetOrdinal("PRJ_BRIDGE_CONSULTANT")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("PRJ_WORK_TYPE"))) { tempProject.PRJ_WORK_TYPE = reader.GetString(reader.GetOrdinal("PRJ_WORK_TYPE")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("PRJ_PROGRAM"))) { tempProject.PRJ_PROGRAM = reader.GetString(reader.GetOrdinal("PRJ_PROGRAM")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("PRJ_INDEX"))) { tempProject.PRJ_INDEX = reader.GetString(reader.GetOrdinal("PRJ_INDEX")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("PRJ_LENGTH"))) { tempProject.PRJ_LENGTH = reader.GetDecimal(reader.GetOrdinal("PRJ_LENGTH")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("PRJ_OVERALL"))) { tempProject.PRJ_OVERALL = reader.GetString(reader.GetOrdinal("PRJ_OVERALL")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("PRJ_CITY_RURAL_IND"))) { tempProject.PRJ_CITY_RURAL_IND = reader.GetString(reader.GetOrdinal("PRJ_CITY_RURAL_IND")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("PRJ_COMPLETE_PERCENT"))) { tempProject.PRJ_COMPLETE_PERCENT = reader.GetDecimal(reader.GetOrdinal("PRJ_COMPLETE_PERCENT")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("PRJ_PROJ_EST"))) { tempProject.PRJ_PROJ_EST = reader.GetDecimal(reader.GetOrdinal("PRJ_PROJ_EST")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("PRJ_PROJ_CTD"))) { tempProject.PRJ_PROJ_CTD = reader.GetDecimal(reader.GetOrdinal("PRJ_PROJ_CTD")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("PRJ_ACT_TRACT_AMT"))) { tempProject.PRJ_ACT_TRACT_AMT = reader.GetInt16(reader.GetOrdinal("PRJ_ACT_TRACT_AMT")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("PRJ_CS_AGREE_IND"))) { tempProject.PRJ_CS_AGREE_IND = reader.GetString(reader.GetOrdinal("PRJ_CS_AGREE_IND")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("PRJ_PLAN_ACCESS_CONTROL"))) { tempProject.PRJ_PLAN_ACCESS_CONTROL = reader.GetString(reader.GetOrdinal("PRJ_PLAN_ACCESS_CONTROL")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("PRJ_LAST_LOADED"))) { tempProject.PRJ_LAST_LOADED = reader.GetDateTime(reader.GetOrdinal("PRJ_LAST_LOADED")); }

                                    returnProjectList.Add(tempProject);
                                }
                            }
                        } catch (Exception ex) {
                            throw new ApplicationException("Error performing usp_Projects_SelectByProjNumber: ", ex);
                        } finally {
                            if (cmd.Connection.State == ConnectionState.Open) {
                                cmd.Connection.Close();
                            }
                        }
                    }
                });
            });
            return returnProjectList;
        }
    }
}
