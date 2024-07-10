using System.ComponentModel.DataAnnotations;

namespace twitterBackend.Models
{
    public class Kullanici
    {
        [Key]
        public int Idno { get; set; }

        [Required]
        [MaxLength(255)]
        public string KullaniciAdi { get; set; }

        [Required]
        [MaxLength(255)]
        public string Nickname { get; set; }
    }
}


