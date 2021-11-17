using gradient_area_chart_data.Interfaces;
using gradient_area_chart_data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace gradient_area_chart_data.Repositories {
    public class IndividualRepository : IIndividualRepository {

        public List<Individual> individuals = new List<Individual>() {
            new Individual {Id = 1, Name = "Ivan", Surname = "Malkov", Gender = Gender.male, MeetingDate = new DateTime(2019, 08, 24)}
        };

        public List<Individual> GetAllIndividual() {
            return individuals;
        }


        
        public Individual GetIndividual(int id) {
            return individuals.FirstOrDefault(x => x.Id == id);
        }
    }
}
