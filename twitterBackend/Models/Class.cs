using System.ComponentModel.DataAnnotations;

namespace twitterBackend.Models
{
    public class Class
    {
        [Key]
        public int Id { get; set; } = null!;

        public string username { get; set; } null!;

        public string nickname { get; set; } null!;
    }
}
