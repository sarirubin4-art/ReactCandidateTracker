using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReactCandidateTracker.Data;

namespace ReactCandidateTracker.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CandidateController : ControllerBase
    {
        private readonly string _connectionString;
        public CandidateController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [HttpGet("getcandidates")]
        public List<Candidate>GetCandidates(Status status)
        {
            var repo = new CandidateRepository(_connectionString);
            return repo.GetByStatus(status);
        }

        [HttpGet("getcandidate")]
        public Candidate GetCandidate(int id)
        {
            var repo = new CandidateRepository(_connectionString);
            return repo.GetCandidate(id);
        }

        [HttpPost("addcandidate")]
        public void AddCandidate(Candidate candidate)
        {
            var repo = new CandidateRepository(_connectionString);
            if (candidate.Notes == null)
            {
                candidate.Notes = "N/A";
            }
            repo.AddCandidate(candidate);
        }

        [HttpPost("updatestatus")]
        public void UpdateStatus(int candidateId, Status status)
        {
            var repo = new CandidateRepository(_connectionString);
            repo.ChangeStatus(candidateId, status);
        }

        [HttpGet("getstatuscounts")]
        public CountsObj GetStatusCounts()
        {
            var repo = new CandidateRepository(_connectionString);
            var counts = repo.GetStatusCounts();
            return counts;
        }
    }
}
