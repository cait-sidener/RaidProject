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
    public class EngineeringDataAccess {
        private readonly string _raidSQLConnectionString;
        private readonly string _impersonationDomain;
        private readonly string _impersonationUser;
        private readonly string _impersonationPassword;

        private readonly IConfiguration _configuration;

        public EngineeringDataAccess(IConfiguration configuration) {
            _configuration = configuration;
            _raidSQLConnectionString = _configuration["ConnectionStrings:RAIDSQLConnection"];
            _impersonationDomain = _configuration["RAIDImpersonation:Domain"];
            _impersonationUser = _configuration["RAIDImpersonation:User"];
            _impersonationPassword = _configuration["RAIDImpersonation:Password"];
        }

        public async Task<List<SurveyNotes>> GetSurveyNote(int id) {
            var storedProcName = "SP_RAID_ENG_SURVEY_NOTES";
            List<SurveyNotes> returnSurveyNotesList = new List<SurveyNotes>();

            await Task.Run(() => {
                var credentials = new UserCredentials(_impersonationDomain, _impersonationUser, _impersonationPassword);
                var logonType = LogonType.NewCredentials;
                Impersonation.RunAsUser(credentials, logonType, () => {
                    using (SqlConnection connection = new SqlConnection(_raidSQLConnectionString)) {
                        SqlCommand cmd = new SqlCommand(storedProcName, connection);
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("OpCode", 2);
                        cmd.Parameters.AddWithValue("Id", id);

                        try {
                            cmd.Connection.Open();
                            using (SqlDataReader reader = cmd.ExecuteReader(CommandBehavior.CloseConnection)) {
                                while (reader.Read()) {
                                    SurveyNotes tempSurvey = new SurveyNotes();

                                    if (!reader.IsDBNull(reader.GetOrdinal("SRV_ID"))) { tempSurvey.SRV_ID = reader.GetInt32(reader.GetOrdinal("SRV_ID")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("SRV_PROJ_NUM"))) { tempSurvey.SRV_PROJ_NUM = reader.GetString(reader.GetOrdinal("SRV_PROJ_NUM")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("SRV_REMARKS"))) { tempSurvey.SRV_REMARKS = reader.GetString(reader.GetOrdinal("SRV_REMARKS")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("SRV_ASSIGNED"))) { tempSurvey.SRV_ASSIGNED = reader.GetInt32(reader.GetOrdinal("SRV_ASSIGNED")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("SRV_ITEMS_RCVD"))) { tempSurvey.SRV_ITEMS_RCVD = reader.GetString(reader.GetOrdinal("SRV_ITEMS_RCVD")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("SRV_RCVD_DT"))) { tempSurvey.SRV_RCVD_DT = reader.GetDateTime(reader.GetOrdinal("SRV_RCVD_DT")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("SRV_ASSIGNED_DT"))) { tempSurvey.SRV_ASSIGNED_DT = reader.GetDateTime(reader.GetOrdinal("SRV_ASSIGNED_DT")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("SRV_CREATED_BY"))) { tempSurvey.SRV_CREATED_BY = reader.GetString(reader.GetOrdinal("SRV_CREATED_BY")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("SRV_CREATED_DT"))) { tempSurvey.SRV_CREATED_DT = reader.GetDateTime(reader.GetOrdinal("SRV_CREATED_DT")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("SRV_DIS_IND"))) { tempSurvey.SRV_DIS_IND = reader.GetString(reader.GetOrdinal("SRV_DIS_IND")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("SRV_MODIFIED_BY"))) { tempSurvey.SRV_MODIFIED_BY = reader.GetString(reader.GetOrdinal("SRV_MODIFIED_BY")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("SRV_MODIFIED_DT"))) { tempSurvey.SRV_MODIFIED_DT = reader.GetDateTime(reader.GetOrdinal("SRV_MODIFIED_DT")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("SRV_MODIFIED"))) { tempSurvey.SRV_MODIFIED = reader.GetByte(reader.GetOrdinal("SRV_MODIFIED")); }

                                    returnSurveyNotesList.Add(tempSurvey);
                                }

                            }

                        } catch (Exception ex) {
                            throw new ApplicationException("Error perfoming usp_Eng_SurveyNotes_SelectByProjNumber: ", ex);
                        } finally {
                            if (cmd.Connection.State == ConnectionState.Open) {
                                cmd.Connection.Close();
                            }
                        }
                    }
                });
            });
            return returnSurveyNotesList;
        }

        public async Task<string> UpdateSurveyNote(SurveyNotes survey) {
            var storedProcName = "SP_RAID_ENG_SURVEY_NOTES";
            string returnID = "isn't necessary";
            string surveyID = "isn't necessary";

            await Task.Run(() => {
                SqlDataReader sqlDataReader;

                var credentials = new UserCredentials(_impersonationDomain, _impersonationUser, _impersonationPassword);
                var logonType = LogonType.NewCredentials;
                Impersonation.RunAsUser(credentials, logonType, () => {
                    using (SqlConnection connection = new SqlConnection(_raidSQLConnectionString)) {
                        SqlCommand cmd = new SqlCommand(storedProcName, connection);
                        cmd.CommandType = CommandType.StoredProcedure;

                        cmd.Parameters.AddWithValue("OpCode", 3);
                        cmd.Parameters.AddWithValue("SRV_ID", survey.SRV_ID);
                        cmd.Parameters.AddWithValue("SRV_PROJ_NUM", survey.SRV_PROJ_NUM);
                        cmd.Parameters.AddWithValue("SRV_REMARKS", survey.SRV_REMARKS);
                        cmd.Parameters.AddWithValue("SRV_ASSIGNED", survey.SRV_ASSIGNED);
                        cmd.Parameters.AddWithValue("SRV_ITEMS_RCVD", survey.SRV_ITEMS_RCVD);
                        cmd.Parameters.AddWithValue("SRV_RCVD_DT", survey.SRV_RCVD_DT);
                        cmd.Parameters.AddWithValue("SRV_ASSIGNED_DT", survey.SRV_ASSIGNED_DT);
                        cmd.Parameters.AddWithValue("SRV_CREATED_BY", survey.SRV_CREATED_BY);
                        cmd.Parameters.AddWithValue("SRV_CREATED_DT", survey.SRV_CREATED_DT);
                        cmd.Parameters.AddWithValue("SRV_MODIFIED", survey.SRV_MODIFIED);
                        cmd.Parameters.AddWithValue("SRV_DIS_IND", survey.SRV_DIS_IND);

                        try {
                            cmd.Connection.Open();
                            sqlDataReader = cmd.ExecuteReader();
                            returnID = surveyID;
                        } catch (Exception ex) {
                            throw new ApplicationException("Error performing SP_RAID_ENG_SURVEY_NOTE: ", ex);
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

        public async Task<string> InsertSurveyNote(SurveyNotes survey) {
            var storedProcName = "SP_RAID_ENG_SURVEY_NOTES";
            string returnID = "isn't necessary";
            string surveyID = "isn't necessary";

            await Task.Run(() => {
                SqlDataReader sqlDataReader;

                var credentials = new UserCredentials(_impersonationDomain, _impersonationUser, _impersonationPassword);
                var logonType = LogonType.NewCredentials;
                Impersonation.RunAsUser(credentials, logonType, () => {
                    using (SqlConnection connection = new SqlConnection(_raidSQLConnectionString)) {
                        SqlCommand cmd = new SqlCommand(storedProcName, connection);
                        cmd.CommandType = CommandType.StoredProcedure;

                        cmd.Parameters.AddWithValue("OpCode", 1);
                        cmd.Parameters.AddWithValue("SRV_ID", survey.SRV_ID);
                        cmd.Parameters.AddWithValue("SRV_PROJ_NUM", survey.SRV_PROJ_NUM);
                        cmd.Parameters.AddWithValue("SRV_REMARKS", survey.SRV_REMARKS);
                        cmd.Parameters.AddWithValue("SRV_ASSIGNED", survey.SRV_ASSIGNED);
                        cmd.Parameters.AddWithValue("SRV_ITEMS_RCVD", survey.SRV_ITEMS_RCVD);
                        cmd.Parameters.AddWithValue("SRV_RCVD_DT", survey.SRV_RCVD_DT);
                        cmd.Parameters.AddWithValue("SRV_ASSIGNED_DT", survey.SRV_ASSIGNED_DT);
                        cmd.Parameters.AddWithValue("SRV_CREATED_BY", survey.SRV_CREATED_BY);
                        cmd.Parameters.AddWithValue("SRV_CREATED_DT", survey.SRV_CREATED_DT);
                        cmd.Parameters.AddWithValue("SRV_MODIFIED", survey.SRV_MODIFIED);
                        cmd.Parameters.AddWithValue("SRV_DIS_IND", survey.SRV_DIS_IND);

                        try {
                            cmd.Connection.Open();
                            sqlDataReader = cmd.ExecuteReader();
                            returnID = surveyID;
                        } catch (Exception ex) {
                            throw new ApplicationException("Error performing SP_RAID_ENG_SURVEY_NOTE: ", ex);
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

        public async Task<List<ProjectNotes>> GetProjectNote(int id) {
            var storedProcName = "SP_RAID_ENG_NOTES";
            List<ProjectNotes> returnProjectNotesList = new List<ProjectNotes>();

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
                                    ProjectNotes tempProject = new ProjectNotes();

                                    if (!reader.IsDBNull(reader.GetOrdinal("EN_ID"))) { tempProject.EN_ID = reader.GetInt32(reader.GetOrdinal("EN_ID")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("EN_ENG_ID"))) { tempProject.EN_ENG_ID = reader.GetInt32(reader.GetOrdinal("EN_ENG_ID")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("EN_ORDER"))) { tempProject.EN_ORDER = reader.GetByte(reader.GetOrdinal("EN_ORDER")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("EN_MODIFIED"))) { tempProject.EN_MODIFIED = reader.GetByte(reader.GetOrdinal("EN_MODIFIED")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("EN_ON_REPORT"))) { tempProject.EN_ON_REPORT = reader.GetString(reader.GetOrdinal("EN_ON_REPORT")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("EN_DIS_IND"))) { tempProject.EN_DIS_IND = reader.GetString(reader.GetOrdinal("EN_DIS_IND")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("EN_COMMENT"))) { tempProject.EN_COMMENT = reader.GetString(reader.GetOrdinal("EN_COMMENT")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("EN_CREATED_BY"))) { tempProject.EN_CREATED_BY = reader.GetString(reader.GetOrdinal("EN_CREATED_BY")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("EN_CREATED_DT"))) { tempProject.EN_CREATED_DT = reader.GetDateTime(reader.GetOrdinal("EN_CREATED_DT")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("EN_MODIFIED_BY"))) { tempProject.EN_MODIFIED_BY = reader.GetString(reader.GetOrdinal("EN_MODIFIED_BY")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("EN_MODIFIED_DT"))) { tempProject.EN_MODIFIED_DT = reader.GetDateTime(reader.GetOrdinal("EN_MODIFIED_DT")); }

                                    returnProjectNotesList.Add(tempProject);
                                }

                            }

                        } catch (Exception ex) {
                            throw new ApplicationException("Error perfoming usp_Eng_ProjectNotes_SelectByID: ", ex);
                        } finally {
                            if (cmd.Connection.State == ConnectionState.Open) {
                                cmd.Connection.Close();
                            }
                        }
                    }
                });
            });

            return returnProjectNotesList;
        }

        public async Task<string> UpdateProjectNote(ProjectNotes project) {
            var storedProcName = "SP_RAID_ENG_NOTES";
            string returnID = "isn't necessary";
            string projectID = "isn't necessary";

            await Task.Run(() => {
                SqlDataReader sqlDataReader;

                var credentials = new UserCredentials(_impersonationDomain, _impersonationUser, _impersonationPassword);
                var logonType = LogonType.NewCredentials;
                Impersonation.RunAsUser(credentials, logonType, () => {
                    using (SqlConnection connection = new SqlConnection(_raidSQLConnectionString)) {
                        SqlCommand cmd = new SqlCommand(storedProcName, connection);
                        cmd.CommandType = CommandType.StoredProcedure;

                        cmd.Parameters.AddWithValue("OpCode", 3);
                        cmd.Parameters.AddWithValue("EN_ID", project.EN_ID);
                        cmd.Parameters.AddWithValue("EN_ENG_ID", project.EN_ENG_ID);
                        cmd.Parameters.AddWithValue("EN_ORDER", project.EN_ORDER);
                        cmd.Parameters.AddWithValue("EN_COMMENT", project.EN_COMMENT);
                        cmd.Parameters.AddWithValue("EN_ON_REPORT", project.EN_ON_REPORT);
                        cmd.Parameters.AddWithValue("EN_Created_Dt", project.EN_CREATED_DT);
                        cmd.Parameters.AddWithValue("EN_Created_By", project.EN_CREATED_BY);
                        cmd.Parameters.AddWithValue("EN_Modified", project.EN_MODIFIED);
                        cmd.Parameters.AddWithValue("EN_Dis_Ind", project.EN_DIS_IND);

                        try {
                            cmd.Connection.Open();
                            sqlDataReader = cmd.ExecuteReader();
                            returnID = projectID;
                        } catch (Exception ex) {
                            throw new ApplicationException("Error performing SP_RAID_ENG_NOTE: ", ex);
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

        public async Task<string> InsertProjectNote(ProjectNotes project) {
            var storedProcName = "SP_RAID_ENG_NOTES";
            string returnID = "isn't necessary";
            string projectID = "isn't necessary";

            await Task.Run(() => {
                SqlDataReader sqlDataReader;

                var credentials = new UserCredentials(_impersonationDomain, _impersonationUser, _impersonationPassword);
                var logonType = LogonType.NewCredentials;
                Impersonation.RunAsUser(credentials, logonType, () => {
                    using (SqlConnection connection = new SqlConnection(_raidSQLConnectionString)) {
                        SqlCommand cmd = new SqlCommand(storedProcName, connection);
                        cmd.CommandType = CommandType.StoredProcedure;

                        cmd.Parameters.AddWithValue("OpCode", 1);
                        cmd.Parameters.AddWithValue("EN_ID", project.EN_ID);
                        cmd.Parameters.AddWithValue("EN_ENG_ID", project.EN_ENG_ID);
                        cmd.Parameters.AddWithValue("EN_ORDER", project.EN_ORDER);
                        cmd.Parameters.AddWithValue("EN_COMMENT", project.EN_COMMENT);
                        cmd.Parameters.AddWithValue("EN_ON_REPORT", project.EN_ON_REPORT);
                        cmd.Parameters.AddWithValue("EN_Created_Dt", project.EN_CREATED_DT);
                        cmd.Parameters.AddWithValue("EN_Created_By", project.EN_CREATED_BY);
                        cmd.Parameters.AddWithValue("EN_Modified", project.EN_MODIFIED);
                        cmd.Parameters.AddWithValue("EN_Dis_Ind", project.EN_DIS_IND);

                        try {
                            cmd.Connection.Open();
                            sqlDataReader = cmd.ExecuteReader();
                            returnID = projectID;
                        } catch (Exception ex) {
                            throw new ApplicationException("Error performing SP_RAID_ENG_NOTE: ", ex);
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
        public async Task<List<Technicians>> GetTechnician(int id) {
            var storedProcName = "SP_RAID_ENG_TECHNICIANS";
            List<Technicians> returnTechnicianList = new List<Technicians>();

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
                                    Technicians tempTechnician = new Technicians();
                                    if (!reader.IsDBNull(reader.GetOrdinal("TECH_ID"))) { tempTechnician.TECH_ENG_ID = reader.GetInt32(reader.GetOrdinal("TECH_ID")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("TECH_ENG_ID"))) { tempTechnician.TECH_ENG_ID = reader.GetInt32(reader.GetOrdinal("TECH_ENG_ID")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("TECH_ASSIGNED_DT"))) { tempTechnician.TECH_ASSIGNED_DT = reader.GetDateTime(reader.GetOrdinal("TECH_ASSIGNED_DT")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("TECH_UNASSIGNED_DT"))) { tempTechnician.TECH_UNASSIGNED_DT = reader.GetDateTime(reader.GetOrdinal("TECH_UNASSIGNED_DT")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("TECH_DIS_IND"))) { tempTechnician.TECH_DIS_IND = reader.GetString(reader.GetOrdinal("TECH_DIS_IND")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("TECH_CREATED_BY"))) { tempTechnician.TECH_CREATED_BY = reader.GetString(reader.GetOrdinal("TECH_CREATED_BY")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("TECH_CREATED_DT"))) { tempTechnician.TECH_CREATED_DT = reader.GetDateTime(reader.GetOrdinal("TECH_CREATED_DT")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("TECH_MODIFIED_BY"))) { tempTechnician.TECH_MODIFIED_BY = reader.GetString(reader.GetOrdinal("TECH_MODIFIED_BY")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("TECH_MODIFIED_DT"))) { tempTechnician.TECH_MODIFIED_DT = reader.GetDateTime(reader.GetOrdinal("TECH_MODIFIED_DT")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("TECH_MODIFIED"))) { tempTechnician.TECH_MODIFIED = reader.GetByte(reader.GetOrdinal("TECH_MODIFIED")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("TECH_RS_ID"))) { tempTechnician.TECH_RS_ID = reader.GetInt32(reader.GetOrdinal("TECH_RS_ID")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("TECH_TECHNAME"))) { tempTechnician.TECH_TECHNAME = reader.GetString(reader.GetOrdinal("TECH_TECHNAME")); }

                                    returnTechnicianList.Add(tempTechnician);
                                }

                            }

                        } catch (Exception ex) {
                            throw new ApplicationException("Error perfoming usp_Eng_Technician_SelectByID: ", ex);
                        } finally {
                            if (cmd.Connection.State == ConnectionState.Open) {
                                cmd.Connection.Close();
                            }
                        }
                    }
                });
            });

            return returnTechnicianList;
        }

        public async Task<string> UpdateTechnician(Technicians technician) {
            var storedProcName = "SP_RAID_ENG_TECHNICIANS";
            string returnID = "isn't necessary";
            string technicianID = "isn't necessary";

            await Task.Run(() => {
                SqlDataReader sqlDataReader;

                var credentials = new UserCredentials(_impersonationDomain, _impersonationUser, _impersonationPassword);
                var logonType = LogonType.NewCredentials;
                Impersonation.RunAsUser(credentials, logonType, () => {
                    using (SqlConnection connection = new SqlConnection(_raidSQLConnectionString)) {
                        SqlCommand cmd = new SqlCommand(storedProcName, connection);
                        cmd.CommandType = CommandType.StoredProcedure;

                        cmd.Parameters.AddWithValue("OpCode", 3);
                        cmd.Parameters.AddWithValue("TECH_UNASSIGNED_DT", technician.TECH_UNASSIGNED_DT);
                        cmd.Parameters.AddWithValue("TECH_ASSIGNED_DT", technician.TECH_ASSIGNED_DT);
                        cmd.Parameters.AddWithValue("TECH_MODIFIED_DT", technician.TECH_MODIFIED_DT);
                        cmd.Parameters.AddWithValue("TECH_MODIFIED_BY", technician.TECH_MODIFIED_BY);
                        cmd.Parameters.AddWithValue("TECH_MODIFIED", technician.TECH_MODIFIED);
                        cmd.Parameters.AddWithValue("TECH_DIS_IND", technician.TECH_DIS_IND);
                        try {
                            cmd.Connection.Open();
                            sqlDataReader = cmd.ExecuteReader();
                            returnID = technicianID;
                        } catch (Exception ex) {
                            throw new ApplicationException("Error performing SP_RAID_ENG_TECHNICIANS: ", ex);
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

        public async Task<string> InsertTechnician(Technicians technician) {
            var storedProcName = "SP_RAID_ENG_TECHNICIANS";
            string returnID = "isn't necessary";
            string technicianID = "isn't necessary";

            await Task.Run(() => {
                SqlDataReader sqlDataReader;

                var credentials = new UserCredentials(_impersonationDomain, _impersonationUser, _impersonationPassword);
                var logonType = LogonType.NewCredentials;
                Impersonation.RunAsUser(credentials, logonType, () => {
                    using (SqlConnection connection = new SqlConnection(_raidSQLConnectionString)) {
                        SqlCommand cmd = new SqlCommand(storedProcName, connection);
                        cmd.CommandType = CommandType.StoredProcedure;

                        cmd.Parameters.AddWithValue("OpCode", 1);
                        cmd.Parameters.AddWithValue("TECH_ID", technician.TECH_ID);
                        cmd.Parameters.AddWithValue("TECH_ENG_ID", technician.TECH_ENG_ID);
                        cmd.Parameters.AddWithValue("TECH_RS_ID", technician.TECH_RS_ID);
                        cmd.Parameters.AddWithValue("TECH_ASSIGNED_DT", technician.TECH_ASSIGNED_DT);
                        cmd.Parameters.AddWithValue("TECH_UNASSIGNED_DT", technician.TECH_UNASSIGNED_DT);
                        cmd.Parameters.AddWithValue("TECH_CREATED_BY", technician.TECH_CREATED_BY);
                        cmd.Parameters.AddWithValue("TECH_CREATED_DT", technician.TECH_CREATED_DT);
                        cmd.Parameters.AddWithValue("TECH_MODIFIED", technician.TECH_MODIFIED);
                        cmd.Parameters.AddWithValue("TECH_DIS_IND", technician.TECH_DIS_IND);

                        try {
                            cmd.Connection.Open();
                            sqlDataReader = cmd.ExecuteReader();
                            returnID = technicianID;
                        } catch (Exception ex) {
                            throw new ApplicationException("Error performing SP_RAID_ENG_TECHNICIANS: ", ex);
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

        public async Task<List<PlanRevisions>> GetPlanRevision(int id) {
            var storedProcName = "SP_RAID_ENG_PLAN_REVISIONS";
            List<PlanRevisions> returnPlanRevisionList = new List<PlanRevisions>();

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
                                    PlanRevisions tempPlanRevision = new PlanRevisions();
                                    if (!reader.IsDBNull(reader.GetOrdinal("EPR_ID"))) { tempPlanRevision.EPR_ID = reader.GetInt32(reader.GetOrdinal("EPR_ID")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("EPR_ENG_ID"))) { tempPlanRevision.EPR_ENG_ID = reader.GetInt32(reader.GetOrdinal("EPR_ENG_ID")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("EPR_MODIFIED"))) { tempPlanRevision.EPR_MODIFIED = reader.GetByte(reader.GetOrdinal("EPR_MODIFIED")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("EPR_PLAN_CHANGE_REC_DT"))) { tempPlanRevision.EPR_PLAN_CHANGE_REC_DT = reader.GetDateTime(reader.GetOrdinal("EPR_PLAN_CHANGE_REC_DT")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("EPR_REQUEST_REC_DT"))) { tempPlanRevision.EPR_REQUEST_REC_DT = reader.GetDateTime(reader.GetOrdinal("EPR_REQUEST_REC_DT")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("EPR_TO_DESIGN_DT"))) { tempPlanRevision.EPR_TO_DESIGN_DT = reader.GetDateTime(reader.GetOrdinal("EPR_TO_DESIGN_DT")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("EPR_COMPLETED_DT"))) { tempPlanRevision.EPR_COMPLETED_DT = reader.GetDateTime(reader.GetOrdinal("EPR_COMPLETED_DT")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("EPR_CREATED_DT"))) { tempPlanRevision.EPR_CREATED_DT = reader.GetDateTime(reader.GetOrdinal("EPR_CREATED_DT")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("EPR_MODIFIED_DT"))) { tempPlanRevision.EPR_MODIFIED_DT = reader.GetDateTime(reader.GetOrdinal("EPR_MODIFIED_DT")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("EPR_DIS_IND"))) { tempPlanRevision.EPR_DIS_IND = reader.GetString(reader.GetOrdinal("EPR_DIS_IND")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("EPR_MODIFIED_BY"))) { tempPlanRevision.EPR_MODIFIED_BY = reader.GetString(reader.GetOrdinal("EPR_MODIFIED_BY")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("EPR_CREATED_BY"))) { tempPlanRevision.EPR_CREATED_BY = reader.GetString(reader.GetOrdinal("EPR_CREATED_BY")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("EPR_REQUESTOR"))) { tempPlanRevision.EPR_REQUESTOR = reader.GetString(reader.GetOrdinal("EPR_REQUESTOR")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("EPR_REQUEST"))) { tempPlanRevision.EPR_REQUEST = reader.GetString(reader.GetOrdinal("EPR_REQUEST")); }

                                    returnPlanRevisionList.Add(tempPlanRevision);
                                }
                            }
                        } catch (Exception ex) {
                            throw new ApplicationException("Error perfoming usp_Eng_PlanRevisions_SelectByID: ", ex);
                        } finally {
                            if (cmd.Connection.State == ConnectionState.Open) {
                                cmd.Connection.Close();
                            }
                        }
                    }
                });
            });

            return returnPlanRevisionList;
        }

        public async Task<string> UpdatePlanRevision(PlanRevisions planRevision) {
            var storedProcName = "SP_RAID_ENG_PLAN_REVISIONS";
            string returnID = "isn't necessary";
            string planRevisionID = "isn't necessary";

            await Task.Run(() => {
                SqlDataReader sqlDataReader;

                var credentials = new UserCredentials(_impersonationDomain, _impersonationUser, _impersonationPassword);
                var logonType = LogonType.NewCredentials;
                Impersonation.RunAsUser(credentials, logonType, () => {
                    using (SqlConnection connection = new SqlConnection(_raidSQLConnectionString)) {
                        SqlCommand cmd = new SqlCommand(storedProcName, connection);
                        cmd.CommandType = CommandType.StoredProcedure;

                        cmd.Parameters.AddWithValue("OpCode", 3);
                        cmd.Parameters.AddWithValue("EPR_PLAN_CHANGE_REC_DT", planRevision.EPR_PLAN_CHANGE_REC_DT);
                        cmd.Parameters.AddWithValue("EPR_REQUEST_REC_DT", planRevision.EPR_REQUEST_REC_DT);
                        cmd.Parameters.AddWithValue("EPR_COMPLETED_DT", planRevision.EPR_COMPLETED_DT);
                        cmd.Parameters.AddWithValue("EPR_TO_DESIGN_DT", planRevision.EPR_TO_DESIGN_DT);
                        cmd.Parameters.AddWithValue("EPR_Modified_By", planRevision.EPR_MODIFIED_BY);
                        cmd.Parameters.AddWithValue("EPR_Modified_Dt", planRevision.EPR_MODIFIED_DT);
                        cmd.Parameters.AddWithValue("EPR_REQUESTOR", planRevision.EPR_REQUESTOR);
                        cmd.Parameters.AddWithValue("EPR_MODIFIED", planRevision.EPR_MODIFIED);
                        cmd.Parameters.AddWithValue("EPR_REQUEST", planRevision.EPR_REQUEST);
                        cmd.Parameters.AddWithValue("EPR_DIS_IND", planRevision.EPR_DIS_IND);

                        try {
                            cmd.Connection.Open();
                            sqlDataReader = cmd.ExecuteReader();
                            returnID = planRevisionID;
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

        public async Task<string> InsertPlanRevision(PlanRevisions planRevision) {
            var storedProcName = "SP_RAID_ENG_PLAN_REVISIONS";
            string returnID = "isn't necessary";
            string planRevisionID = "isn't necessary";

            await Task.Run(() => {
                SqlDataReader sqlDataReader;

                var credentials = new UserCredentials(_impersonationDomain, _impersonationUser, _impersonationPassword);
                var logonType = LogonType.NewCredentials;
                Impersonation.RunAsUser(credentials, logonType, () => {
                    using (SqlConnection connection = new SqlConnection(_raidSQLConnectionString)) {
                        SqlCommand cmd = new SqlCommand(storedProcName, connection);
                        cmd.CommandType = CommandType.StoredProcedure;

                        cmd.Parameters.AddWithValue("OpCode", 1);
                        cmd.Parameters.AddWithValue("Epr_ID", planRevision.EPR_ID);
                        cmd.Parameters.AddWithValue("EPR_ENG_ID", planRevision.EPR_ENG_ID);
                        cmd.Parameters.AddWithValue("Epr_Requestor", planRevision.EPR_REQUESTOR);
                        cmd.Parameters.AddWithValue("Epr_Request", planRevision.EPR_REQUEST);
                        cmd.Parameters.AddWithValue("Epr_To_Design_Dt", planRevision.EPR_TO_DESIGN_DT);
                        cmd.Parameters.AddWithValue("Epr_Completed_Dt", planRevision.EPR_COMPLETED_DT);
                        cmd.Parameters.AddWithValue("EPR_PLAN_CHANGE_REC_DT", planRevision.EPR_PLAN_CHANGE_REC_DT);
                        cmd.Parameters.AddWithValue("EPR_REQUEST_REC_DT", planRevision.EPR_REQUEST_REC_DT);
                        cmd.Parameters.AddWithValue("Epr_Created_Dt", planRevision.EPR_CREATED_DT);
                        cmd.Parameters.AddWithValue("Epr_Created_By", planRevision.EPR_CREATED_BY);
                        cmd.Parameters.AddWithValue("Epr_Modified", planRevision.EPR_MODIFIED);
                        cmd.Parameters.AddWithValue("Epr_Dis_Ind", planRevision.EPR_DIS_IND);

                        try {
                            cmd.Connection.Open();
                            sqlDataReader = cmd.ExecuteReader();
                            returnID = planRevisionID;
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

        public async Task<IEnumerable<PlanFiles>> GetPlanFile(int id) {
            var storedProcName = "SP_RAID_ENG_PLAN_FILE";
            List<PlanFiles> returnPlanFileList = new List<PlanFiles>();

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
                                    PlanFiles tempPlanFiles = new PlanFiles();
                                    if (!reader.IsDBNull(reader.GetOrdinal("EPF_ID"))) { tempPlanFiles.EPF_ID = reader.GetInt32(reader.GetOrdinal("EPF_ID")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("EPF_RJ_ID"))) { tempPlanFiles.EPF_RJ_ID = reader.GetInt32(reader.GetOrdinal("EPF_RJ_ID")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("EPF_BOX"))) { tempPlanFiles.EPF_BOX = reader.GetString(reader.GetOrdinal("EPF_BOX")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("EPF_COUNTY"))) { tempPlanFiles.EPF_COUNTY = reader.GetByte(reader.GetOrdinal("EPF_COUNTY")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("EPF_COUNTY_NAME"))) { tempPlanFiles.EPF_COUNTY_NAME = reader.GetString(reader.GetOrdinal("EPF_COUNTY_NAME")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("EPF_FILE_STATUS"))) { tempPlanFiles.EPF_FILE_STATUS = reader.GetInt32(reader.GetOrdinal("EPF_FILE_STATUS")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("EPF_FILE_STATUS_STRING"))) { tempPlanFiles.EPF_FILE_STATUS_STRING = reader.GetString(reader.GetOrdinal("EPF_FILE_STATUS_STRING")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("EPF_FILE_LOCATION"))) { tempPlanFiles.EPF_FILE_LOCATION = reader.GetInt32(reader.GetOrdinal("EPF_FILE_LOCATION")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("EPF_FILE_LOCATION_STRING"))) { tempPlanFiles.EPF_FILE_LOCATION_STRING = reader.GetString(reader.GetOrdinal("EPF_FILE_LOCATION_STRING")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("EPF_FOLDER_COLOR"))) { tempPlanFiles.EPF_FOLDER_COLOR = reader.GetInt32(reader.GetOrdinal("EPF_FOLDER_COLOR")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("EPF_FOLDER_COLOR_STRING"))) { tempPlanFiles.EPF_FOLDER_COLOR_STRING = reader.GetString(reader.GetOrdinal("EPF_FOLDER_COLOR_STRING")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("EPF_FILE_NUM"))) { tempPlanFiles.EPF_FILE_NUM = reader.GetInt32(reader.GetOrdinal("EPF_FILE_NUM")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("EPF_FILE_PART"))) { tempPlanFiles.EPF_FILE_PART = reader.GetString(reader.GetOrdinal("EPF_FILE_PART")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("EPF_COMMENTS"))) { tempPlanFiles.EPF_COMMENTS = reader.GetString(reader.GetOrdinal("EPF_COMMENTS")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("EPF_CLEARED_SIDE"))) { tempPlanFiles.EPF_CLEARED_SIDE = reader.GetString(reader.GetOrdinal("EPF_CLEARED_SIDE")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("EPF_CLEARED_DT"))) { tempPlanFiles.EPF_CLEARED_DT = reader.GetDateTime(reader.GetOrdinal("EPF_CLEARED_DT")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("EPF_COND_CLEAR_DT"))) { tempPlanFiles.EPF_COND_CLEAR_DT = reader.GetDateTime(reader.GetOrdinal("EPF_COND_CLEAR_DT")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("EPF_MISSING"))) { tempPlanFiles.EPF_MISSING = reader.GetString(reader.GetOrdinal("EPF_MISSING")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("EPF_SCANNED"))) { tempPlanFiles.EPF_SCANNED = reader.GetString(reader.GetOrdinal("EPF_SCANNED")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("EPF_DGN"))) { tempPlanFiles.EPF_DGN = reader.GetString(reader.GetOrdinal("EPF_DGN")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("EPF_PLAN_FILE_MISSING"))) { tempPlanFiles.EPF_PLAN_FILE_MISSING = reader.GetString(reader.GetOrdinal("EPF_PLAN_FILE_MISSING")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("EPF_MicroFilmed"))) { tempPlanFiles.EPF_MicroFilmed = reader.GetString(reader.GetOrdinal("EPF_MicroFilmed")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("EPF_ACTIVE_SIDE"))) { tempPlanFiles.EPF_ACTIVE_SIDE = reader.GetString(reader.GetOrdinal("EPF_ACTIVE_SIDE")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("EPF_TO_SCANNER_DT"))) { tempPlanFiles.EPF_TO_SCANNER_DT = reader.GetDateTime(reader.GetOrdinal("EPF_TO_SCANNER_DT")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("EPF_TRACTS"))) { tempPlanFiles.EPF_TRACTS = reader.GetString(reader.GetOrdinal("EPF_TRACTS")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("EPF_DESCRIPT"))) { tempPlanFiles.EPF_DESCRIPT = reader.GetString(reader.GetOrdinal("EPF_DESCRIPT")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("EPF_CREATED_BY"))) { tempPlanFiles.EPF_CREATED_BY = reader.GetString(reader.GetOrdinal("EPF_CREATED_BY")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("EPF_CREATED_DT"))) { tempPlanFiles.EPF_CREATED_DT = reader.GetDateTime(reader.GetOrdinal("EPF_CREATED_DT")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("EPF_MODIFIED_BY"))) { tempPlanFiles.EPF_MODIFIED_BY = reader.GetString(reader.GetOrdinal("EPF_MODIFIED_BY")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("EPF_MODIFIED_DT"))) { tempPlanFiles.EPF_MODIFIED_DT = reader.GetDateTime(reader.GetOrdinal("EPF_MODIFIED_DT")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("EPF_MODIFIED"))) { tempPlanFiles.EPF_MODIFIED = reader.GetByte(reader.GetOrdinal("EPF_MODIFIED")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("EPF_DIS_IND"))) { tempPlanFiles.EPF_DIS_IND = reader.GetString(reader.GetOrdinal("EPF_DIS_IND")); }

                                    returnPlanFileList.Add(tempPlanFiles);
                                }
                            }
                        } catch (Exception ex) {
                            throw new ApplicationException("Error perfoming usp_Eng_PlanRevisions_SelectByID: ", ex);
                        } finally {
                            if (cmd.Connection.State == ConnectionState.Open) {
                                cmd.Connection.Close();
                            }
                        }
                    }
                });
            });

            return returnPlanFileList;
        }

        public async Task<string> UpdatePlanFile(PlanFiles planFile) {
            var storedProcName = "SP_RAID_ENG_PLAN_FILE";
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
                        cmd.Parameters.AddWithValue("EPF_PLAN_FILE_MISSING", planFile.EPF_PLAN_FILE_MISSING);
                        cmd.Parameters.AddWithValue("EPF_FILE_LOCATION", planFile.EPF_FILE_LOCATION);
                        cmd.Parameters.AddWithValue("EPF_TO_SCANNER_DT", planFile.EPF_TO_SCANNER_DT);
                        cmd.Parameters.AddWithValue("EPF_COND_CLEAR_DT", planFile.EPF_COND_CLEAR_DT);
                        cmd.Parameters.AddWithValue("EPF_FOLDER_COLOR", planFile.EPF_FOLDER_COLOR);
                        cmd.Parameters.AddWithValue("EPF_FILE_STATUS", planFile.EPF_FILE_STATUS);
                        cmd.Parameters.AddWithValue("EPF_MODIFIED_BY", planFile.EPF_MODIFIED_BY);
                        cmd.Parameters.AddWithValue("EPF_MODIFIED_DT", planFile.EPF_MODIFIED_DT);
                        cmd.Parameters.AddWithValue("EPF_CLEARED_DT", planFile.EPF_CLEARED_DT);
                        cmd.Parameters.AddWithValue("EPF_FILE_PART", planFile.EPF_FILE_PART);
                        cmd.Parameters.AddWithValue("EPF_COMMENTS", planFile.EPF_COMMENTS);
                        cmd.Parameters.AddWithValue("EPF_MODIFIED", planFile.EPF_MODIFIED);
                        cmd.Parameters.AddWithValue("EPF_DESCRIPT", planFile.EPF_DESCRIPT);
                        cmd.Parameters.AddWithValue("EPF_FILE_NUM", planFile.EPF_FILE_NUM);
                        cmd.Parameters.AddWithValue("EPF_DIS_IND", planFile.EPF_DIS_IND);
                        cmd.Parameters.AddWithValue("EPF_TRACTS", planFile.EPF_TRACTS);
                        cmd.Parameters.AddWithValue("EPF_COUNTY", planFile.EPF_COUNTY);
                        cmd.Parameters.AddWithValue("EPF_DGN", planFile.EPF_DGN);
                        cmd.Parameters.AddWithValue("EPF_BOX", planFile.EPF_BOX);

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

        public async Task<string> InsertPlanFile(PlanFiles planFile) {
            var storedProcName = "SP_RAID_ENG_PLAN_FILE";
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

                        cmd.Parameters.AddWithValue("OpCode", 1);
                        cmd.Parameters.AddWithValue("EPF_ID", planFile.EPF_ID);
                        cmd.Parameters.AddWithValue("EPF_RJ_ID", planFile.EPF_RJ_ID);
                        cmd.Parameters.AddWithValue("EPF_BOX", planFile.EPF_BOX);
                        cmd.Parameters.AddWithValue("EPF_FILE_NUM", planFile.EPF_FILE_NUM);
                        cmd.Parameters.AddWithValue("EPF_FILE_PART", planFile.EPF_FILE_PART);
                        cmd.Parameters.AddWithValue("EPF_COMMENTS", planFile.EPF_COMMENTS);
                        cmd.Parameters.AddWithValue("EPF_CLEARED_DT", planFile.EPF_CLEARED_DT);
                        cmd.Parameters.AddWithValue("EPF_COND_CLEAR_DT", planFile.EPF_COND_CLEAR_DT);
                        cmd.Parameters.AddWithValue("EPF_FOLDER_COLOR", planFile.EPF_FOLDER_COLOR);
                        cmd.Parameters.AddWithValue("EPF_DGN", planFile.EPF_DGN);
                        cmd.Parameters.AddWithValue("EPF_PLAN_FILE_MISSING", planFile.EPF_PLAN_FILE_MISSING);
                        cmd.Parameters.AddWithValue("EPF_TO_SCANNER_DT", planFile.EPF_TO_SCANNER_DT);
                        cmd.Parameters.AddWithValue("EPF_TRACTS", planFile.EPF_TRACTS);
                        cmd.Parameters.AddWithValue("EPF_DESCRIPT", planFile.EPF_DESCRIPT);
                        cmd.Parameters.AddWithValue("EPF_COUNTY", planFile.EPF_COUNTY);
                        cmd.Parameters.AddWithValue("EPF_FILE_STATUS", planFile.EPF_FILE_STATUS);
                        cmd.Parameters.AddWithValue("EPF_FILE_LOCATION", planFile.EPF_FILE_LOCATION);
                        cmd.Parameters.AddWithValue("EPF_CREATED_BY", planFile.EPF_CREATED_BY);
                        cmd.Parameters.AddWithValue("EPF_CREATED_DT", planFile.EPF_CREATED_DT);
                        cmd.Parameters.AddWithValue("EPF_MODIFIED", planFile.EPF_MODIFIED);
                        cmd.Parameters.AddWithValue("EPF_DIS_IND", planFile.EPF_DIS_IND);

                        try {
                            cmd.Connection.Open();
                            sqlDataReader = cmd.ExecuteReader();
                            returnID = planFileID;
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

        public async Task<List<Engineering>> GetEngineering(int id) {
            var storedProcName = "SP_RAID_ENGINEERING";
            List<Engineering> returnEngineeringList = new List<Engineering>();

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
                                    Engineering tempEngineering = new Engineering();
                                    if (!reader.IsDBNull(reader.GetOrdinal("ENG_ID"))) { tempEngineering.ENG_ID = reader.GetInt32(reader.GetOrdinal("ENG_ID")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("ENG_RC_ID"))) { tempEngineering.ENG_RC_ID = reader.GetInt32(reader.GetOrdinal("ENG_RC_ID")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("ENG_RJ_ID"))) { tempEngineering.ENG_RJ_ID = reader.GetInt32(reader.GetOrdinal("ENG_RJ_ID")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("ENG_STATUS"))) { tempEngineering.ENG_STATUS = reader.GetInt32(reader.GetOrdinal("ENG_STATUS")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("ENG_TRACTS_AMT"))) { tempEngineering.ENG_TRACTS_AMT = reader.GetByte(reader.GetOrdinal("ENG_TRACTS_AMT")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("ENG_CONSULTANT_NAME"))) { tempEngineering.ENG_CONSULTANT_NAME = reader.GetString(reader.GetOrdinal("ENG_CONSULTANT_NAME")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("ENG_REQUEST_ON_DT"))) { tempEngineering.ENG_REQUEST_ON_DT = reader.GetDateTime(reader.GetOrdinal("ENG_REQUEST_ON_DT")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("ENG_REQUEST_TAR_DT"))) { tempEngineering.ENG_REQUEST_TAR_DT = reader.GetDateTime(reader.GetOrdinal("ENG_REQUEST_TAR_DT")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("ENG_CHECKER_TAR_DT"))) { tempEngineering.ENG_CHECKER_TAR_DT = reader.GetDateTime(reader.GetOrdinal("ENG_CHECKER_TAR_DT")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("ENG_CHECKER_ACT_DT"))) { tempEngineering.ENG_CHECKER_ACT_DT = reader.GetDateTime(reader.GetOrdinal("ENG_CHECKER_ACT_DT")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("ENG_TO_CHECKER_TAR_DT"))) { tempEngineering.ENG_TO_CHECKER_TAR_DT = reader.GetDateTime(reader.GetOrdinal("ENG_TO_CHECKER_TAR_DT")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("ENG_TO_CHECKER_ACT_DT"))) { tempEngineering.ENG_TO_CHECKER_ACT_DT = reader.GetDateTime(reader.GetOrdinal("ENG_TO_CHECKER_ACT_DT")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("ENG_CHECKER"))) { tempEngineering.ENG_CHECKER = reader.GetInt32(reader.GetOrdinal("ENG_CHECKER")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("ENG_PERCENT_COMP"))) { tempEngineering.ENG_PERCENT_COMP = reader.GetByte(reader.GetOrdinal("ENG_PERCENT_COMP")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("ENG_TO_DESIGN_TAR_DT"))) { tempEngineering.ENG_TO_DESIGN_TAR_DT = reader.GetDateTime(reader.GetOrdinal("ENG_TO_DESIGN_TAR_DT")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("ENG_TO_DESIGN_ACT_DT"))) { tempEngineering.ENG_TO_DESIGN_ACT_DT = reader.GetDateTime(reader.GetOrdinal("ENG_TO_DESIGN_ACT_DT")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("ENG_REC_FC_PLANS_TAR_DT"))) { tempEngineering.ENG_REC_FC_PLANS_TAR_DT = reader.GetDateTime(reader.GetOrdinal("ENG_REC_FC_PLANS_TAR_DT")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("ENG_CT_ORDER_DT"))) { tempEngineering.ENG_CT_ORDER_DT = reader.GetDateTime(reader.GetOrdinal("ENG_CT_ORDER_DT")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("ENG_CT_DUE_DT"))) { tempEngineering.ENG_CT_DUE_DT = reader.GetDateTime(reader.GetOrdinal("ENG_CT_DUE_DT")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("ENG_CT_REC_DT"))) { tempEngineering.ENG_CT_REC_DT = reader.GetDateTime(reader.GetOrdinal("ENG_CT_REC_DT")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("ENG_CT_CONTACT"))) { tempEngineering.ENG_CT_CONTACT = reader.GetInt32(reader.GetOrdinal("ENG_CT_CONTACT")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("ENG_PURCHASE_MEMO_DT"))) { tempEngineering.ENG_PURCHASE_MEMO_DT = reader.GetDateTime(reader.GetOrdinal("ENG_PURCHASE_MEMO_DT")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("ENG_REC_OFF_PLANS_TAR_DT"))) { tempEngineering.ENG_REC_OFF_PLANS_TAR_DT = reader.GetDateTime(reader.GetOrdinal("ENG_REC_OFF_PLANS_TAR_DT")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("ENG_LEG_TO_CHECKER_TAR_DT"))) { tempEngineering.ENG_LEG_TO_CHECKER_TAR_DT = reader.GetDateTime(reader.GetOrdinal("ENG_LEG_TO_CHECKER_TAR_DT")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("ENG_REC_OFF_PLANS_ACT_DT"))) { tempEngineering.ENG_REC_OFF_PLANS_ACT_DT = reader.GetDateTime(reader.GetOrdinal("ENG_REC_OFF_PLANS_ACT_DT")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("ENG_LEG_TO_CHECKER_ACT_DT"))) { tempEngineering.ENG_LEG_TO_CHECKER_ACT_DT = reader.GetDateTime(reader.GetOrdinal("ENG_LEG_TO_CHECKER_ACT_DT")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("ENG_LEG_CHECKER_DUE_DT"))) { tempEngineering.ENG_LEG_CHECKER_DUE_DT = reader.GetDateTime(reader.GetOrdinal("ENG_LEG_CHECKER_DUE_DT")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("ENG_LEG_CHECKER"))) { tempEngineering.ENG_LEG_CHECKER = reader.GetInt32(reader.GetOrdinal("ENG_LEG_CHECKER")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("ENG_LEG_CHECKER_ACT_DT"))) { tempEngineering.ENG_LEG_CHECKER_ACT_DT = reader.GetDateTime(reader.GetOrdinal("ENG_LEG_CHECKER_ACT_DT")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("ENG_RW_FINAL_MEETING_DT"))) { tempEngineering.ENG_RW_FINAL_MEETING_DT = reader.GetDateTime(reader.GetOrdinal("ENG_RW_FINAL_MEETING_DT")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("ENG_REC_FINAL_PLANS_TAR_DT"))) { tempEngineering.ENG_REC_FINAL_PLANS_TAR_DT = reader.GetDateTime(reader.GetOrdinal("ENG_REC_FINAL_PLANS_TAR_DT")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("ENG_REC_FINAL_PLANS_ACT_DT"))) { tempEngineering.ENG_REC_FINAL_PLANS_ACT_DT = reader.GetDateTime(reader.GetOrdinal("ENG_REC_FINAL_PLANS_ACT_DT")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("ENG_TO_APPRAISAL_TAR_DT"))) { tempEngineering.ENG_TO_APPRAISAL_TAR_DT = reader.GetDateTime(reader.GetOrdinal("ENG_TO_APPRAISAL_TAR_DT")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("ENG_TO_APPRAISAL_ACT_DT"))) { tempEngineering.ENG_TO_APPRAISAL_ACT_DT = reader.GetDateTime(reader.GetOrdinal("ENG_TO_APPRAISAL_ACT_DT")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("ENG_TO_JOAN_IND"))) { tempEngineering.ENG_TO_JOAN_IND = reader.GetString(reader.GetOrdinal("ENG_TO_JOAN_IND")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("ENG_CREATED_BY"))) { tempEngineering.ENG_CREATED_BY = reader.GetString(reader.GetOrdinal("ENG_CREATED_BY")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("ENG_CREATED_DT"))) { tempEngineering.ENG_CREATED_DT = reader.GetDateTime(reader.GetOrdinal("ENG_CREATED_DT")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("ENG_DIS_IND"))) { tempEngineering.ENG_DIS_IND = reader.GetString(reader.GetOrdinal("ENG_DIS_IND")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("ENG_MODIFIED_BY"))) { tempEngineering.ENG_MODIFIED_BY = reader.GetString(reader.GetOrdinal("ENG_MODIFIED_BY")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("ENG_MODIFIED_DT"))) { tempEngineering.ENG_MODIFIED_DT = reader.GetDateTime(reader.GetOrdinal("ENG_MODIFIED_DT")); }
                                    if (!reader.IsDBNull(reader.GetOrdinal("ENG_MODIFIED"))) { tempEngineering.ENG_MODIFIED = reader.GetByte(reader.GetOrdinal("ENG_MODIFIED")); }

                                    returnEngineeringList.Add(tempEngineering);
                                }

                            }

                        } catch (Exception ex) {
                            throw new ApplicationException("Error perfoming SP_RAID_ENGINEERING: ", ex);
                        } finally {
                            if (cmd.Connection.State == ConnectionState.Open) {
                                cmd.Connection.Close();
                            }
                        }
                    }
                });
            });

            return returnEngineeringList;
        }

        public async Task<string> UpdateEngineering(Engineering engineering) {
            var storedProcName = "SP_RAID_ENGINEERING";
            string returnID = "isn't necessary";
            string engineeringID = "isn't necessary";

            await Task.Run(() => {
                SqlDataReader sqlDataReader;

                var credentials = new UserCredentials(_impersonationDomain, _impersonationUser, _impersonationPassword);
                var logonType = LogonType.NewCredentials;
                Impersonation.RunAsUser(credentials, logonType, () => {
                    using (SqlConnection connection = new SqlConnection(_raidSQLConnectionString)) {
                        SqlCommand cmd = new SqlCommand(storedProcName, connection);
                        cmd.CommandType = CommandType.StoredProcedure;

                        cmd.Parameters.AddWithValue("OpCode", 3);
                        cmd.Parameters.AddWithValue("ENG_REC_FINAL_PLANS_TAR_DT", engineering.ENG_REC_FINAL_PLANS_TAR_DT);
                        cmd.Parameters.AddWithValue("ENG_REC_FINAL_PLANS_ACT_DT", engineering.ENG_REC_FINAL_PLANS_ACT_DT);
                        cmd.Parameters.AddWithValue("ENG_LEG_TO_CHECKER_TAR_DT", engineering.ENG_LEG_TO_CHECKER_TAR_DT);
                        cmd.Parameters.AddWithValue("ENG_LEG_TO_CHECKER_ACT_DT", engineering.ENG_LEG_TO_CHECKER_ACT_DT);
                        cmd.Parameters.AddWithValue("ENG_REC_OFF_PLANS_TAR_DT", engineering.ENG_REC_OFF_PLANS_TAR_DT);
                        cmd.Parameters.AddWithValue("ENG_REC_OFF_PLANS_ACT_DT", engineering.ENG_REC_OFF_PLANS_ACT_DT);
                        cmd.Parameters.AddWithValue("ENG_RW_FINAL_MEETING_DT", engineering.ENG_RW_FINAL_MEETING_DT);
                        cmd.Parameters.AddWithValue("ENG_TO_APPRAISAL_TAR_DT", engineering.ENG_TO_APPRAISAL_TAR_DT);
                        cmd.Parameters.AddWithValue("ENG_TO_APPRAISAL_ACT_DT", engineering.ENG_TO_APPRAISAL_ACT_DT); 
                        cmd.Parameters.AddWithValue("ENG_REC_FC_PLANS_ACT_DT", engineering.ENG_REC_FC_PLANS_ACT_DT); 
                        cmd.Parameters.AddWithValue("ENG_REC_FC_PLANS_TAR_DT", engineering.ENG_REC_FC_PLANS_TAR_DT); 
                        cmd.Parameters.AddWithValue("ENG_LEG_CHECKER_DUE_DT", engineering.ENG_LEG_CHECKER_DUE_DT);
                        cmd.Parameters.AddWithValue("ENG_LEG_CHECKER_ACT_DT", engineering.ENG_LEG_CHECKER_ACT_DT); 
                        cmd.Parameters.AddWithValue("ENG_TO_CHECKER_TAR_DT", engineering.ENG_TO_CHECKER_TAR_DT); 
                        cmd.Parameters.AddWithValue("ENG_TO_CHECKER_ACT_DT", engineering.ENG_TO_CHECKER_ACT_DT); 
                        cmd.Parameters.AddWithValue("ENG_PURCHASE_MEMO_DT", engineering.ENG_PURCHASE_MEMO_DT); 
                        cmd.Parameters.AddWithValue("ENG_TO_DESIGN_TAR_DT", engineering.ENG_TO_DESIGN_TAR_DT); 
                        cmd.Parameters.AddWithValue("ENG_TO_DESIGN_ACT_DT", engineering.ENG_TO_DESIGN_ACT_DT); 
                        cmd.Parameters.AddWithValue("ENG_REQUEST_TAR_DT", engineering.ENG_REQUEST_TAR_DT);
                        cmd.Parameters.AddWithValue("ENG_CHECKER_TAR_DT", engineering.ENG_CHECKER_TAR_DT);
                        cmd.Parameters.AddWithValue("ENG_CHECKER_ACT_DT", engineering.ENG_CHECKER_ACT_DT); 
                        cmd.Parameters.AddWithValue("ENG_REQUEST_ON_DT", engineering.ENG_REQUEST_ON_DT); 
                        cmd.Parameters.AddWithValue("ENG_PERCENT_COMP", engineering.ENG_PERCENT_COMP); 
                        cmd.Parameters.AddWithValue("ENG_LEG_CHECKER", engineering.ENG_LEG_CHECKER); 
                        cmd.Parameters.AddWithValue("ENG_MODIFIED_BY", engineering.ENG_MODIFIED_BY);
                        cmd.Parameters.AddWithValue("ENG_MODIFIED_DT", engineering.ENG_MODIFIED_DT); 
                        cmd.Parameters.AddWithValue("ENG_TO_JOAN_IND", engineering.ENG_TO_JOAN_IND); 
                        cmd.Parameters.AddWithValue("ENG_CT_ORDER_DT", engineering.ENG_CT_ORDER_DT); 
                        cmd.Parameters.AddWithValue("ENG_CT_CONTACT", engineering.ENG_CT_CONTACT); 
                        cmd.Parameters.AddWithValue("ENG_TRACTS_AMT", engineering.ENG_TRACTS_AMT); 
                        cmd.Parameters.AddWithValue("ENG_MODIFIED", engineering.ENG_MODIFIED);
                        cmd.Parameters.AddWithValue("ENG_CT_DUE_DT", engineering.ENG_CT_DUE_DT);
                        cmd.Parameters.AddWithValue("ENG_CT_REC_DT", engineering.ENG_CT_REC_DT);
                        cmd.Parameters.AddWithValue("ENG_CHECKER", engineering.ENG_CHECKER);
                        cmd.Parameters.AddWithValue("ENG_DIS_IND", engineering.ENG_DIS_IND);
                        cmd.Parameters.AddWithValue("ENG_STATUS", engineering.ENG_STATUS);
                        cmd.Parameters.AddWithValue("ENG_RJ_ID", engineering.ENG_RJ_ID);
                        cmd.Parameters.AddWithValue("ENG_RC_ID", engineering.ENG_RC_ID);

                        try {
                            cmd.Connection.Open();
                            sqlDataReader = cmd.ExecuteReader();
                            returnID = engineeringID;
                        } catch (Exception ex) {
                            throw new ApplicationException("Error performing SP_RAID_ENG_TECHNICIANS: ", ex);
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

        public async Task<string> InsertEngineering(Engineering engineering) {
            var storedProcName = "SP_RAID_ENGINEERING";
            string returnID = "isn't necessary";
            string engineeringID = "isn't necessary";

            await Task.Run(() => {
                SqlDataReader sqlDataReader;

                var credentials = new UserCredentials(_impersonationDomain, _impersonationUser, _impersonationPassword);
                var logonType = LogonType.NewCredentials;
                Impersonation.RunAsUser(credentials, logonType, () => {
                    using (SqlConnection connection = new SqlConnection(_raidSQLConnectionString)) {
                        SqlCommand cmd = new SqlCommand(storedProcName, connection);
                        cmd.CommandType = CommandType.StoredProcedure;

                        cmd.Parameters.AddWithValue("OpCode", 1);
                        cmd.Parameters.AddWithValue("ENG_ID", engineering.ENG_ID);
                        cmd.Parameters.AddWithValue("ENG_RC_ID", engineering.ENG_RC_ID);
                        cmd.Parameters.AddWithValue("ENG_RJ_ID", engineering.ENG_RJ_ID);
                        cmd.Parameters.AddWithValue("ENG_STATUS", engineering.ENG_STATUS);
                        cmd.Parameters.AddWithValue("ENG_TRACTS_AMT", engineering.ENG_TRACTS_AMT);
                        cmd.Parameters.AddWithValue("ENG_PERCENT_COMP", engineering.ENG_PERCENT_COMP);
                        cmd.Parameters.AddWithValue("ENG_REQUEST_ON_DT", engineering.ENG_REQUEST_ON_DT);
                        cmd.Parameters.AddWithValue("ENG_REQUEST_TAR_DT", engineering.ENG_REQUEST_TAR_DT);
                        cmd.Parameters.AddWithValue("ENG_CHECKER_TAR_DT", engineering.ENG_CHECKER_TAR_DT);
                        cmd.Parameters.AddWithValue("ENG_CHECKER_ACT_DT", engineering.ENG_CHECKER_ACT_DT);
                        cmd.Parameters.AddWithValue("ENG_TO_CHECKER_TAR_DT", engineering.ENG_TO_CHECKER_TAR_DT);
                        cmd.Parameters.AddWithValue("ENG_TO_CHECKER_ACT_DT", engineering.ENG_TO_CHECKER_ACT_DT);
                        cmd.Parameters.AddWithValue("ENG_CHECKER", engineering.ENG_CHECKER);
                        cmd.Parameters.AddWithValue("ENG_TO_DESIGN_TAR_DT", engineering.ENG_TO_DESIGN_TAR_DT);
                        cmd.Parameters.AddWithValue("ENG_TO_DESIGN_ACT_DT", engineering.ENG_TO_DESIGN_ACT_DT);
                        cmd.Parameters.AddWithValue("ENG_REC_FC_PLANS_TAR_DT", engineering.ENG_REC_FC_PLANS_TAR_DT);
                        cmd.Parameters.AddWithValue("ENG_REC_FC_PLANS_ACT_DT", engineering.ENG_REC_FC_PLANS_ACT_DT);
                        cmd.Parameters.AddWithValue("ENG_CT_ORDER_DT", engineering.ENG_CT_ORDER_DT);
                        cmd.Parameters.AddWithValue("ENG_CT_DUE_DT", engineering.ENG_CT_DUE_DT);
                        cmd.Parameters.AddWithValue("ENG_CT_REC_DT", engineering.ENG_CT_REC_DT);
                        cmd.Parameters.AddWithValue("ENG_CT_CONTACT", engineering.ENG_CT_CONTACT);
                        cmd.Parameters.AddWithValue("ENG_PURCHASE_MEMO_DT", engineering.ENG_PURCHASE_MEMO_DT);
                        cmd.Parameters.AddWithValue("ENG_REC_OFF_PLANS_TAR_DT", engineering.ENG_REC_OFF_PLANS_TAR_DT);
                        cmd.Parameters.AddWithValue("ENG_REC_OFF_PLANS_ACT_DT", engineering.ENG_REC_OFF_PLANS_ACT_DT);
                        cmd.Parameters.AddWithValue("ENG_LEG_TO_CHECKER_TAR_DT", engineering.ENG_LEG_TO_CHECKER_TAR_DT);
                        cmd.Parameters.AddWithValue("ENG_LEG_TO_CHECKER_ACT_DT", engineering.ENG_LEG_TO_CHECKER_ACT_DT);
                        cmd.Parameters.AddWithValue("ENG_LEG_CHECKER_DUE_DT", engineering.ENG_LEG_CHECKER_DUE_DT);
                        cmd.Parameters.AddWithValue("ENG_LEG_CHECKER", engineering.ENG_LEG_CHECKER);
                        cmd.Parameters.AddWithValue("ENG_LEG_CHECKER_ACT_DT", engineering.ENG_LEG_CHECKER_ACT_DT);
                        cmd.Parameters.AddWithValue("ENG_RW_FINAL_MEETING_DT", engineering.ENG_RW_FINAL_MEETING_DT);
                        cmd.Parameters.AddWithValue("ENG_REC_FINAL_PLANS_TAR_DT", engineering.ENG_REC_FINAL_PLANS_TAR_DT);
                        cmd.Parameters.AddWithValue("ENG_REC_FINAL_PLANS_ACT_DT", engineering.ENG_REC_FINAL_PLANS_ACT_DT);
                        cmd.Parameters.AddWithValue("ENG_TO_APPRAISAL_TAR_DT", engineering.ENG_TO_APPRAISAL_TAR_DT);
                        cmd.Parameters.AddWithValue("ENG_TO_APPRAISAL_ACT_DT", engineering.ENG_TO_APPRAISAL_ACT_DT);
                        cmd.Parameters.AddWithValue("ENG_TO_JOAN_IND", engineering.ENG_TO_JOAN_IND);
                        cmd.Parameters.AddWithValue("ENG_CREATED_BY", engineering.ENG_CREATED_BY);
                        cmd.Parameters.AddWithValue("ENG_CREATED_DT", engineering.ENG_CREATED_DT);
                        cmd.Parameters.AddWithValue("ENG_MODIFIED", engineering.ENG_MODIFIED);
                        cmd.Parameters.AddWithValue("ENG_DIS_IND", engineering.ENG_DIS_IND);
                        
                        try {
                            cmd.Connection.Open();
                            sqlDataReader = cmd.ExecuteReader();
                            returnID = engineeringID;
                        } catch (Exception ex) {
                            throw new ApplicationException("Error performing SP_RAID_ENGINEERING: ", ex);
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
