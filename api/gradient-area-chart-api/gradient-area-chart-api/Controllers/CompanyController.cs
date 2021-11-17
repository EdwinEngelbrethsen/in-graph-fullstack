using gradient_area_chart_data.Interfaces;
using gradient_area_chart_data.Models;
using gradient_area_chart_data.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace gradient_area_chart_api.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class CompanyController : ControllerBase {

        private CompanyRepository companies = new CompanyRepository();

        [HttpGet]
        public ActionResult<IEnumerable<Company>> GetAllCompanies() {
            return companies.GetAllCompanies();
        }



        [HttpGet("{id}")]
        public ActionResult<Company> GetCompany(int id) {

            var company = companies.GetCompany(id);

            if (company == null) {
                return NotFound();
            }
            return company;
        }

    }
}
