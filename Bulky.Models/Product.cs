using Microsoft.AspNetCore.Mvc.ModelBinding.Validation;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BulkyBook.Models
{
    public class Product
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [Display(Name = "Titulo")]
        public string Title { get; set; }

        [Display(Name = "Descripción")]
        public string Description { get; set; }

        [Required]
        [Display(Name = "SKU")]
        public string ISBN { get; set; }

        [Required]
        [Display(Name = "Mascota")]
        public string Author { get; set; }


        [Required]
        [Display(Name = "Precio de lista")]
        [Range(1, 1000)]
        public double ListPrice { get; set; }


        [Required]
        [Display(Name = "Precio de 1 a 50 piezas")]
        [Range(1, 1000)]
        public double Price { get; set; }


        [Required]
        [Display(Name = "Precio de 50 piezas +")]
        [Range(1, 1000)]
        public double Price50 { get; set; }

        [Required]
        [Display(Name = "Precio de 100 piezas +")]
        [Range(1, 1000)]
        public double Price100 { get; set; }

        public int CategoryId { get; set; }
        [ForeignKey("CategoryId")]
        [ValidateNever]
        public Category Category { get; set; }

        [ValidateNever]
        public List<ProductImage> ProductImages { get; set; }
    }
}
