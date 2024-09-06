using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BulkyBook.Utility
{
    public static class SD
    {
        public const string Role_Customer = "Cliente";
        public const string Role_Company = "Empresa";
        public const string Role_Admin = "Admin";
        public const string Role_Employee = "Empleado";

		public const string StatusPending = "Pendiente";
		public const string StatusApproved = "Aprovado";
		public const string StatusInProcess = "Procesando";
		public const string StatusShipped = "Enviado;
		public const string StatusCancelled = "Cancelado";
		public const string StatusRefunded = "Reembolsado";

		public const string PaymentStatusPending = "Pendiente";
		public const string PaymentStatusApproved = "Aprobado";
		public const string PaymentStatusDelayedPayment = "Aprovado pago tardio.";
		public const string PaymentStatusRejected = "Rechazado";

        public const string SessionCart = "SesionCarritoDeCompras";

    }

}
