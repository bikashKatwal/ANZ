using ANZ.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace ANZ_WebApp.Controllers
{
    [Route("GetData")]
    [ApiController]
    public class ProposalsController : ControllerBase
    {
        protected readonly IProposalsService _proposalsService;

        public ProposalsController(IProposalsService proposalsService)
        {
            _proposalsService = proposalsService;
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<IActionResult> GetAllProposals() {
            var pricingTools = await _proposalsService.GetAllProposals();
            return Ok(pricingTools);
        }
    }
}
