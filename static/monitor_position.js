const intervalTime = 1000;

$("#datatable").datagrid(
    {
        title:'position monitor',
        remoteSort:false,
        rownumbers:true,
        columns:[
            [
                {field: 'DataDate', title: 'DataDate', sortable: true},
                {field: 'UpdateTime', title: 'UpdateTime', sortable: true},
                {field: 'AcctIDByMXZ', title: 'AcctIDByMXZ', sortable: true},
                {field: 'SecurityID', title: 'SecurityID', sortable: true},
                {field: 'LongQty', title: 'LongQty', sortable: true},
                {field: 'ShortQty', title: 'ShortQty', sortable: true},
                {field: 'NetQty', title: 'NetQty', sortable: true},
            ]
        ]
    }
);

fun()
setInterval(fun, intervalTime);

function fun() {
    $.ajax(
        {
            type:"GET",
            url:'/js_get_position_data',
            dataType:'json',
            success:function (data){
                data=data.sort()
                $('#datatable').datagrid('loadData', data);
            }
        }
    )
}



