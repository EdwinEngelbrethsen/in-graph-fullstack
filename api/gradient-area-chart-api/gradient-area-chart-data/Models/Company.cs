using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace gradient_area_chart_data.Models {
    public class Company {

        public int Id { get; set; }

        public string Name { get; set; }

        public string Advisor { get; set; }

        public Gender Gender { get; set; }

        public DateTime MeetingDate { get; set; }

    }
}
