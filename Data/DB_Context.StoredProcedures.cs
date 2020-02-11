using System.Data;
using System.Data.SqlClient;

namespace RaidProject.Data
{

    public partial class DB_Context
    {  //Example Database Service Stored Procedures

        public object GetCounties()
        {
            object counties = null;
            DatabaseConnection((conn) =>
            {
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandTimeout = _timeout;
                    cmd.CommandText = @"dbo.GetCounties";
                    cmd.CommandType = CommandType.StoredProcedure;
                    using (SqlDataReader dr = cmd.ExecuteReader())
                    {
                        if (dr.HasRows)
                            counties = null;
                    }
                }
            });
            return counties;
        }
    }
}