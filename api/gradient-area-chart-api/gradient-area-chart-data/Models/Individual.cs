using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace gradient_area_chart_data.Models {
    public class Individual {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Surname { get; set; }

        public Gender Gender { get; set; }

        public DateTime MeetingDate { get; set; }
    }
}
