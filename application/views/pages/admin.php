<div class="admin-container">
  <div class="table-title">
    <span>Showroom's Cars</span>
    <div class="button-group">
      <a class="admin-button open-modal secondary" data-url="<?php echo site_url('/admin/add_item'); ?>" data-item="category"><i class="icon ion-md-add"></i> add category</a>
      <a class="admin-button open-modal secondary" data-url="<?php echo site_url('/admin/add_item'); ?>" data-item="color"><i class="icon ion-md-add"></i> add color</a>
      <a class="admin-button open-modal primary" data-url="<?php echo site_url('/admin/add_item'); ?>" data-item="car"><i class="icon ion-md-add"></i> new Car</a>
    </div>
  </div>
  <div class="cards-container">
    <?php if(count($cars) == 0): ?>
      <div class="error absolute">No cars available yet...:(</div>
    <?php endif; ?>
    <?php foreach ($cars as $car_item) : ?>
      <div class="car-card">
        <img src="<?php echo base_url('upload/'.$car_item['IMG_PATH']) ?>" alt="Foto de <?php echo $car_item['MODEL'] ?>">
        <span class="card-car-model"><?php echo $car_item['MODEL'] ?></span></span>
        <span><?php echo $car_item['YEAR'] ?></span>
        <span><?php echo $car_item['COLOR'] ? $car_item['COLOR'] : 'Undefined' ?></span>
        <span><?php echo $car_item['CATEGORY'] ? $car_item['CATEGORY'] : 'Undefined'?></span>
        <span>
          <a class="admin-icon-button" href="<?php echo '/index.php/admin/edit_car/'.$car_item['ID']?>"><i class="icon ion-md-create"></i></a>
          <a class="admin-icon-button" href="<?php echo '/index.php/admin/delete_car/'.$car_item['ID']?>"><i class="icon ion-md-trash"></i></a>
        </span>
      </div>
    <?php endforeach; ?>
  </div>
</div>

<div class="modal" id="modal_container">
  <div class="backdrop"></div>
  <div class="modal-body">
  </div>
</div>