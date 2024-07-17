using Microsoft.EntityFrameworkCore;

namespace WebApplicationTwitter.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Content>(entity =>
            {
                entity.HasKey(e => e.ContentId);
                // ContentId, UserId ve ContentText sütunları için herhangi bir kısıtlama eklenmediği için varsayılan olarak NOT NULL olacak.
            });

            modelBuilder.Entity<Kullanici>(entity =>
            {
                entity.HasKey(e => e.Idno);
                // Idno, Kullaniciadi ve Nickname sütunları için herhangi bir kısıtlama eklenmediği için varsayılan olarak NOT NULL olacak.
            });
        }

        public DbSet<Content> Contents { get; set; }
        public DbSet<Kullanici> Kullanicilar { get; set; }
    }

    public class Content
    {
        public int ContentId { get; set; }
        public int UserId { get; set; }
        public string ContentText { get; set; }
    }

    public class Kullanici
    {
        public int Idno { get; set; }
        public string Kullaniciadi { get; set; }
        public string Nickname { get; set; }
    }
}




