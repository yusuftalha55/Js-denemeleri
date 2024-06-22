using Microsoft.AspNetCore.Mvc;
using basitwebapi.Models;
using System.Collections.Generic;

namespace basitwebapi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class OgrenciController : ControllerBase
    {
        private static List<Ogrenci> _ogrenciler = new List<Ogrenci>
        {
            new Ogrenci { Id = 1, Isim = "Ali Veli", Yas = 20, Sinif = "10A" },
            new Ogrenci { Id = 2, Isim = "Ayşe Yılmaz", Yas = 19, Sinif = "11B" },
            new Ogrenci { Id = 3, Isim = "Mehmet Demir", Yas = 21, Sinif = "12C" }
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
    }
}

