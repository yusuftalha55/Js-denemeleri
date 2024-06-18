using Microsoft.AspNetCore.Mvc;

namespace MyTwitterBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetUsers()
        {
            return Ok(new string[] { "User1", "User2" });
        }
    }
}
