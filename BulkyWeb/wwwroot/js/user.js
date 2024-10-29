
var dataTable;

$(document).ready(function () {
    loadDataTable();
});

function loadDataTable() {
    dataTable = $('#tblData').DataTable({
        "ajax": { url: '/admin/user/getall' },
        "columns": [
            { "data": "name", "width": "15%" },
            { "data": "email", "width": "15%" },
            { "data": "phoneNumber", "width": "15%" },
            { "data": "company.name", "width": "15%" },
            { "data": "role", "width": "15%" },
            {
                data: { id: "id", lockoutEnd: "lockoutEnd" },
                "render": function (data) {
                    var today = new Date().getTime();
                    var lockout = new Date(data.lockoutEnd).getTime();

                    if (lockout > today) {
                        return `
                        <div class="text-center">
                             <a onclick=LockUnlock('${data.id}') class="btn btn-danger text-white" style="cursor:pointer; width:100px;">
                                     Bloquear
                                </a> 
                                <a href="/admin/user/RoleManagment?userId=${data.id}" class="btn btn-danger text-dark" style="cursor:pointer; width:140px;">
                                     Permisos
                                </a>
                        </div>
                    `
                    }
                    else {
                        return `
                        <div class="text-center">
                              <a onclick=LockUnlock('${data.id}') class="btn text-white" style="cursor:pointer; width:100px;">
                                     Unlockear
                                </a>
                                <a href="/admin/user/RoleManagment?userId=${data.id}" class="btn  text-dark" style="cursor:pointer; width:140px;">
                                      Permisos
                                </a>
                        </div>
                    `
                    }
                },
                "width": "25%"
            }
        ]
    });
}



function LockUnlock(id) {

    $.ajax({

        type: "POST",

        url: '/Admin/User/LockUnlock',

        data: JSON.stringify(id),

        contentType: "application/json",

        success: function (data) {

            if (data.success) {

                toastr.success(data.message);

                dataTable.ajax.reload();

            }

        }

    });

}
