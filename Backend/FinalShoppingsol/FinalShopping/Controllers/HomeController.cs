using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using FinalShopping.Models;

namespace FinalShopping.Controllers
{
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class HomeController : ApiController
    {
        dbProjectEntities entities = new dbProjectEntities();

        [HttpGet]
        [Route("GetAllPoduct")]
        public HttpResponseMessage Get()
        {
            var res = entities.sp_GetAllProduct();
            return Request.CreateResponse(HttpStatusCode.OK, res);
        }

    }
}
