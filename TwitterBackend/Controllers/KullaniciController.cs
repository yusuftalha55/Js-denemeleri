using basitwebapi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace basitwebapi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class KullaniciController : ControllerBase
    {
        private static List<Kullanici> _kullanicilar = new List<Kullanici>
        {
            new Kullanici { Id = 1, KullaniciAdi = "Ali Veli", Yas = 20, NickName = "AliV", ProfilFoto = "http://example.com/ali.jpg" },
            new Kullanici { Id = 2, KullaniciAdi = "Ayşe Yılmaz", Yas = 19, NickName = "AyseY", ProfilFoto = "http://example.com/ayse.jpg" },
            new Kullanici { Id = 3, KullaniciAdi = "Mehmet Demir", Yas = 21, NickName = "MehmetD", ProfilFoto = "http://example.com/mehmet.jpg" }
        };

        [HttpGet]
        public IEnumerable<Kullanici> Get()
        {
            return _kullanicilar;
        }

        [HttpGet("{id}")]
        public ActionResult<Kullanici> Get(int id)
        {
            var kullanici = _kullanicilar.Find(o => o.Id == id);
            if (kullanici == null)
            {
                return NotFound();
            }
            return kullanici;
        }

        [HttpPost]
        public ActionResult<Kullanici> Post(Kullanici yeniKullanici)
        {
            yeniKullanici.Id = _kullanicilar.Any() ? _kullanicilar.Max(o => o.Id) + 1 : 1;
            _kullanicilar.Add(yeniKullanici);
            return CreatedAtAction(nameof(Get), new { id = yeniKullanici.Id }, yeniKullanici);
        }

        [HttpPost("upload")]
        public async Task<IActionResult> UploadProfilePhoto(IFormFile file)
        {
            if (file == null || file.Length == 0)
            {
                return BadRequest("Dosya yüklenemedi.");
            }

            var uploadsFolderPath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot/images");
            if (!Directory.Exists(uploadsFolderPath))
            {
                Directory.CreateDirectory(uploadsFolderPath);
            }

            var path = Path.Combine(uploadsFolderPath, file.FileName);

            using (var stream = new FileStream(path, FileMode.Create))
            {
                await file.CopyToAsync(stream);
            }

            var url = $"{Request.Scheme}://{Request.Host}/images/{file.FileName}";

            return Ok(new { url });
        }
    }
}


