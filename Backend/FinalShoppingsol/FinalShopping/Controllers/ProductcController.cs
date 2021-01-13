using System;
using System.Collections.Generic;
using System.Linq;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;
using FinalShopping.Models;

namespace FinalShopping.Controllers
{
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class ProductcController : ApiController
    {
        dbProjectEntities entities = new dbProjectEntities();

        [Route("ProductUpload")]
        [HttpPost]

        public HttpResponseMessage ProductUpload()
        {
            string imageName = null;

            var httpRequest = HttpContext.Current.Request;
            //Upload Image
            var postedFile = httpRequest.Files["Image"];
            //var postedFile = fileToUpload;
            //Create custom filename
            imageName = new String(Path.GetFileNameWithoutExtension(postedFile.FileName).Take(10).ToArray()).Replace(" ", "-");
            imageName = imageName + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(postedFile.FileName);
            var filePath = HttpContext.Current.Server.MapPath("~/Image/" + imageName);
            postedFile.SaveAs(filePath);

            using (dbProjectEntities entities = new dbProjectEntities())
            {

                tblProduct tblProduct = new tblProduct();
                tblProduct.retailerid = Convert.ToInt32(httpRequest["RetailerId"].ToString());
                tblProduct.productname = httpRequest["ProductName"].ToString();
                tblProduct.productdescription = httpRequest["ProductDescription"].ToString();
                tblProduct.productbrand = httpRequest["ProductBrand"].ToString();
                tblProduct.productquantity = Convert.ToInt32(httpRequest["ProductQuantity"].ToString());
                tblProduct.productprice = Convert.ToInt32(httpRequest["ProductPrice"].ToString());
                tblProduct.categoryid = Convert.ToInt32(httpRequest["CategoryId"].ToString());
                tblProduct.productnotification = "add";
                tblProduct.productstatus = "accepted";

                tblProduct.productimage1 = imageName.ToString();

                entities.tblProducts.Add(tblProduct);

                entities.SaveChanges();
            }
            return Request.CreateResponse(HttpStatusCode.OK, "Success");
        }

        [Route("AllProducts")]
        [HttpGet]

        public HttpResponseMessage GetProducts()
        {
            var products = entities.proc_Get_AllProducts().ToList();
            if (products.Count > 0)
            {
                return Request.CreateResponse(HttpStatusCode.OK, products);
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, "No data found");
            }
        }

        [Route("SearchProduct")]
        [HttpGet]

        public HttpResponseMessage SearchProduct(string search)
        {
            var products = entities.proc_Search_Result(search).ToList();
            return Request.CreateResponse(HttpStatusCode.OK, products);
        }

    }
}
