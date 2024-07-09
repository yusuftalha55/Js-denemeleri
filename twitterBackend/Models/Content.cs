namespace twitterBackend.Models
{
    public class Content
    {
        public int ContentId { get; set; }
        public int UserId { get; set; }
        public string ContentText { get; set; }

        public User User { get; set; }
    }
}

