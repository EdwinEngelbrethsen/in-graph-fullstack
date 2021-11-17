using gradient_area_chart_data.Interfaces;
using gradient_area_chart_data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace gradient_area_chart_data.Repositories {
    public class CompanyRepository : ICompanyRepository {

        public List<Company> companies = new List<Company>() {
            new Company { Id = 1, Name = "Google", Advisor = "Adam Smith", MeetingDate = new DateTime(2021, 10, 31), Gender = Gender.male},
            new Company { Id = 2, Name = "Netflix", Advisor = "Simen Newton", MeetingDate = new DateTime(2021, 04, 11), Gender = Gender.female}
        };

        public List<Company> GetAllCompanies() {
            return companies;
        }

        public Company GetCompany(int id) {
            return companies.FirstOrDefault(x => x.Id == id);
        }
    }
}
