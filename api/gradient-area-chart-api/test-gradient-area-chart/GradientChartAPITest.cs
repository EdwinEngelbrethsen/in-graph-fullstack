using gradient_area_chart_api.Controllers;
using gradient_area_chart_data.Interfaces;
using gradient_area_chart_data.Models;
using gradient_area_chart_data.Repositories;
using System;
using Xunit;

namespace test_gradient_area_chart {
    public class GradientChatAPITest {

        /* Would Use Moq to test towards a database but there isn't one */

        [Fact]
        public void Check_For_Expected_Id_And_Name() {
            CompanyRepository companies = new CompanyRepository();

            var companyID = 1;
            var Name = "Google";

            // Act
            var response = companies.GetCompany(companyID);

            // Assert
            Assert.Equal(companyID, response.Id);
            Assert.Equal(Name, response.Name);
        }

        [Fact]
        public void Check_For_Expected_Name_And_Surname() {
            IndividualRepository individuals = new IndividualRepository();

            var IndividualId = 1;
            var Name = "Ivan";
            var Surname = "Malkov";

            var response = individuals.GetIndividual(IndividualId);

            Assert.Equal(Name, response.Name);
            Assert.Equal(Surname, response.Surname);
                        
        }
    }
}
