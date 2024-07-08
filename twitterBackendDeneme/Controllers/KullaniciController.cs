public class KullaniciController : ControllerBase
{
    private readonly YourDbContext _context;

    public KullaniciController(YourDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Kullanici>>> Get()
    {
        return await _context.Kullanici.ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Kullanici>> Get(int id)
    {
        var kullanici = await _context.Kullanici.FindAsync(id);
        if (kullanici == null)
        {
            return NotFound();
        }
        return kullanici;
    }

    [HttpPost]
    public async Task<ActionResult<Kullanici>> Post(Kullanici yeniKullanici)
    {
        _context.Kullanici.Add(yeniKullanici);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(Get), new { id = yeniKullanici.Id }, yeniKullanici);
    }
}



