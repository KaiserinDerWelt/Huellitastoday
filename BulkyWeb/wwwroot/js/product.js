$(document).ready(function () {
    loadDataTable();
});

function loadDataTable() {
    dataTable = $('#tblData').DataTable({
        "ajax": { url: '/admin/product/getall' },
        "columns": [
            { data: 'title', "width": "25%" },
            { data: 'isbn', "width": "15%" },
            { data: 'listPrice', "width": "10%" },
            { data: 'author', "width": "15%" },
            { data: 'category.name', "width": "10%" },
            {
                data: 'id',
                "render": function (data) {
                    return `<div class="w-75 btn-group" role="group">
                    <a href="/admin/product/upsert?id=${data}" class="btn  mx-2">Editar</a>               
                    <a onClick=Delete('/admin/product/delete/${data}') class="btn  mx-2">Borrar</a>
                    </div>`
                },
                "width": "25%"
                
            }
        ]
    });
}


function Delete(url) {
    Swal.fire({
        title: 'Estas seguro?',
        text: "No podras revertir esta accion!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, borrar'
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: url,
                type: 'DELETE',
                success: function (data) {
                    dataTable.ajax.reload();
                    toastr.success(data.message);
                }
            })
        }
    })
}