addEventListener('DOMContentLoaded', function() {

  $('.open-modal').on('click', function (){

    let button = $(this);
    let data = {
      item: button.data('item')
    }

    $.ajax({
      type: "POST",
      url: button.data('url'),
      data: data,
      success: function (data) {
        var $modal = $('#modal_container');
        $modal.addClass('opened');
        $('#modal_container .modal-body').append(data.view);
      }
    });
  })
})