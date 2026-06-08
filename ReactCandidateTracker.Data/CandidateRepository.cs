using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReactCandidateTracker.Data
{
    public class Candidate
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        [AllowNull]
        public string Notes { get; set; }
        public Status Status { get; set; }
    }

    public enum Status
    {
        Pending,
        Confirmed,
        Refused
    }

    public class CandidateRepository
    {
        public CandidateRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        private readonly string _connectionString;

        public List<Candidate> GetByStatus(Status status)
        {
            using var ctx = new CandidateDataContext(_connectionString);
            return ctx.Candidates.Where(c => c.Status == status).ToList();
        }

        public void AddCandidate(Candidate c)
        {
           using var ctx = new CandidateDataContext(_connectionString);
            ctx.Candidates.Add(c);
            ctx.SaveChanges();
        }
        public void ChangeStatus(int candidateId,Status status)
        {
            using var ctx = new CandidateDataContext(_connectionString);
            ctx.Database.ExecuteSqlInterpolated($"UPDATE Candidates SET status = {status} WHERE id = {candidateId}");

            //Candidate current = ctx.Candidates.FirstOrDefault(c => c.Id == candidateId);
            //current.Status = status;
            //ctx.SaveChanges();
        }

        public int[] GetStatusCounts()
        {
            using var ctx = new CandidateDataContext(_connectionString);
            int pendingCount = ctx.Candidates.Where(c => c.Status == Status.Pending).Count();
            int confirmedCount = ctx.Candidates.Where(c => c.Status == Status.Confirmed).Count();
            int refusedCount = ctx.Candidates.Where(c => c.Status == Status.Refused).Count();
            int[] counts= [pendingCount, confirmedCount, refusedCount];
            return counts;
        }
    }
}
