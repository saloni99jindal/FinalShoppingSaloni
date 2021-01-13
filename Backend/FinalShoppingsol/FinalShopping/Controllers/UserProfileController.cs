using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using FinalShopping.Models;
using System.Web.Http.Description;

namespace FinalShopping.Controllers
{
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class UserProfileController : ApiController
    {
        dbProjectEntities entities = new dbProjectEntities();
        [Route("GetUserOrders")]
        [HttpGet]
        public HttpResponseMessage Get(string useremail)
        {
            var userorders = entities.proc_Get_User_Orders1(useremail);

            return Request.CreateResponse(HttpStatusCode.OK, userorders);

        }
        [Route("GetProfileUser")]
        [HttpGet]
        public HttpResponseMessage GetUserProfile(string useremail)
        {
            //var user = entities.tblUsers.Where(u => u.useremail == useremail).ToList().FirstOrDefault();
            var user = entities.proc_Get_Profile_User(useremail);
            return Request.CreateResponse(HttpStatusCode.OK, user);
        }
    }
}
