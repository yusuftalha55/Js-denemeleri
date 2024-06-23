using basitwebapi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;

namespace basitwebapi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class OgrenciController : ControllerBase
    {
        private static List<Ogrenci> _ogrenciler = new List<Ogrenci>
        {
            new Ogrenci { Id = 1, KullaniciAdi = "Ali Veli", Yas = 20, NickName = "AliV", ProfilFoto = "http://example.com/ali.jpg" },
            new Ogrenci { Id = 2, KullaniciAdi = "Ayşe Yılmaz", Yas = 19, NickName = "AyseY", ProfilFoto = "http://example.com/ayse.jpg" },
            new Ogrenci { Id = 3, KullaniciAdi = "Mehmet Demir", Yas = 21, NickName = "MehmetD", ProfilFoto = "http://example.com/mehmet.jpg" }
        };

        [HttpGet]
        public IEnumerable<Ogrenci> Get()
        {
            return _ogrenciler;
        }

        [HttpGet("{id}")]
        public ActionResult<Ogrenci> Get(int id)
        {
            var ogrenci = _ogrenciler.Find(o => o.Id == id);
            if (ogrenci == null)
            {
                return NotFound();
            }
            return ogrenci;
        }

        [HttpPost]
        public ActionResult<Ogrenci> Post(Ogrenci yeniOgrenci)
        {
            yeniOgrenci.Id = _ogrenciler.Count + 1;
            _ogrenciler.Add(yeniOgrenci);
            return CreatedAtAction(nameof(Get), new { id = yeniOgrenci.Id }, yeniOgrenci);
        }

        [HttpPost("upload")]
        public async Task<IActionResult> UploadProfilePhoto(IFormFile file)
        {
            if (file == null || file.Length == 0)
            {
                return BadRequest("Dosya yüklenemedi.");
            }

            var path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot/images", file.FileName);

            using (var stream = new FileStream(path, FileMode.Create))
            {
                await file.CopyToAsync(stream);
            }

            var url = $"{Request.Scheme}://{Request.Host}/images/{file.FileName}";

            return Ok(new { url });
        }
    }
}



