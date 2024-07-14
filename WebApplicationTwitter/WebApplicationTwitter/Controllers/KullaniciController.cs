using Microsoft.AspNetCore.Mvc;
using WebApplicationTwitter.Data;
using System.Linq;

namespace WebApplicationTwitter.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class KullaniciController : ControllerBase
    {
        private readonly AppDbContext _context;

        public KullaniciController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetKullanicilar()
        {
            var kullanicilar = _context.Kullanicilar.ToList();
            return Ok(kullanicilar);
        }
    }
}


