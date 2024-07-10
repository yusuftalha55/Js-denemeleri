using System.ComponentModel.DataAnnotations;

namespace twitterBackend.Models
{
    public class Content
    {
        [Key]
        public int ContentId { get; set; }

        [Required]
        public int UserId { get; set; }

        [Required]
        public string ContentText { get; set; }
    }
}

