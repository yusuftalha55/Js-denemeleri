using Microsoft.AspNetCore.Mvc;

namespace basitwebapi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class OgrenciController : ControllerBase
    {
        [HttpGet]
        public string Get()
        {
            return "1";
        }
    }
}
