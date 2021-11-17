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
    public class IndividualController : ControllerBase {

        private IndividualRepository individuals = new IndividualRepository();

        /*public IndividualController(IndividualRepository _individuals) {
            this.individuals = _individuals;
        }*/

        [HttpGet]
        public ActionResult<IEnumerable<Individual>> GetAllIndividual() {
            return individuals.GetAllIndividual();
        }

        [HttpGet("{id}")]
        public ActionResult<Individual> GetIndividual(int id) {

            var individual = individuals.GetIndividual(id);

            if (individual == null) {
                return NotFound();
            }

            return individual;
        }
    }
}
