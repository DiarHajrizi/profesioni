$(function(){
    $('body').on('click', '.btn_add_employee', function(e){
        $('#modal_add_employee').modal('show')
        $('#input_employee_id').val("")
        $('#input_employee_name').val("")
        $('#input_employee_surname').val("")
        $('#select_employee_role').val("")
        $('#input_employee_balance').val("")
        $('#employee_id').val("")

    })

    $('body').on('click','.btn_save_employee', function(){
        var  id = $('#input_employee_id').val();
        var name = $('#input_employee_name').val();
        var surname = $('#input_employee_surname').val();
        var role = $('#select_employee_role').val();
        var bilance = $('#input_employee_balance').val(); 
        var employeeid = $('#employee_id').val()


        if(role == 'employee'){
            var role_text = 'Puntor'
        }else{
            var role_text = 'Shef'

        }
        if(employeeid == ""){
            var html = `    
            <tr class="row_container_`+id+`">
                <td class="employee_id_`+id+`">`+id
                +`</td>
                <td class="employee_name_`+id+`">`+name+`</td>
                <td  class="employee_surname_`+id+`">`+surname+`</td>
                <td>`+role_text+`</td>
                <td class="employee_balance_`+id+`">`+bilance+"€"+`</td>
                <td class='editBtn' data-id="`+id+`"><i class="fas fa-user-edit"></i></td>
    
            </tr>`

            $('.table_employee_container').append(html)
        
        }else{

            $('.employee_name_'+employeeid).text(name);
            $('.employee_surname_'+employeeid).text(surname)
            $('.employee_balance_'+employeeid).text(bilance);
        }

 
  
        $('#modal_add_employee').modal('hide')

    })
    $('body').on('click', '.editBtn' , function(){    
        var id = $(this).attr('data-id');
        var name = $('.employee_name_'+id).text();
        var surname = $('.employee_surname_'+id).text()
        var bilance = $('.employee_balance_'+id).text();

        $('#input_employee_'+id).val(id);
        $('#input_employee_name').val(name);
        $('#input_employee_surname').val(surname);
        $('#input_employee_balance').val(bilance);

        $('#employee_id').val(id)
        $('#modal_add_employee').modal('show')
      
    })
})