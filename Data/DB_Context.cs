using SimpleImpersonation;
using System;
using System.Data;
using System.Data.SqlClient;

namespace RaidProject.Data
{

    public partial class DB_Context
    { //Example Database Service
        private readonly int _timeout;

        private readonly string _connectionString;

        private readonly UserCredentials _credentials;

        public DB_Context(string connectionString, UserCredentials credentials, int timeout)
        {
            _connectionString = connectionString;
            _credentials = credentials;
            _timeout = timeout;
        }

        private void DatabaseConnection(Action<SqlConnection> action)
        {
            Impersonation.RunAsUser(_credentials, LogonType.NewCredentials, () =>
            {
                using (SqlConnection conn = new SqlConnection(_connectionString))
                {
                    try
                    {
                        conn.Open();
                        action.Invoke(conn);
                    }
                    catch
                    {
                        throw;
                    }
                    finally
                    {
                        if (conn.State != ConnectionState.Closed)
                            conn.Close();
                    }
                }
            });
        }
    }
}