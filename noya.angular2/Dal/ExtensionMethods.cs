using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace noya.angular2.Dal
{
    public static class ExtensionMethods
    {
        public static T IsNUll<T>(this SqlDataReader reader, string columnName, T replacmentValue)
        {
            try
            {
                var obj = reader[columnName];
                var converted = Convert.ChangeType(obj, typeof(T));
                return (T)converted;
            }
            catch (Exception)
            {
                return replacmentValue;

            }

        }
    }
}