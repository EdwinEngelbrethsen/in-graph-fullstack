using gradient_area_chart_data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace gradient_area_chart_data.Interfaces {
    public interface ICompanyRepository {

        List<Company> GetAllCompanies();

        Company GetCompany(int id);
    }
}
