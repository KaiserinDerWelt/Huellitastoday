using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace BulkyBook.Models
{
    public class Category
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [MaxLength(30)]
        [DisplayName("Nombre de la Categoria")]
        public string Name { get; set; }
        [DisplayName("Mostrar orden")]
        [Range(1, 100, ErrorMessage = "La orden debe ser entre 1 y 1000 piezas.")]
        public int DisplayOrder { get; set; }
    }
}
