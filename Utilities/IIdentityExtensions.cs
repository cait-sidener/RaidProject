using System.DirectoryServices;
using System.Drawing;
using System.IO;
using System.Security.Principal;

namespace RaidProject.Utilities
{

    public static class IIdentityExtensions
    {

        private static SearchResult RetreiveUser(IIdentity identity)
        {
            DirectoryEntry directoryEntry = new DirectoryEntry("LDAP://ou=Bureaus and Offices,dc=ksdot,dc=org");
            DirectorySearcher directorySearcher = new DirectorySearcher(directoryEntry)
            {
                Filter = $"(&(SAMAccountName={identity.GetAccountName()}))"
            };
            return directorySearcher.FindOne();
        }

        public static string GetAccountName(this IIdentity identity) => identity.Name.Substring(identity.Name.LastIndexOf(@"\") + 1);

        public static string GetDisplayName(this IIdentity identity)
        {
            SearchResult user = RetreiveUser(identity);
            return (user.Properties["Name"][0] as string).Replace('.', ' ');
        }

        public static Bitmap GetUserPicture(this IIdentity identity)
        {
            SearchResult user = RetreiveUser(identity);
            byte[] bytes = user.Properties["thumbnailPhoto"][0] as byte[];
            using (MemoryStream ms = new MemoryStream(bytes))
                return new Bitmap(ms);
        }
    }
}